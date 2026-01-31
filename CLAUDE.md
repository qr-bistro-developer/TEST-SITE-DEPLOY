# CLAUDE.md - QR Bistro Project Guidelines

## Project Overview

QR Bistro เป็นระบบจัดการร้านอาหารอัจฉริยะ ใช้ Next.js 16 App Router พร้อม React 19

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Styled Components (SSR)
- **State Management:** Redux Toolkit + Redux Persist
- **Forms:** React Hook Form
- **Utilities:** Lodash, Day.js, UUID
- **Real-time:** Socket.io Client
- **Modals:** React Modal

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # Reusable React components
├── lib/           # Library configurations (fonts, providers, registry)
├── redux/         # Redux store and reducers
├── styles/        # Global CSS styles
├── utils/         # Utility functions
├── contexts/      # React contexts
├── assets/        # Static assets (fonts, images, svgs)
└── statics/       # Static data/constants
```

## Path Aliases

```javascript
@/*          -> ./src/*
@redux/*     -> ./src/redux/*
@components/* -> ./src/components/*
@lib/*       -> ./src/lib/*
@utils/*     -> ./src/utils/*
@styles/*    -> ./src/styles/*
@assets/*    -> ./src/assets/*
@contexts/*  -> ./src/contexts/*
@statics/*   -> ./src/statics/*
```

## Coding Conventions

### 1. Function Parameters
- Always use destructuring parameters with `$` prefix
- Always provide default values

```javascript
export const MyComponent = ({ $prop1 = null, $prop2 = false }) => {
  return <div>{$prop1}</div>;
};
```

### 2. Lodash Usage
- Use `_.get()` with array notation for property access
- Use `_.chain()` for multiple operations

```javascript
const name = _.get($item, ['user', 'name'], 'Unknown');
```

### 3. Styled Components
- Use `$` prefix for all props
- Always destructure and provide defaults

```javascript
const Container = styled.div`
  background: ${({ $bg = '#fff' }) => $bg};
`;
```

## SEO Guidelines (Next.js App Router)

### Metadata
Every page must have proper metadata:

```javascript
export const metadata = {
  title: "Page Title | QR Bistro",
  description: "Description (150-160 chars)",
  openGraph: {
    title: "Page Title",
    description: "OG Description",
    images: ["/og-image.png"],
  },
};
```

### Dynamic Metadata
```javascript
export async function generateMetadata({ params }) {
  const data = await fetchData(params.id);
  return {
    title: `${data.name} | QR Bistro`,
    description: data.description,
  };
}
```

### SEO Checklist
- [ ] Unique title and description per page
- [ ] Proper heading hierarchy (h1 > h2 > h3)
- [ ] Alt text for all images
- [ ] Semantic HTML elements
- [ ] Open Graph and Twitter Card metadata
- [ ] Canonical URLs for potential duplicates
- [ ] JSON-LD structured data when appropriate
- [ ] Optimized images with next/image
- [ ] Priority attribute for LCP images

### Robots & Sitemap
- `src/app/robots.js` - Robots configuration
- `src/app/sitemap.js` - Sitemap generation

## Redux Setup

### Store Configuration
- Uses Redux Toolkit with Redux Persist
- Persists to localStorage (with SSR-safe storage)

```javascript
import { store, persistor } from "@/redux/store";
```

### Creating Reducers
```javascript
import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = { data: null };

export const slice = createSlice({
  name: "sliceName",
  initialState: _.cloneDeep(initialState),
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = slice.actions;
export default slice.reducer;
```

## Styled Components SSR

The project uses a custom registry (`src/lib/registry.js`) for styled-components SSR support with Next.js App Router.

## Local Fonts

Available font variables:
- `--font-niramit` - Niramit (Thai)
- `--font-anuphan` - Anuphan (Thai)
- `--font-kanit` - Kanit (Thai)

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

## Commands

```bash
yarn dev      # Start development server
yarn build    # Build for production
yarn start    # Start production server
yarn lint     # Run ESLint
```

## Important Notes

1. **SSR Compatibility:** All client-side code must be in "use client" components
2. **State Hydration:** Redux Persist handles state rehydration automatically
3. **Font Loading:** Fonts are preloaded and use `display: swap`
4. **SEO:** Always add metadata to new pages
5. **Accessibility:** Use semantic HTML and ARIA attributes

---

**Version:** 1.0.0
**Last Updated:** January 2025
