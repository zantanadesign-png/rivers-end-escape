import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';

/** Progressive enhancement: the server-rendered page stays readable without JS. */
export function ScrollReveals() {
  const pathname = useRouterState({ select: state => state.location.pathname });

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;

    const animations: Animation[] = [];
    const targetAnimations = new Map<HTMLElement, Animation[]>();
    const restorations: (() => void)[] = [];
    const targets: HTMLElement[] = [];
    let stopped = false;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (stopped) continue;
        const element = entry.target as HTMLElement;
        const existing = targetAnimations.get(element);
        if (!entry.isIntersecting) {
          existing?.forEach(animation => { animation.playbackRate = -1; animation.play(); });
          continue;
        }
        if (existing) {
          existing.forEach(animation => { animation.playbackRate = 1; animation.play(); });
          continue;
        }
        const group: Animation[] = [];
        const words = Array.from(element.querySelectorAll<HTMLElement>('.scroll-reveal-word'));
        const bounds = element.getBoundingClientRect();
        element.dataset['scrollReveal'] = 'visible';
        if (words.length) {
          for (const word of words) {
            const rect = word.getBoundingClientRect();
            // A diagonal wave, following the actual wrapped lines at every width.
            const progress = ((rect.left - bounds.left) / Math.max(bounds.width, 1)) * 0.48
              + ((rect.top - bounds.top) / Math.max(bounds.height, 1)) * 0.52;
            group.push(word.animate([
              { opacity: 0, filter: 'blur(7px)' },
              { opacity: 1, filter: 'blur(0px)' },
            ], { duration: 750, delay: Math.max(0, progress) * 650, easing: 'cubic-bezier(.22,.61,.36,1)', fill: 'both' }));
          }
        } else {
          group.push(element.animate([
            { opacity: 0, translate: '0 24px' },
            { opacity: 1, translate: '0 0px' },
          ], { duration: 800, delay: 180, easing: 'cubic-bezier(.22,.61,.36,1)', fill: 'both' }));
        }
        targetAnimations.set(element, group);
        animations.push(...group);
      }
    }, { threshold: 0, rootMargin: '-6% 0px -10% 0px' });

    const stop = () => {
      stopped = true;
      observer.disconnect();
      contentObserver.disconnect();
      animations.forEach(animation => animation.cancel());
      targets.forEach(target => delete target.dataset['scrollReveal']);
      restorations.forEach(restore => restore());
    };

    const prepared = new WeakSet<HTMLElement>();
    const prepare = () => {
      if (stopped) return;
      const scope = 'main, .contact-section, .site-footer';
      const selector = 'h1, h2, h3, p, .eyebrow, .hero-eyebrow, .hero-location, .hero-index, .suite-number, .activity-number, .activity-location, .amenities-list li > span';
      document.querySelectorAll<HTMLElement>(scope).forEach(root => {
        if (prepared.has(root)) return;
        prepared.add(root);
        root.querySelectorAll<HTMLElement>(selector).forEach(element => {
          if (element.closest('nav, button, a') || element.querySelector('input, textarea')) return;
          const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
          const nodes: Text[] = [];
          let node = walker.nextNode();
          while (node) { nodes.push(node as Text); node = walker.nextNode(); }
          for (const textNode of nodes) {
            if (!textNode.textContent?.trim()) continue;
            const fragment = document.createDocumentFragment();
            const inserted: Node[] = [];
            for (const part of textNode.textContent.split(/(\s+)/)) {
              if (!part) continue;
              const child = /\S/.test(part) ? document.createElement('span') : document.createTextNode(part);
              child.textContent = part;
              if (child instanceof HTMLElement) child.className = 'scroll-reveal-word';
              inserted.push(child);
              fragment.appendChild(child);
            }
            textNode.replaceWith(fragment);
            restorations.push(() => {
              const first = inserted[0];
              if (first?.parentNode) first.parentNode.replaceChild(textNode, first);
              inserted.slice(1).forEach(child => child.parentNode?.removeChild(child));
            });
          }
          if (element.querySelector('.scroll-reveal-word')) targets.push(element);
        });
        root.querySelectorAll<HTMLElement>('.editorial-image img, .hero > img, .suite-preview-images, .footer-symbol img').forEach(image => {
          image.classList.add('scroll-reveal-photo');
          restorations.push(() => image.classList.remove('scroll-reveal-photo'));
          targets.push(image);
        });
      });
      targets.forEach(target => {
        if (target.dataset['scrollReveal']) return;
        target.dataset['scrollReveal'] = 'pending';
        observer.observe(target);
      });
    };
    // Route content can arrive after the shared layout hydrates.
    const contentObserver = new MutationObserver(prepare);
    contentObserver.observe(document.body, { childList: true, subtree: true });
    const frame = requestAnimationFrame(prepare);

    const onMotionChange = () => { if (motion.matches) { cancelAnimationFrame(frame); stop(); } };
    motion.addEventListener('change', onMotionChange);
    return () => { cancelAnimationFrame(frame); motion.removeEventListener('change', onMotionChange); stop(); };
  }, [pathname]);

  return null;
}