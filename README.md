# Property listing template

A single-page property listing website, similar to an Idealista page. Built with Astro, optional Contentful CMS, and Netlify. Use this as a starting point for one house, then swap in your own photos and copy.

This repository is a **template**. It ships with demo data and placeholder images only.

<img width="2482" height="9372" alt="screencapture-localhost-4325-2026-09-24-12_00_06" src="https://github.com/user-attachments/assets/40f7f9fc-0ea1-49a2-a915-f02e4f07bc74" />


## Features

- **Listing page**: price, photos, bedrooms, bathrooms, m², features, map, description
- **English and Portuguese** UI, with listing copy you can override per language
- **Photo gallery** with lightbox (keyboard and touch friendly)
- **WhatsApp contact** with a pre-filled message
- **Netlify contact form** (optional, toggle via CMS)
- **Contentful CMS** — update price, photos, and text without redeploying code
- **Demo mode** — works out of the box before Contentful is configured
- **Mobile-first** design with a sticky contact button
- **SEO and social sharing** meta tags
- **Cloudflare Web Analytics** — privacy-friendly visitor tracking

## Customise for a new listing

If you are using Cursor (or another coding agent), start with this prompt:

> This is a property listing site. Replace the demo data with my listing: [address, price, beds, baths, size, features, WhatsApp]. Put photos in `public/photos/` and update `src/lib/fallback-data.ts` plus the Portuguese copy in `src/i18n/property.ts`. Set the live URL in `astro.config.mjs`. Follow the README for Contentful and Netlify.

Manual checklist:

1. Replace the demo property in `src/lib/fallback-data.ts`.
2. Add matching Portuguese copy in `src/i18n/property.ts` under the same slug.
3. Replace placeholder files in `public/photos/` (and `public/inspiration/` if you keep that section).
4. Update location strings in `src/i18n/ui.ts` if they should name a specific area.
5. Set `site` in `astro.config.mjs` to your live URL.
6. To hide floor plans or inspiration, toggle `showFloorPlans` and `showInspiration` in `src/components/PropertyPage.astro`.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to see the demo property.

## Contentful setup

### 1. Create a free Contentful account

