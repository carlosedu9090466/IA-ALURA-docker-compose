# Implementation Plan - Register Page (Cadastro) with Atomic Design

Develop the Register page (`RegisterPage`) for `apps/web` maximizing component reuse from the existing Atomic Design library (`AuthTemplate`, `AuthBanner`, `FormField`, `Button`, `Input`, `SocialButton`, `Divider`). The layout will match the provided mock artifact (dark theme, banner image `/IMG_2 - Desktop.png`, fields for Name, Email, Password, Lembrar-me checkbox, and login redirection link).

## User Review Required

> [!IMPORTANT]
> - Existing components (`AuthTemplate`, `AuthBanner`, `FormField`, `Button`, `Input`, `Checkbox`, `SocialButton`, `Divider`) will be reused directly without breaking changes.
> - `RememberMeRow` will be updated with an optional prop `showForgotPassword?: boolean` (defaults to `true`) so it can cleanly render only the `Lembrar-me` checkbox on the register page.
> - Unit test files (`*.test.tsx`) will be created for `RegisterForm` and `RegisterPage` per project standards in `GEMINI.md`.
> - The new route `/cadastro` will be registered in `README.md`.

## Open Questions

None at this time. The layout design matches the provided image artifact.

---

## Proposed Changes

### Component Refactoring for Reusability (`apps/web/src/components/`)

#### [MODIFY] [RememberMeRow.tsx](file:///d:/Anota%C3%A7%C3%B5es%20-%20Carlos/CURSO%20IA/apps/web/src/components/molecules/RememberMeRow/RememberMeRow.tsx) & [RememberMeRow.test.tsx](file:///d:/Anota%C3%A7%C3%B5es%20-%20Carlos/CURSO%20IA/apps/web/src/components/molecules/RememberMeRow/RememberMeRow.test.tsx)
- Add optional `showForgotPassword?: boolean` prop (default `true`). When `false`, hide the "Esqueci a senha" link.

---

### New Organisms & Pages (`apps/web/src/components/` & `apps/web/src/pages/`)

#### Organisms
- [NEW] `src/components/organisms/RegisterForm/RegisterForm.tsx` & `RegisterForm.test.tsx`: Register form organism rendering fields for Nome, Email, Senha, Lembrar-me checkbox, Submit button (`Cadastrar →`), Social buttons (GitHub & Gmail), and Login redirection link (`Já tem conta? Faça seu login!`).

#### Pages & Navigation
- [NEW] `src/pages/RegisterPage/RegisterPage.tsx` & `RegisterPage.test.tsx`: Page assembling `AuthTemplate`, `AuthBanner` (`/IMG_2 - Desktop.png`), and `RegisterForm`.
- [MODIFY] `src/App.tsx`: Add client-side router/navigation between `/` (Login) and `/cadastro` (Register).

---

### Documentation (`README.md` & `plans/`)

#### [MODIFY] [README.md](file:///d:/Anota%C3%A7%C3%B5es%20-%20Carlos/CURSO%20IA/README.md)
- Document the new `/cadastro` route under `## 🗺️ Rotas da Aplicação`.

#### [NEW] [register_page_implementation_plan.md](file:///d:/Anota%C3%A7%C3%B5es%20-%20Carlos/CURSO%20IA/plans/register_page_implementation_plan.md)
- Save copy of this plan in `plans/` as required by rule #7 in `GEMINI.md`.

---

## Verification Plan

### Automated Tests
- Run unit tests for all components:
  `npx pnpm --filter web test`
- Run linting check:
  `npx pnpm --filter web lint`
- Run build check:
  `npx pnpm --filter web build`

### Manual Verification
- Access `/` (Login) and click `Crie seu cadastro! 📝` to navigate to `/cadastro`.
- Verify the Register page renders correctly with the new banner (`IMG_2 - Desktop.png`), fields for `Nome`, `Email`, `Senha`, `Lembrar-me`, and `Cadastrar →` button.
- Click `Faça seu login!` to navigate back to `/`.
