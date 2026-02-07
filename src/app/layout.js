import "@styles/globals.css";
import { ibmPlexSansThai } from "@assets/fonts";
import { ContextProvider } from "@contexts";

export const metadata = {
  // metadataBase: new URL(
  //   process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  // ),
  title: {
    default: "QR Bistro - Smart Restaurant Solution",
    template: "%s | QR Bistro",
  },
  description:
    "QR Bistro - ระบบจัดการร้านอาหารอัจฉริยะ สั่งอาหารผ่าน QR Code ง่าย สะดวก รวดเร็ว",
  keywords: [
    "QR Bistro",
    "ร้านอาหาร",
    "QR Code",
    "สั่งอาหาร",
    "ระบบร้านอาหาร",
    "restaurant",
    "food ordering",
    "smart restaurant",
  ],
  authors: [{ name: "QR Bistro Team" }],
  creator: "QR Bistro",
  publisher: "QR Bistro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "/",
    siteName: "QR Bistro",
    title: "QR Bistro - Smart Restaurant Solution",
    description:
      "QR Bistro - ระบบจัดการร้านอาหารอัจฉริยะ สั่งอาหารผ่าน QR Code ง่าย สะดวก รวดเร็ว",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QR Bistro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Bistro - Smart Restaurant Solution",
    description:
      "QR Bistro - ระบบจัดการร้านอาหารอัจฉริยะ สั่งอาหารผ่าน QR Code ง่าย สะดวก รวดเร็ว",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  // },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={ibmPlexSansThai.variable}>
      <body>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