Go to [contentful.com](https://www.contentful.com/) and create a space.

### 2. Create the content model

Create a content type called **`property`** with these fields:

| Field ID | Name | Type | Required |
|----------|------|------|----------|
| `title` | Title | Short text | Yes |
| `slug` | Slug | Short text | Yes |
| `description` | Description | Long text | Yes |
| `price` | Price | Number (integer) | Yes |
| `currency` | Currency | Short text | Yes (default: EUR) |
| `propertyType` | Property type | Short text | Yes |
| `address` | Address | Short text | Yes |
| `city` | City | Short text | Yes |
| `province` | Province | Short text | Yes |
| `postalCode` | Postal code | Short text | No |
| `bedrooms` | Bedrooms | Integer | Yes |
| `bathrooms` | Bathrooms | Integer | Yes |
| `builtArea` | Built area (m²) | Number | Yes |
| `plotArea` | Plot area (m²) | Number | No |
| `floor` | Floor | Integer | No |
| `totalFloors` | Total floors | Integer | No |
| `hasElevator` | Has elevator | Boolean | Yes |
| `hasParking` | Has parking | Boolean | Yes |
| `hasTerrace` | Has terrace | Boolean | Yes |
| `hasGarden` | Has garden | Boolean | Yes |
| `hasPool` | Has pool | Boolean | Yes |
| `hasStorage` | Has storage | Boolean | Yes |
| `energyCertificate` | Energy certificate | Short text | No |
| `yearBuilt` | Year built | Integer | No |
| `condition` | Condition | Short text | Yes |
| `orientation` | Orientation | Short text | No |
| `heating` | Heating | Short text | No |
| `furnished` | Furnished | Boolean | Yes |
| `communityFees` | Community fees | Number | No |
| `reference` | Reference | Short text | No |
| `features` | Features | Short text (list) | No |
| `images` | Images | Media (many) | Yes |
| `whatsappNumber` | WhatsApp number | Short text | Yes |
| `showWhatsApp` | Show WhatsApp button | Boolean | No (defaults to off) |
| `contactEmail` | Contact email | Short text | No |
| `showContactForm` | Show contact form | Boolean | Yes |
| `mapEmbedUrl` | Map embed URL | Short text | No |
| `latitude` | Latitude | Number | No |
| `longitude` | Longitude | Number | No |

**Property type values**: `piso`, `casa`, `chalet`, `adosado`, `atico`, `duplex`, `estudio`, `local`, `terreno`

**Condition values**: `obra-nueva`, `buen-estado`, `reformado`, `a-reformar`

### 3. Add your property entry

Create one entry, upload your photos, set your price and WhatsApp number (e.g. `+34612345678`).

### 4. Connect environment variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Fill in your Contentful **Space ID** and **Content Delivery API** access token (Settings → API keys).

Optionally, add your Cloudflare Web Analytics beacon token (see [Analytics](#analytics) below).

## Analytics

Visitor analytics are provided by [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) — free, cookie-less, and GDPR-friendly (no consent banner required in most cases).

The beacon script is loaded from `src/layouts/Layout.astro` only when `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` is set.

### 1. Create a Cloudflare account

Sign up at [dash.cloudflare.com](https://dash.cloudflare.com) (free).

### 2. Add your site

1. Go to **Analytics & logs → Web Analytics → Add a site**
2. Enter your hostname only (e.g. `your-listing.netlify.app`) — no `https://` or trailing slash
3. Cloudflare will show a message that the hostname is not on your account and that you need to install a **JS snippet** — this is expected for Netlify-hosted sites
4. Copy the `token` value from the snippet:

```html
data-cf-beacon='{"token": "your_beacon_token_here"}'
```

### 3. Set the environment variable

Locally in `.env`:

```bash
PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=your_beacon_token_here
```

On Netlify (Site settings → Environment variables):

- `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` = your beacon token

Redeploy after adding the variable on Netlify. Visit the live site once, then check the Cloudflare Web Analytics dashboard — data usually appears within a few minutes.

**Tip:** leave the variable unset locally if you do not want dev visits counted.

## Deploy to Netlify

### Option A: Connect Git repository

1. Push this project to GitHub/GitLab/Bitbucket
2. In [Netlify](https://app.netlify.com/), click **Add new site → Import an existing project**
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
   - `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` (optional — see [Analytics](#analytics))
6. Deploy

### Option B: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Auto-rebuild when content changes

In Contentful: **Settings → Webhooks → Add webhook**

- URL: your Netlify **Build hook** URL (Site settings → Build & deploy → Build hooks)
- Triggers: Entry publish, unpublish

When you change price or photos in Contentful, Netlify rebuilds automatically.

## QR code

Once deployed, your site URL will be something like:

`https://your-listing.netlify.app`

Generate a QR code pointing to that URL:

- [qr-code-generator.com](https://www.qr-code-generator.com/)
- Or run: `npx qrcode-terminal https://your-listing.netlify.app`

Print the QR code on flyers, the "for sale" sign, or viewing cards so visitors can open the listing on their phone.

## Contact form

The form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). Submissions appear in your Netlify dashboard under **Forms**.

To show the WhatsApp button, set `showWhatsApp` to `true` in Contentful and ensure `whatsappNumber` is filled in (e.g. `+351912345678`). By default the button is hidden.

To disable the form and show only WhatsApp, set `showContactForm` to `false` and `showWhatsApp` to `true`.

## Customisation

- **Demo data**: edit `src/lib/fallback-data.ts` while setting up Contentful
- **Colours**: edit CSS variables in `src/styles/global.css`
- **Language**: UI strings live in `src/i18n/ui.ts`; listing copy lives in `src/i18n/property.ts`

## Project structure

```
src/
  components/     # UI sections (gallery, details, contact)
  layouts/        # Base HTML layout
  lib/            # Contentful client, types, formatting
  pages/          # index.astro (listing), thanks.astro (form thank-you)
public/           # Static assets
netlify.toml      # Netlify deployment config
```

## Licence

Use this as a starting point for your own property listing. Replace the demo content before you publish.
