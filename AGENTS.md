# Accessible Astro Dashboard

An accessible dashboard theme for Astro with authentication, server-side rendering, and WCAG 2.2 AA compliance.

## Project Overview

- **Type**: Dashboard theme with authentication and protected routes
- **Output Mode**: SSR (server-side rendering)
- **Adapter**: Netlify (`@astrojs/netlify`)
- **Homepage**: https://accessible-astro-dashboard.incluud.dev/
- **Repository**: https://github.com/incluud/accessible-astro-dashboard

Check `package.json` for current version and all dependencies.

### Key Dependencies

- `astro` - Framework (Astro 5.x+)
- `accessible-astro-components` - Core component library
- `tailwindcss` - Styling (v4.x with Vite plugin)
- `@astrojs/mdx` - MDX support
- `@astrojs/netlify` - Netlify SSR adapter
- `astro-icon` - Icon system (using Lucide icon set)
- `sanitize-html` - Form data sanitization
- ESLint with `eslint-plugin-jsx-a11y` - Accessibility linting
- Prettier with Astro and Tailwind plugins - Code formatting

## Authentication System

This project includes a simple demo authentication system via middleware:

- **Demo Credentials**:
  - Email: `admin@astro.demo`
  - Password: `Astronaut570`
- **Auth Cookie**: `auth-token` (httpOnly, secure, 7-day expiry)
- **Protected Routes**: `/`, `/users`, `/products`, `/messages`, `/media`, `/settings`
- **Public Routes**: `/login`, `/404`
- **Logout**: Navigate to `/logout` to clear auth session

⚠️ **Important**: The authentication in `src/middleware.ts` is for demonstration purposes only. In production, use proper authentication services (Auth.js, Supabase, Firebase Auth, etc.).

## Dev Environment Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start dev server**:

   ```bash
   npm run dev
   # or
   npm start
   ```

   Server starts at `http://localhost:4321`

3. **Build production site**:

   ```bash
   npm run build
   ```

   Output: `./dist/`

4. **Preview production build**:
   ```bash
   npm run preview
   ```

### Workspace Development (Symlinked Components)

This project can work with locally linked `accessible-astro-components`:

- The `astro.config.mjs` automatically detects symlinked packages
- When symlinks are detected, it enables:
  - Auto-reload on component changes
  - Filesystem access to parent directories
  - Symlink preservation in Vite

**To link local components**:

```bash
cd ../accessible-astro-components
npm link
cd ../accessible-astro-dashboard
npm link accessible-astro-components
```

## Code Style Guidelines

### TypeScript

- Strict mode enabled
- Path aliases configured for cleaner imports:
  - `@components` → `./src/components`
  - `@layouts` → `./src/layouts`
  - `@assets` → `./src/assets`
  - `@content` → `./src/content`
  - `@pages` → `./src/pages`
  - `@public` → `./public`
  - `@post-images` → `./public/posts`
  - `@project-images` → `./public/projects`

### Formatting

- **Prettier** is configured with:
  - `prettier-plugin-astro`
  - `prettier-plugin-css-order`
  - `prettier-plugin-tailwindcss`
- Run format manually: `npx prettier --write .`

### Linting

- **ESLint** configured with:
  - `@typescript-eslint/eslint-plugin`
  - `eslint-plugin-astro`
  - `eslint-plugin-jsx-a11y` (strict accessibility rules)
- Check manually: `npx eslint .`

### Styling

- **Tailwind CSS v4** with Vite plugin
- **SCSS** with custom utilities in `src/assets/scss/`
- Use logical properties (e.g., `inline-start` instead of `left`)
- Custom properties for theming

## Accessibility Requirements

This project follows **WCAG 2.2 AA** standards. When contributing:

### Essential Practices

1. **Semantic HTML**: Use appropriate elements (`<button>`, `<nav>`, `<main>`, etc.)
2. **Keyboard Navigation**: All interactive elements must be keyboard accessible
3. **Focus Indicators**: Never remove focus outlines without accessible alternatives
4. **Alt Text**: Provide meaningful alt text for images (or use `alt=""` for decorative images)
5. **Color Contrast**: Ensure text has 4.5:1 contrast (3:1 for large text)
6. **ARIA**: Only use ARIA when native HTML is insufficient
7. **Heading Hierarchy**: Maintain proper h1-h6 order
8. **Forms**: Use `<label>`, proper input types, and error messages

### Testing

