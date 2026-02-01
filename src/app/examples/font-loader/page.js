"use client";

import { useFontLoader } from "@/hooks/useFontLoader";
import { FONT_FAMILIES } from "@statics/fonts";

/**
 * ตัวอย่างการใช้งาน useFontLoader Hook
 *
 * useFontLoader ใช้สำหรับรอให้ fonts โหลดเสร็จก่อน render
 * เพื่อป้องกัน FOUT (Flash of Unstyled Text)
 *
 * Parameters:
 * - $fonts: array ของ fonts ที่ต้องการโหลด (จาก FONT_FAMILIES)
 * - $loadAll: boolean - ถ้า true จะโหลดทุก fonts
 *
 * Returns:
 * - fontsLoaded: boolean - true เมื่อ fonts โหลดเสร็จ
 * - isLoading: boolean - true ขณะกำลังโหลด
 */

// ตัวอย่างที่ 1: โหลด font เดียว
const ExampleSingleFont = () => {
  const { fontsLoaded, isLoading } = useFontLoader({
    $fonts: [FONT_FAMILIES.IBM_PLEX_SANS_THAI],
  });

  if (isLoading) {
    return <div>กำลังโหลด font...</div>;
  }

  return (
    <div style={{ fontFamily: FONT_FAMILIES.IBM_PLEX_SANS_THAI }}>
      <p>โหลด font เดียว: IBM Plex Sans Thai</p>
      <p>fontsLoaded: {fontsLoaded.toString()}</p>
    </div>
  );
};

// ตัวอย่างที่ 2: โหลดหลาย fonts
const ExampleMultipleFonts = () => {
  const { fontsLoaded, isLoading } = useFontLoader({
    $fonts: [FONT_FAMILIES.IBM_PLEX_SANS_THAI, FONT_FAMILIES.KANIT],
  });

  if (isLoading) {
    return <div>กำลังโหลด fonts...</div>;
  }

  return (
    <div>
      <p style={{ fontFamily: FONT_FAMILIES.IBM_PLEX_SANS_THAI }}>
        IBM Plex Sans Thai
      </p>
      <p style={{ fontFamily: FONT_FAMILIES.KANIT }}>Kanit</p>
      <p>fontsLoaded: {fontsLoaded.toString()}</p>
    </div>
  );
};

// ตัวอย่างที่ 3: โหลดทุก fonts (สำหรับหน้า editor)
const ExampleAllFonts = () => {
  const { fontsLoaded, isLoading } = useFontLoader({
    $loadAll: true,
  });

  if (isLoading) {
    return <div>กำลังโหลดทุก fonts...</div>;
  }

  return (
    <div>
      <p>โหลดทุก fonts เสร็จแล้ว</p>
      <p>fontsLoaded: {fontsLoaded.toString()}</p>
    </div>
  );
};

// ตัวอย่างที่ 4: ไม่โหลด font (ใช้ default)
const ExampleNoFont = () => {
  const { fontsLoaded, isLoading } = useFontLoader();

  return (
    <div>
      <p>ไม่ได้ระบุ font - โหลดเสร็จทันที</p>
      <p>fontsLoaded: {fontsLoaded.toString()}</p>
      <p>isLoading: {isLoading.toString()}</p>
    </div>
  );
};

const FontLoaderExamplePage = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>useFontLoader Hook Examples</h1>

      <hr style={{ margin: "20px 0" }} />

      <h2>1. โหลด font เดียว</h2>
      <pre>{`const { fontsLoaded, isLoading } = useFontLoader({
  $fonts: [FONT_FAMILIES.IBM_PLEX_SANS_THAI],
});`}</pre>
      <ExampleSingleFont />

      <hr style={{ margin: "20px 0" }} />

      <h2>2. โหลดหลาย fonts</h2>
      <pre>{`const { fontsLoaded, isLoading } = useFontLoader({
  $fonts: [FONT_FAMILIES.IBM_PLEX_SANS_THAI, FONT_FAMILIES.KANIT],
});`}</pre>
      <ExampleMultipleFonts />

      <hr style={{ margin: "20px 0" }} />

      <h2>3. โหลดทุก fonts (สำหรับ editor)</h2>
      <pre>{`const { fontsLoaded, isLoading } = useFontLoader({
  $loadAll: true,
});`}</pre>
      <ExampleAllFonts />

      <hr style={{ margin: "20px 0" }} />

      <h2>4. ไม่โหลด font</h2>
      <pre>{`const { fontsLoaded, isLoading } = useFontLoader();`}</pre>
      <ExampleNoFont />
    </div>
  );
};

export default FontLoaderExamplePage;
