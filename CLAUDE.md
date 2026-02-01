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
├── assets/        # Static assets (fonts, images, svgs)
│   └── fonts/     # Font definitions (next/font)
├── components/    # Reusable React components
├── contexts/      # React contexts & providers
├── helpers/       # Helper functions (httpRequest, etc.)
├── hooks/         # Custom React hooks
├── lib/           # Library configurations (registry)
├── statics/       # Static data/constants
├── store/         # Redux store, reducers, and cookie storage
│   ├── cookies/   # Cookie utilities (client, server, shared)
│   └── reducers/  # Redux reducers
├── styles/        # Global CSS styles
└── utils/         # Utility functions
    └── routes/    # Route utilities (subdomain, restrictions)
```

## Path Aliases

```javascript
@/*          -> ./src/*
@components/* -> ./src/components/*
@lib/*       -> ./src/lib/*
@utils/*     -> ./src/utils/*
@styles/*    -> ./src/styles/*
@assets/*    -> ./src/assets/*
@contexts/*  -> ./src/contexts/*
@statics/*   -> ./src/statics/*
@helpers/*   -> ./src/helpers/*
@store/*     -> ./src/store/*
```

## Coding Conventions

### 1. Parameter Naming Convention

#### React Components - ใช้ `$` prefix
```javascript
export const MyComponent = ({ $prop1 = null, $prop2 = false }) => {
  return <div>{$prop1}</div>;
};
```

#### Functions/Helpers - ไม่ใช้ `$` prefix
```javascript
export const httpRequest = async ({
  method = "post",
  path = null,
  data = null,
} = {}) => {
  // implementation
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

### 4. No index.js Re-exports
- ไม่สร้าง index.js สำหรับ re-export
- Import ตรงจากไฟล์เลย เพื่อหาไฟล์ได้ง่าย

```javascript
// ✅ ถูกต้อง
import { getSubdomain } from "@utils/routes/subdomain";

// ❌ ผิด
import { getSubdomain } from "@utils/routes";
```

## Middleware & Route Restrictions

### Route Configuration
กำหนด route restrictions ที่ `src/statics/restrictedRoutes.js`:

```javascript
import { RESTRICTION_TYPES, RESTRICTED_ROUTES } from "@statics/restrictedRoutes";

// Types:
// - SUBDOMAIN: ต้องมี subdomain
// - AUTH: ต้อง login
// - SUBDOMAIN_AND_AUTH: ต้องมีทั้งคู่
```

### Middleware
- `src/middleware.js` - ตรวจสอบ route restrictions
- `src/utils/routes/subdomain.js` - ดึง subdomain จาก hostname
- `src/utils/routes/restrictions.js` - handlers สำหรับแต่ละ restriction type

### การดึง Subdomain ในหน้า
```javascript
import { headers } from "next/headers";

const MyPage = async () => {
  const headersList = await headers();
  const subdomain = headersList.get("x-subdomain") || "";
  // ...
};
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
- Persists to **Cookie Storage** with AES encryption (SSR-safe)
- Cookie prefix: `QR_BISTRO_`

```javascript
import { store, persistor } from "@store/store";
```

### Cookie Storage
Data is stored in cookies with AES encryption using `crypto-js`:
- `src/store/cookies/client.js` - Client-side cookie storage
- `src/store/cookies/server.js` - Server-side cookie storage
- Set `PRIVATE_SECRET_KEY` env variable for custom encryption key

```javascript
// Client-side (use client)
import { getCookieStorage, setCookieStorage, removeCookieStorage, cookieStorage } from "@store/cookies/client";

// Server-side (Server Components)
import { getServerCookie, setServerCookie, removeServerCookie } from "@store/cookies/server";
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

### Font Configuration
- Fonts defined at `src/assets/fonts/index.js`
- Uses `next/font/local`
- Only `ibmPlexSansThai` is preloaded (main font)
- Other fonts have `preload: false`

### Available Fonts
```javascript
import { ibmPlexSansThai, kanit, niramit } from "@assets/fonts";
```

Font variables:
- `--font-ibmPlexSansThai` - IBM Plex Sans Thai (preloaded)
- `--font-kanit` - Kanit
- `--font-niramit` - Niramit
- และอื่นๆ...

### Font Constants
```javascript
import { FONT_FAMILIES } from "@statics/fonts";
// FONT_FAMILIES.IBM_PLEX_SANS_THAI = "var(--font-ibmPlexSansThai)"
```

## Font Loading (Optional)

สำหรับหน้าที่ต้องการรอ fonts โหลดก่อน render ใช้ `useFontLoader` hook:

```javascript
import { useFontLoader } from "@/hooks/useFontLoader";
import { FONT_FAMILIES } from "@statics/fonts";

const MyPage = () => {
  // โหลด font เฉพาะ
  const { fontsLoaded, isLoading } = useFontLoader({
    fonts: [FONT_FAMILIES.IBM_PLEX_SANS_THAI],
  });

  // โหลดทุก fonts (สำหรับ editor)
  const { fontsLoaded } = useFontLoader({ loadAll: true });

  if (isLoading) return <Loading />;
  return <Content />;
};
```

**หมายเหตุ:** ไม่จำเป็นต้องใช้ทุกหน้า - `next/font` จัดการ font loading ให้อยู่แล้ว

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
NEXT_PUBLIC_PERSIST_SECRET=your-encryption-key
```

## Commands

```bash
yarn dev      # Start development server
yarn build    # Build for production
yarn start    # Start production server
yarn lint     # Run ESLint
```

## Git Empty Folders (.gitkeep)

เพื่อให้ folder ว่างสามารถ push ขึ้น git ได้:
- สร้างไฟล์ `.gitkeep` ใน folder ที่ว่างเปล่า
- **สำคัญ:** เมื่อ folder มีไฟล์แล้ว ให้ลบ `.gitkeep` ออก

```bash
# สร้าง .gitkeep
touch src/new-folder/.gitkeep

# ลบ .gitkeep เมื่อมีไฟล์แล้ว
rm src/new-folder/.gitkeep
```

## Important Notes

1. **SSR Compatibility:** All client-side code must be in "use client" components
2. **State Hydration:** Redux Persist handles state rehydration with cookie storage
3. **Font Loading:** Main font (IBM Plex Sans Thai) is preloaded, others are lazy loaded
4. **SEO:** Always add metadata to new pages
5. **Accessibility:** Use semantic HTML and ARIA attributes
6. **.gitkeep:** ลบ .gitkeep เมื่อ folder มีไฟล์แล้ว
7. **No index.js:** ไม่สร้าง index.js สำหรับ re-export

---

**Version:** 1.2.0
**Last Updated:** February 2025
