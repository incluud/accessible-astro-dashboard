# Accessible Astro Dashboard

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

![accessible-astro-dashboard](https://github.com/user-attachments/assets/1c0eaf50-148d-4986-8211-a835a65eb2e3)

A modern, accessibility-focused dashboard template built with [Astro](https://astro.build/). Designed with WCAG guidelines in mind, this theme provides a comprehensive admin interface with built-in accessibility features. It includes a responsive, keyboard-accessible navigation system, authentication flows, and integrates seamlessly with [Accessible Astro Components](https://github.com/incluud/accessible-astro-components). Complete with example pages, authentication flows, and a custom 404 page, this template offers everything you need to kickstart your accessible admin dashboard.

[![LIVE DEMO](https://img.shields.io/badge/LIVE_DEMO-4ECCA3?style=for-the-badge&logo=astro&logoColor=black)](https://accessible-astro-dashboard.incluud.dev/login/) &nbsp;
[![DOCUMENTATION](https://img.shields.io/badge/DOCUMENTATION-A682FF?style=for-the-badge&logo=astro&logoColor=black)](https://accessible-astro.incluud.dev/themes/accessible-astro-dashboard) &nbsp;
[![Sponsor on Open Collective](https://img.shields.io/badge/Open%20Collective-7FADF2?style=for-the-badge&logo=opencollective&logoColor=white)](https://opencollective.com/incluud) &nbsp;

## Our mission

> Provide developers with accessible, easy-to-use components that make building inclusive web applications simpler and faster, without compromising on customization or performance.

## (Accessibility) features

- Contains a `login.astro` page with an example login using the `localStorage` and a separate `LoginLayout.astro` layout
- `login.astro` contains example login data and a warning notification for when the credentials are incorrect
- Contains a dashboard example in the `index.astro` page using the `DefaultLayout.astro` layout
- Several examples of admin pages such as `media.astro`, `messages.astro`, `products.astro`, `settings.astro` and `users.astro`
- `Media.astro` component for images, used on the `media.astro` page \*
- `Pagination.astro` component for paginating results, used on the `media.astro` page \*
- `DashboardWidget.astro` component serves as an example for the dashboard on `index.astro`
- `EmpyState.astro` component which can be displayed on pages that don't have any data yet
- `LoginForm.astro` component with a basic accessible login form and some form controls
- `SkipLinks.astro` component to skip to either the main menu or the main content \*
- `Navigation.astro` component with keyboard accessible navigation (arrow keys, escape key)
  - This component is a comprehensive sidebar navigation on desktop with the option to expand or collapse
  - The users menu width preference is stored in a `localStorage` value so that it is preserved during page reloads
  - The navigation automatically switches to an accessible mobile navigation for viewport widths below the medium breakpoint
- `ResponsiveToggle.astro` component with an accessible responsive toggle button for the mobile navigation
- `DarkMode.astro` component toggle with accessible button which saves the users preference in the `localStorage` \*
- `404.astro` provides a custom 404 error page which you can adjust to your needs
- `.sr-only` utility class for screen reader only text content
- `prefers-reduced-motion` disables animations for users that have this preference turned on
- Outline focus indicator which works on dark and light backgrounds
- [Accessible Astro Components](https://github.com/incluud/accessible-astro-components) package comes preinstalled with extra components such as Accordions, Modals and Notifications
- Nate Moore's awesome [Astro Icon](https://github.com/natemoo-re/astro-icon) package is also preinstalled which can be applied to different use cases

## Getting started

Clone this theme locally and run any of the following commands in your terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## Accessible Astro projects

- [Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter): Fully accessible starter for kickstarting Astro projects, with Tailwind.
- [Accessible Astro Components](https://github.com/incluud/accessible-astro-components/): Library of reusable, accessible components build for Astro.
- [Accessible Astro Dashboard](https://github.com/incluud/accessible-astro-dashboard/): User-friendly dashboard interface with a login screen and widgets.
- [Accessible Astro Docs](https://github.com/incluud/accessible-astro-docs): Comprehensive documentation for all Accessible Astro projects.
- [Color Contrast Checker](https://github.com/incluud/color-contrast-checker): WCAG-compliant color contrast checker with design system token generation.

Check out our [roadmap](https://github.com/orgs/incluud/projects/4/views/1) to see what's coming next!

## Contributing

We welcome contributions to improve the documentation! You can help by:

1. [Filing an issue](https://github.com/incluud/accessible-astro-dashboard/issues)
2. [Submitting a pull request](https://github.com/incluud/accessible-astro-dashboard/pulls)
3. [Starting a discussion](https://github.com/incluud/accessible-astro-dashboard/discussions)
4. [Supporting on Open Collective](https://opencollective.com/incluud)

## Support this project

Your support helps us cover basic costs and continue building accessible solutions for the Astro ecosystem. By becoming a sponsor, you're not just supporting code – you're helping create a more inclusive web for everyone. Every contribution, big or small, helps maintain and improve these accessibility-focused tools.

[![Sponsor on Open Collective](https://img.shields.io/badge/Open%20Collective-7FADF2?style=for-the-badge&logo=opencollective&logoColor=white)](https://opencollective.com/incluud)

## Together we make a difference

We want to express our heartfelt gratitude to everyone who contributes to making the web more accessible:

- **The Astro team** for creating an amazing static site generator and the wonderful Starlight theme
- **Our contributors** who dedicate their time and expertise to improve these tools
- **Our sponsors** who help make this project sustainable
- **The web community** for embracing and promoting web accessibility
- **You, the developer** for choosing to make your projects more accessible

<a href="https://github.com/incluud/accessible-astro-starter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=incluud/accessible-astro-dashboard" />
</a><br /><br />

Together, we're not just building documentation or components – we're creating a more inclusive and accessible web for everyone. Every contribution, whether it's code, documentation, bug reports, or feedback, helps move us closer to this goal. ✨

Remember: Accessibility is not a feature, it's a fundamental right. Thank you for being part of this journey!
