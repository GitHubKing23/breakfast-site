# Breakfast Site

This is a simple React application for a breakfast restaurant. The menu data is stored in `src/data/menu.json` and can be edited through Netlify CMS which uses GitHub as the backend.

## Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Run tests with:

```bash
npm test
```

The CMS is available at `/admin` when the site is served. Configure the GitHub repository in `public/admin/config.yml`.

## Color Scheme

The app uses the **Sunrise Breakfast** palette:

| Use | Hex | Description |
| --- | --- | --- |
| Primary | `#F4A261` | Warm orange for highlights |
| Accent | `#2A2A2A` | Deep espresso brown for text and links |
| Highlight | `#E9C46A` | Honey yellow for buttons |
| Background | `#FFF8F0` | Creamy off-white page background |
| Callout | `#E76F51` | Strawberry red for headings and CTAs |

## Troubleshooting
If you encounter `React is not defined` when running `npm run dev`, make sure to run `npm install` first so the Vite React plugin is available.