- Test with keyboard only (no mouse)
- Test with screen readers (VoiceOver, NVDA, JAWS)
- Use ESLint's jsx-a11y rules to catch common issues
- Check color contrast ratios
- Verify `prefers-reduced-motion` is respected

## File Structure

```
src/
├── components/          # Custom dashboard components
├── content/             # MDX content (projects)
├── layouts/             # Page layouts
├── pages/               # Route pages (index, login, etc.)
├── assets/
│   ├── images/          # Static images
│   ├── img/             # SVG assets (logos, etc.)
│   └── scss/            # SCSS utility classes
├── styles/              # Global styles (Tailwind)
├── middleware.ts        # Auth middleware (DEMO ONLY - see Security section)
├── content.config.ts    # Content collections config
└── env.d.ts             # Type definitions

public/                  # Static assets (fonts, images)
```

**Important**: The `middleware.ts` file contains demo authentication only. Replace with a proper auth service for production.

## Working with Components

### Using Accessible Astro Components

Import from the package:

```astro
---
import { Button, Modal, DarkMode } from 'accessible-astro-components'
---
```

### Creating Custom Components

- Place in `src/components/`
- Use semantic HTML
- Add proper ARIA attributes when needed
- Ensure keyboard accessibility
- Follow existing patterns in the codebase

## Content Collections

The project uses Astro Content Collections for MDX content:

- **Projects**: `src/content/projects/`
- Schema defined in `src/content.config.ts`
- Use frontmatter for metadata
- Query with `getCollection()` API

## Deployment

This project is configured for **Netlify** deployment with SSR:

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Netlify adapter handles server functions automatically
4. Environment variables (if needed):
   - Set via Netlify dashboard
   - Access via `import.meta.env`

## Security Considerations

⚠️ **Critical**: The authentication system is for demonstration purposes only.

### Demo Auth System

The `src/middleware.ts` file contains a simple authentication demo that:

- Uses hardcoded credentials (admin@astro.demo / Astronaut570)
- Stores auth state in a simple cookie
- Protects routes via middleware

**For Production**: Replace this with a proper authentication service:

- Auth.js (formerly NextAuth.js)
- Supabase Auth
- Firebase Auth
- Clerk
- Any OAuth provider

### Current Security Measures

- **Cookies**: Using httpOnly, secure, sameSite strict for auth token
- **Form Data**: Using `sanitize-html` package for user input sanitization
- **Dependencies**: Keep updated for security patches

### Protected Routes

Protected routes are defined in `src/middleware.ts`:

- Dashboard pages: `/`, `/users`, `/products`, `/messages`, `/media`, `/settings`
- Public pages: `/login`, `/404`
- Logout endpoint: `/logout`

## Commit Guidelines

Follow conventional commits format:

```
type(scope): subject

[optional body]

[optional footer]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Examples**:

- `feat(auth): add remember me functionality`
- `fix(modal): resolve keyboard trap issue`
- `docs(readme): update installation instructions`
- `a11y(forms): improve error message announcements`

## PR Instructions

- **Title format**: `[dashboard] Brief description`
- **Check before submitting**:
  - Run `npm run build` - no errors
  - Check `npx eslint .` - no accessibility violations
  - Test authentication flow works
  - Test keyboard navigation
  - Verify no console errors
  - Check responsive design on mobile
- **Include in PR description**:
  - What changed and why
  - Any accessibility considerations
  - Screenshots/videos for UI changes
  - Testing steps

## Troubleshooting

### Symlinked Components Not Updating

1. Check if symlink is detected: Look for "Workspace detected" message on dev server start
2. Verify symlink: `ls -la node_modules/accessible-astro-components`
3. Try restarting dev server

### Authentication Not Working

1. Check cookies are enabled in browser
2. Verify middleware is running (check console logs)
3. Clear cookies and try again
4. Check credentials match exactly (case-sensitive)

### Build Failures

1. Clear cache: `rm -rf node_modules/.astro node_modules/.vite`
2. Reinstall: `rm -rf node_modules && npm install`
3. Check Node version compatibility (Node 18+)

## Related Projects

This is part of the Accessible Astro ecosystem:

- **[Accessible Astro Components](https://github.com/incluud/accessible-astro-components)**: Component library (dependency)
- **[Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter)**: General purpose starter
- **[Accessible Astro Docs](https://github.com/incluud/accessible-astro-docs)**: Documentation site

## Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Project Roadmap](https://github.com/orgs/incluud/projects/4/views/1)
