# Implementation Plan - Login Page with Atomic Design

Develop the Login page for `apps/web` adhering strictly to Atomic Design principles, using React 19, Tailwind CSS, and Vite. The design will match the provided mock artifact (dark theme, green accent, dual-column container, background watermarks) and build reusable layout templates (`AuthTemplate`) and banner components (`AuthBanner`) prepared for future sign-up (cadastro) page reuse.

## User Review Required

> [!IMPORTANT]
> - All social icons (`Github.png`, `Google.png`) and banner images (`IMG_1 - Desktop.png`) located in `@apps/web/public/` will be rendered cleanly in the components.
> - Vitest and React Testing Library will be set up in `apps/web` so that every created Atomic component has unit test coverage (`*.test.tsx`) as required by project rules in `GEMINI.md`.

## Open Questions

None at this time. The layout design matches the provided image artifact exactly.

---

## Proposed Changes

### Configuration & Testing Setup (`apps/web`)

#### [MODIFY] [package.json](file:///d:/Anota%C3%A7%C3%B5es%20-%20Carlos/CURSO%20IA/apps/web/package.json)
- Add `@tailwindcss/vite`, `tailwindcss`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, and `jsdom` to devDependencies.
- Add `"test": "vitest run"` script.

#### [MODIFY] [vite.config.ts](file:///d:/Anota%C3%A7%C3%B5es%20-%20Carlos/CURSO%20IA/apps/web/vite.config.ts)
- Configure `@tailwindcss/vite` plugin and Vitest test environment (`jsdom`, `setupFiles`).

#### [NEW] [setup.ts](file:///d:/Anota%C3%A7%C3%B5es%20-%20Carlos/CURSO%20IA/apps/web/src/test/setup.ts)
- Add `@testing-library/jest-dom` import for component tests.

#### [MODIFY] [index.css](file:///d:/Anota%C3%A7%C3%B5es%20-%20Carlos/CURSO%20IA/apps/web/src/index.css)
- Configure Tailwind CSS directives (`@import "tailwindcss";` / custom theme color definitions for background `#060B0E`, card background `#171D1F`, input background `#384045`, button accent `#81FE88`).

---

### Atomic Components (`apps/web/src/components/`)

#### Atoms
- [NEW] `src/components/atoms/Button/Button.tsx` & `Button.test.tsx`: Reusable button (primary green `#81FE88`, full-width support, icon slot).
- [NEW] `src/components/atoms/Input/Input.tsx` & `Input.test.tsx`: Dark styled form input box (`#384045`, text color, rounded-lg).
- [NEW] `src/components/atoms/Label/Label.tsx` & `Label.test.tsx`: Form field label component.
- [NEW] `src/components/atoms/Checkbox/Checkbox.tsx` & `Checkbox.test.tsx`: Styled checkbox component with green checked state.
- [NEW] `src/components/atoms/Link/Link.tsx` & `Link.test.tsx`: Styled hyperlink component (underlined or green text).
- [NEW] `src/components/atoms/Typography/Typography.tsx` & `Typography.test.tsx`: Headings (`h1`, `h2`) and text paragraphs (`p`).

#### Molecules
- [NEW] `src/components/molecules/FormField/FormField.tsx` & `FormField.test.tsx`: Wraps `Label` and `Input` with optional helper/error text.
- [NEW] `src/components/molecules/SocialButton/SocialButton.tsx` & `SocialButton.test.tsx`: Renders social provider icon (`Github.png` / `Google.png`) and title (`GitHub` / `Gmail`).
- [NEW] `src/components/molecules/Divider/Divider.tsx` & `Divider.test.tsx`: Text divider line ("ou entre com outras contas").
- [NEW] `src/components/molecules/RememberMeRow/RememberMeRow.tsx` & `RememberMeRow.test.tsx`: Grouping `Checkbox` ("Lembrar-me") and `Link` ("Esqueci a senha").

#### Organisms
- [NEW] `src/components/organisms/AuthBanner/AuthBanner.tsx` & `AuthBanner.test.tsx`: Side banner displaying `IMG_1 - Desktop.png` (reusable for registration banner).
- [NEW] `src/components/organisms/LoginForm/LoginForm.tsx` & `LoginForm.test.tsx`: Complete login form organism containing fields, submit action, social login options, and signup redirection link.

#### Templates
- [NEW] `src/components/templates/AuthTemplate/AuthTemplate.tsx` & `AuthTemplate.test.tsx`: Dual-column card container layout with watermark background design. Reusable for both login and signup pages.

#### Pages & Entrypoint
- [NEW] `src/pages/LoginPage/LoginPage.tsx` & `LoginPage.test.tsx`: Login page assembling `AuthTemplate`, `AuthBanner`, and `LoginForm`.
- [MODIFY] `src/App.tsx`: Renders `LoginPage`.

---

## Verification Plan

### Automated Tests
- Run unit tests for all atomic components:
  `npx pnpm --filter web test`
- Run linting:
  `npx pnpm --filter web lint`
- Run build check:
  `npx pnpm --filter web build`

### Manual Verification
- Render the `LoginPage` component and verify visual match against the design mock (dark theme `#070D0E`, green button `#81FE88`, input fields, social login buttons with GitHub/Google images, background watermark decorations).
