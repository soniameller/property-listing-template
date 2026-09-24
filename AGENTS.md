## Customise for a new listing

Use this project as a starting point for one property listing. Do not keep the demo copy, placeholder images, or example coordinates in a live site.

1. Replace the demo property in `src/lib/fallback-data.ts` (title, price, description, features, WhatsApp, coordinates).
2. Add matching Portuguese copy in `src/i18n/property.ts` under the same `slug`.
3. Replace files in `public/photos/` and, if you use the inspiration section, `public/inspiration/`.
4. Update generic UI strings in `src/i18n/ui.ts` if they mention a specific area.
5. Set `site` in `astro.config.mjs` to the live URL.
6. Follow the README for Contentful, Netlify, and environment variables.

To hide floor plans or inspiration, toggle `showFloorPlans` and `showInspiration` in `src/components/PropertyPage.astro`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
