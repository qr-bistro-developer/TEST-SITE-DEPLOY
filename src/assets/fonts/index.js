import localFont from "next/font/local";

// Main Font (preload)
export const ibmPlexSansThai = localFont({
  src: [
    { path: "./IBMPlexSansThai/IBMPlexSansThai-Thin.ttf", weight: "100", style: "normal" },
    { path: "./IBMPlexSansThai/IBMPlexSansThai-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./IBMPlexSansThai/IBMPlexSansThai-Light.ttf", weight: "300", style: "normal" },
    { path: "./IBMPlexSansThai/IBMPlexSansThai-Regular.ttf", weight: "400", style: "normal" },
    { path: "./IBMPlexSansThai/IBMPlexSansThai-Medium.ttf", weight: "500", style: "normal" },
    { path: "./IBMPlexSansThai/IBMPlexSansThai-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./IBMPlexSansThai/IBMPlexSansThai-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-ibmPlexSansThai",
  display: "swap",
  preload: true,
});

// Thai Fonts (lazy load)
export const niramit = localFont({
  src: [
    { path: "./Niramit/Niramit-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./Niramit/Niramit-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./Niramit/Niramit-Light.ttf", weight: "300", style: "normal" },
    { path: "./Niramit/Niramit-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./Niramit/Niramit-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Niramit/Niramit-Italic.ttf", weight: "400", style: "italic" },
    { path: "./Niramit/Niramit-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Niramit/Niramit-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./Niramit/Niramit-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./Niramit/Niramit-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./Niramit/Niramit-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Niramit/Niramit-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-niramit",
  display: "swap",
  preload: false,
});

export const anuphan = localFont({
  src: [
    { path: "./Anuphan/Anuphan-Thin.ttf", weight: "100", style: "normal" },
    { path: "./Anuphan/Anuphan-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./Anuphan/Anuphan-Light.ttf", weight: "300", style: "normal" },
    { path: "./Anuphan/Anuphan-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Anuphan/Anuphan-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Anuphan/Anuphan-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./Anuphan/Anuphan-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-anuphan",
  display: "swap",
  preload: false,
});

export const kanit = localFont({
  src: [
    { path: "./Kanit/Kanit-Thin.ttf", weight: "100", style: "normal" },
    { path: "./Kanit/Kanit-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./Kanit/Kanit-Light.ttf", weight: "300", style: "normal" },
    { path: "./Kanit/Kanit-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Kanit/Kanit-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Kanit/Kanit-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./Kanit/Kanit-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-kanit",
  display: "swap",
  preload: false,
});

export const athiti = localFont({
  src: [
    { path: "./Athiti/Athiti-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./Athiti/Athiti-Light.ttf", weight: "300", style: "normal" },
    { path: "./Athiti/Athiti-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Athiti/Athiti-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Athiti/Athiti-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./Athiti/Athiti-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-athiti",
  display: "swap",
  preload: false,
});

export const baiJamjuree = localFont({
  src: [
    { path: "./BaiJamjuree/BaiJamjuree-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./BaiJamjuree/BaiJamjuree-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./BaiJamjuree/BaiJamjuree-Light.ttf", weight: "300", style: "normal" },
    { path: "./BaiJamjuree/BaiJamjuree-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./BaiJamjuree/BaiJamjuree-Regular.ttf", weight: "400", style: "normal" },
    { path: "./BaiJamjuree/BaiJamjuree-Italic.ttf", weight: "400", style: "italic" },
    { path: "./BaiJamjuree/BaiJamjuree-Medium.ttf", weight: "500", style: "normal" },
    { path: "./BaiJamjuree/BaiJamjuree-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./BaiJamjuree/BaiJamjuree-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./BaiJamjuree/BaiJamjuree-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./BaiJamjuree/BaiJamjuree-Bold.ttf", weight: "700", style: "normal" },
    { path: "./BaiJamjuree/BaiJamjuree-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-baiJamjuree",
  display: "swap",
  preload: false,
});

export const chakraPetch = localFont({
  src: [
    { path: "./ChakraPetch/ChakraPetch-Light.ttf", weight: "300", style: "normal" },
    { path: "./ChakraPetch/ChakraPetch-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./ChakraPetch/ChakraPetch-Regular.ttf", weight: "400", style: "normal" },
    { path: "./ChakraPetch/ChakraPetch-Italic.ttf", weight: "400", style: "italic" },
    { path: "./ChakraPetch/ChakraPetch-Medium.ttf", weight: "500", style: "normal" },
    { path: "./ChakraPetch/ChakraPetch-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./ChakraPetch/ChakraPetch-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./ChakraPetch/ChakraPetch-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./ChakraPetch/ChakraPetch-Bold.ttf", weight: "700", style: "normal" },
    { path: "./ChakraPetch/ChakraPetch-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-chakraPetch",
  display: "swap",
  preload: false,
});

export const charm = localFont({
  src: [
    { path: "./Charm/Charm-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Charm/Charm-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-charm",
  display: "swap",
  preload: false,
});

export const charmonman = localFont({
  src: [
    { path: "./Charmonman/Charmonman-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Charmonman/Charmonman-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-charmonman",
  display: "swap",
  preload: false,
});

export const chonburi = localFont({
  src: [{ path: "./Chonburi/Chonburi-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-chonburi",
  display: "swap",
  preload: false,
});

export const fahkwang = localFont({
  src: [
    { path: "./Fahkwang/Fahkwang-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./Fahkwang/Fahkwang-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./Fahkwang/Fahkwang-Light.ttf", weight: "300", style: "normal" },
    { path: "./Fahkwang/Fahkwang-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./Fahkwang/Fahkwang-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Fahkwang/Fahkwang-Italic.ttf", weight: "400", style: "italic" },
    { path: "./Fahkwang/Fahkwang-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Fahkwang/Fahkwang-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./Fahkwang/Fahkwang-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./Fahkwang/Fahkwang-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./Fahkwang/Fahkwang-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Fahkwang/Fahkwang-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-fahkwang",
  display: "swap",
  preload: false,
});

export const itim = localFont({
  src: [{ path: "./Itim/Itim-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-itim",
  display: "swap",
  preload: false,
});

export const k2d = localFont({
  src: [
    { path: "./K2D/K2D-Thin.ttf", weight: "100", style: "normal" },
    { path: "./K2D/K2D-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./K2D/K2D-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./K2D/K2D-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./K2D/K2D-Light.ttf", weight: "300", style: "normal" },
    { path: "./K2D/K2D-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./K2D/K2D-Regular.ttf", weight: "400", style: "normal" },
    { path: "./K2D/K2D-Italic.ttf", weight: "400", style: "italic" },
    { path: "./K2D/K2D-Medium.ttf", weight: "500", style: "normal" },
    { path: "./K2D/K2D-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./K2D/K2D-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./K2D/K2D-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./K2D/K2D-Bold.ttf", weight: "700", style: "normal" },
    { path: "./K2D/K2D-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./K2D/K2D-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./K2D/K2D-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
  ],
  variable: "--font-k2d",
  display: "swap",
  preload: false,
});

export const koHo = localFont({
  src: [
    { path: "./KoHo/KoHo-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./KoHo/KoHo-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./KoHo/KoHo-Light.ttf", weight: "300", style: "normal" },
    { path: "./KoHo/KoHo-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./KoHo/KoHo-Regular.ttf", weight: "400", style: "normal" },
    { path: "./KoHo/KoHo-Italic.ttf", weight: "400", style: "italic" },
    { path: "./KoHo/KoHo-Medium.ttf", weight: "500", style: "normal" },
    { path: "./KoHo/KoHo-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./KoHo/KoHo-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./KoHo/KoHo-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./KoHo/KoHo-Bold.ttf", weight: "700", style: "normal" },
    { path: "./KoHo/KoHo-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-koHo",
  display: "swap",
  preload: false,
});

export const kodchasan = localFont({
  src: [
    { path: "./Kodchasan/Kodchasan-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./Kodchasan/Kodchasan-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./Kodchasan/Kodchasan-Light.ttf", weight: "300", style: "normal" },
    { path: "./Kodchasan/Kodchasan-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./Kodchasan/Kodchasan-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Kodchasan/Kodchasan-Italic.ttf", weight: "400", style: "italic" },
    { path: "./Kodchasan/Kodchasan-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Kodchasan/Kodchasan-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./Kodchasan/Kodchasan-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./Kodchasan/Kodchasan-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./Kodchasan/Kodchasan-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Kodchasan/Kodchasan-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-kodchasan",
  display: "swap",
  preload: false,
});

export const krub = localFont({
  src: [
    { path: "./Krub/Krub-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./Krub/Krub-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./Krub/Krub-Light.ttf", weight: "300", style: "normal" },
    { path: "./Krub/Krub-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./Krub/Krub-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Krub/Krub-Italic.ttf", weight: "400", style: "italic" },
    { path: "./Krub/Krub-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Krub/Krub-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./Krub/Krub-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./Krub/Krub-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./Krub/Krub-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Krub/Krub-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-krub",
  display: "swap",
  preload: false,
});

export const maitree = localFont({
  src: [
    { path: "./Maitree/Maitree-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./Maitree/Maitree-Light.ttf", weight: "300", style: "normal" },
    { path: "./Maitree/Maitree-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Maitree/Maitree-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Maitree/Maitree-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./Maitree/Maitree-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-maitree",
  display: "swap",
  preload: false,
});

export const mali = localFont({
  src: [
    { path: "./Mali/Mali-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./Mali/Mali-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./Mali/Mali-Light.ttf", weight: "300", style: "normal" },
    { path: "./Mali/Mali-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./Mali/Mali-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Mali/Mali-Italic.ttf", weight: "400", style: "italic" },
    { path: "./Mali/Mali-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Mali/Mali-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./Mali/Mali-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./Mali/Mali-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./Mali/Mali-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Mali/Mali-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-mali",
  display: "swap",
  preload: false,
});

export const pattaya = localFont({
  src: [{ path: "./Pattaya/Pattaya-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-pattaya",
  display: "swap",
  preload: false,
});

export const sarabun = localFont({
  src: [
    { path: "./Sarabun/Sarabun-Thin.ttf", weight: "100", style: "normal" },
    { path: "./Sarabun/Sarabun-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./Sarabun/Sarabun-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./Sarabun/Sarabun-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./Sarabun/Sarabun-Light.ttf", weight: "300", style: "normal" },
    { path: "./Sarabun/Sarabun-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./Sarabun/Sarabun-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Sarabun/Sarabun-Italic.ttf", weight: "400", style: "italic" },
    { path: "./Sarabun/Sarabun-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Sarabun/Sarabun-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./Sarabun/Sarabun-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./Sarabun/Sarabun-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./Sarabun/Sarabun-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Sarabun/Sarabun-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./Sarabun/Sarabun-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./Sarabun/Sarabun-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
  ],
  variable: "--font-sarabun",
  display: "swap",
  preload: false,
});

export const sriracha = localFont({
  src: [{ path: "./Sriracha/Sriracha-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-sriracha",
  display: "swap",
  preload: false,
});

export const srisakdi = localFont({
  src: [
    { path: "./Srisakdi/Srisakdi-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Srisakdi/Srisakdi-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-srisakdi",
  display: "swap",
  preload: false,
});

// Chinese Fonts
export const notoSansSC = localFont({
  src: [
    { path: "./NotoSansSC/NotoSansSC-Thin.ttf", weight: "100", style: "normal" },
    { path: "./NotoSansSC/NotoSansSC-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./NotoSansSC/NotoSansSC-Light.ttf", weight: "300", style: "normal" },
    { path: "./NotoSansSC/NotoSansSC-Regular.ttf", weight: "400", style: "normal" },
    { path: "./NotoSansSC/NotoSansSC-Medium.ttf", weight: "500", style: "normal" },
    { path: "./NotoSansSC/NotoSansSC-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./NotoSansSC/NotoSansSC-Bold.ttf", weight: "700", style: "normal" },
    { path: "./NotoSansSC/NotoSansSC-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./NotoSansSC/NotoSansSC-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-notoSansSC",
  display: "swap",
  preload: false,
});

export const notoSansThaiLooped = localFont({
  src: [
    { path: "./NotoSansThaiLooped/NotoSansThaiLooped-Thin.ttf", weight: "100", style: "normal" },
    { path: "./NotoSansThaiLooped/NotoSansThaiLooped-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./NotoSansThaiLooped/NotoSansThaiLooped-Light.ttf", weight: "300", style: "normal" },
    { path: "./NotoSansThaiLooped/NotoSansThaiLooped-Regular.ttf", weight: "400", style: "normal" },
    { path: "./NotoSansThaiLooped/NotoSansThaiLooped-Medium.ttf", weight: "500", style: "normal" },
    { path: "./NotoSansThaiLooped/NotoSansThaiLooped-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./NotoSansThaiLooped/NotoSansThaiLooped-Bold.ttf", weight: "700", style: "normal" },
    { path: "./NotoSansThaiLooped/NotoSansThaiLooped-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./NotoSansThaiLooped/NotoSansThaiLooped-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-notoSansThaiLooped",
  display: "swap",
  preload: false,
});

export const notoSerifSC = localFont({
  src: [
    { path: "./NotoSerifSC/NotoSerifSC-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./NotoSerifSC/NotoSerifSC-Light.ttf", weight: "300", style: "normal" },
    { path: "./NotoSerifSC/NotoSerifSC-Regular.ttf", weight: "400", style: "normal" },
    { path: "./NotoSerifSC/NotoSerifSC-Medium.ttf", weight: "500", style: "normal" },
    { path: "./NotoSerifSC/NotoSerifSC-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./NotoSerifSC/NotoSerifSC-Bold.ttf", weight: "700", style: "normal" },
    { path: "./NotoSerifSC/NotoSerifSC-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-notoSerifSC",
  display: "swap",
  preload: false,
});

// Latin Fonts
export const buenard = localFont({
  src: [
    { path: "./Buenard/Buenard-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Buenard/Buenard-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-buenard",
  display: "swap",
  preload: false,
});

export const sen = localFont({
  src: [
    { path: "./Sen/Sen-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Sen/Sen-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Sen/Sen-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./Sen/Sen-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Sen/Sen-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-sen",
  display: "swap",
  preload: false,
});
