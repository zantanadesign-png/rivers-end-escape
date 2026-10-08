<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Hotel frontend architecture
- Keep property configuration, temporary image imports, and all suite content in `src/lib/hotel.ts` so replacement photography and booking details have one source of truth.
- Use shared editorial components in `src/components/hotel` and one SuitePage for all three static suite routes so their layouts remain consistent.
- Keep the five content routes public and frontend-only; reservations always open the configured external booking URL, never an internal booking flow.
