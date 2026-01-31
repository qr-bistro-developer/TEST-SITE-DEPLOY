# COPILOT_GUIDE.md

คู่มือสำหรับ GitHub Copilot ในการพัฒนาโปรเจกต์

---

## 📋 Table of Contents

- [Function Declaration](#function-declaration)
- [Return Statements](#return-statements)
- [Lodash Usage](#lodash-usage)
- [Styled Components Props](#styled-components-props)
- [fitPx Function](#fitpx-function)
- [Code Examples](#code-examples)

---

## 1. Function Declaration

### ✅ DO: ใช้ Destructuring Parameters

เราจะสร้างฟังก์ชันโดยใช้ destructuring parameters เสมอ

```javascript
// ✅ ถูกต้อง
export const MyComponent = ({ $prop1, $prop2, $onPress }) => {
  // implementation
};

// ✅ ถูกต้อง - มี default values
export const MyFunction = ({ $value = null, $isActive = false, $callback = () => undefined }) => {
  // implementation
};
```

### ❌ DON'T: ไม่ใช้ props object โดยตรง

```javascript
// ❌ ผิด
export const MyComponent = (props) => {
  const { prop1, prop2 } = props;
  // implementation
};
```

---

## 2. Return Statements

### ✅ DO: เขียน `return` ทุกครั้ง (No Short Return)

เราจะไม่ใช้ implicit return หรือ short return แม้ว่าโค้ดจะสั้น

```javascript
// ✅ ถูกต้อง - มี return statement
const calculateTotal = ({ $price, $quantity }) => {
  return $price * $quantity;
};

// ✅ ถูกต้อง - มี return statement แม้จะเป็นบรรทัดเดียว
const isValid = ({ $value }) => {
  return $value !== null && $value !== undefined;
};

// ✅ ถูกต้อง - arrow function ที่มี return
const filterItems = ({ $items, $filter }) => {
  return $items.filter((item) => item.active === $filter);
};
```

### ❌ DON'T: ไม่ใช้ Short Return

```javascript
// ❌ ผิด - implicit return
const calculateTotal = ({ $price, $quantity }) => $price * $quantity;

// ❌ ผิด - short return ใน arrow function
const isValid = ({ $value }) => $value !== null;
```

---

## 3. Lodash Usage

### 3.1 Lodash Get

เราใช้ `_.get()` เป็นหลักในการเข้าถึง nested properties และใช้ **array notation** สำหรับ keys เสมอ

```javascript
import _ from 'lodash';

// ✅ ถูกต้อง - ใช้ array notation
const name = _.get($item, ['name']);
const nestedValue = _.get($item, ['user', 'profile', 'email']);
const withDefault = _.get($item, ['price'], 0);

// ✅ ถูกต้อง - ใช้กับ conditional
const displayName = _.get($user, ['displayName']) || _.get($user, ['username']) || 'Anonymous';

// ✅ ถูกต้อง - ใช้ใน JSX
<Text>{_.get($item, ['name'], '-')}</Text>
<Text>{_.get($item, ['price']) > 0 ? resolveCurrency({ value: _.get($item, ['price']) }) : '-'}</Text>
```

### ❌ DON'T: ไม่ใช้ string path หรือ optional chaining แทน

```javascript
// ❌ ผิด - ใช้ string path
const name = _.get($item, 'name');
const nestedValue = _.get($item, 'user.profile.email');

// ❌ ผิด - ใช้ optional chaining แทน lodash
const name = $item?.name;
const email = $item?.user?.profile?.email;

// ❌ ผิด - direct access
const name = $item.name;
```

### 3.2 Lodash Chain

เมื่อต้องใช้ lodash methods ต่อเนื่องหลายๆ ตัว ให้ใช้ `_.chain()`

```javascript
// ✅ ถูกต้อง - ใช้ chain สำหรับ operations ต่อเนื่อง
const processedData = _.chain($items)
  .filter((item) => _.get(item, ['isActive']))
  .map((item) => ({
    id: _.get(item, ['id']),
    name: _.get(item, ['name']),
    price: _.get(item, ['price'], 0),
  }))
  .sortBy((item) => _.get(item, ['name']))
  .value();

// ✅ ถูกต้อง - chain สำหรับการคำนวณที่ซับซ้อน
const totalPrice = _.chain($orders)
  .filter((order) => _.get(order, ['status']) === 'completed')
  .map((order) => _.get(order, ['total'], 0))
  .sum()
  .value();

// ✅ ถูกต้อง - groupBy และ map
const groupedItems = _.chain($items)
  .groupBy((item) => _.get(item, ['category']))
  .map((items, category) => ({
    category,
    items,
    count: items.length,
  }))
  .value();
```

### ❌ DON'T: ไม่ chain แยกเป็น statements หลายบรรทัด

```javascript
// ❌ ผิด - ไม่ใช้ chain
const filtered = _.filter($items, (item) => item.isActive);
const mapped = _.map(filtered, (item) => ({ id: item.id, name: item.name }));
const sorted = _.sortBy(mapped, 'name');
```

---

## 4. Styled Components Props

### ✅ DO: Destructuring Props และใช้ `$` Prefix

เมื่อส่ง props ไปที่ styled-components เราจะ:

1. ใช้ `$` prefix สำหรับทุก prop ที่ส่งไปที่ styled component
2. Destructure props ใน template literal
3. กำหนด default value เสมอ

```javascript
import styled from 'styled-components';

// ✅ ถูกต้อง - destructuring กับ default value
const Container = styled.View`
  background-color: ${({ $backgroundColor = '#ffffff' }) => $backgroundColor};
  padding: ${({ $padding = 16 }) => $padding}px;
  opacity: ${({ $isVisible = true }) => ($isVisible ? 1 : 0)};
`;

// ✅ ถูกต้อง - multiple props
const Text = styled.Text`
  color: ${({ $color = '#000000' }) => $color};
  font-size: ${({ $fontSize = 14 }) => $fontSize}px;
  font-weight: ${({ $fontWeight = 400 }) => $fontWeight};
  text-align: ${({ $textAlign = 'left' }) => $textAlign};
`;

// ✅ ถูกต้อง - conditional styling
const Button = styled.TouchableOpacity`
  background-color: ${({ $isActive = false, $activeColor = '#007AFF', $inactiveColor = '#CCCCCC' }) =>
    $isActive ? $activeColor : $inactiveColor};
  border-width: ${({ $borderWidth = 0 }) => $borderWidth}px;
  border-radius: ${({ $borderRadius = 8 }) => $borderRadius}px;
`;

// ✅ ถูกต้อง - ใช้งาน component
const MyComponent = () => {
  return (
    <Container $backgroundColor="#f5f5f5" $padding={20}>
      <Text $color="#333333" $fontSize={18} $fontWeight={600}>
        Hello World
      </Text>
      <Button $isActive={true} $borderRadius={12}>
        Click Me
      </Button>
    </Container>
  );
};
```

### ❌ DON'T: ไม่ใช้ props โดยไม่มี `$` prefix หรือไม่ destructure

```javascript
// ❌ ผิด - ไม่มี $ prefix
const Container = styled.View`
  background-color: ${(props) => props.backgroundColor};
`;

// ❌ ผิด - ไม่ destructure
const Text = styled.Text`
  color: ${(props) => props.$color || '#000000'};
`;

// ❌ ผิด - ไม่มี default value
const Button = styled.TouchableOpacity`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;
```

---

## 5. fitPx Function

### ✅ DO: ใช้ `dt: 'h'` เสมอ

ฟังก์ชัน `fitPx` ใช้สำหรับ responsive sizing และเราจะกำหนด `dt: 'h'` (dimension type: height) เสมอ

```javascript
import { fitPx } from '@utils/resolve/resolveContentSize';

// ✅ ถูกต้อง - ใช้ dt: 'h' เสมอ
const Container = styled.View`
  padding: ${fitPx({ px: 16, dt: 'h', sf: true })};
  margin: ${fitPx({ px: 20, dt: 'h', sf: true })};
  border-radius: ${fitPx({ px: 12, dt: 'h', sf: true })};
  gap: ${fitPx({ px: 8, dt: 'h', sf: true })};
`;

// ✅ ถูกต้อง - ใช้กับ width และ height
const ImageProduct = styled.Image`
  width: 100%;
  height: ${fitPx({ px: 140, dt: 'h', sf: true })};
`;

// ✅ ถูกต้อง - ใช้ใน SvgXml
<SvgXml
  xml={ICON_IMPORT_DATA}
  width={fitPx({ px: 38, dt: 'h', sf: true })}
  height={fitPx({ px: 38, dt: 'h', sf: true })}
/>;

// ✅ ถูกต้อง - ใช้กับ fontSize ใน inline style (ถ้าจำเป็น)
const fontSize = fitPx({ px: 16, dt: 'h', sf: true });
```

### ❌ DON'T: ไม่ใช้ dt อื่นนอกจาก 'h'

```javascript
// ❌ ผิด - ใช้ dt: 'w'
const Container = styled.View`
  padding: ${fitPx({ px: 16, dt: 'w', sf: true })};
`;

// ❌ ผิด - ไม่ใส่ dt
const Container = styled.View`
  padding: ${fitPx({ px: 16, sf: true })};
`;

// ❌ ผิด - ใช้ตัวเลขตรงๆ แทน fitPx
const Container = styled.View`
  padding: 16px;
`;
```

---

## 6. Code Examples

### ตัวอย่างที่ 1: Component แบบสมบูรณ์

```javascript
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { Text } from '@components/Text';
import { fitPx } from '@utils/resolve/resolveContentSize';
import { useSelector, shallowEqual } from 'react-redux';
import _ from 'lodash';

const Container = styled.View`
  flex: 1;
  padding: ${fitPx({ px: 16, dt: 'h', sf: true })};
  background-color: ${({ $backgroundColor = '#ffffff' }) => $backgroundColor};
  border-radius: ${fitPx({ px: 12, dt: 'h', sf: true })};
`;

const Title = styled(Text)`
  font-size: ${fitPx({ px: 18, dt: 'h', sf: true })};
  color: ${({ $color = '#000000' }) => $color};
  margin-bottom: ${fitPx({ px: 8, dt: 'h', sf: true })};
`;

export const ProductCard = ({ $item = null, $onPress = () => undefined, $isActive = false }) => {
  const theme = useSelector((state) => state?.themeColors?.data, shallowEqual);

  const handlePress = () => {
    return $onPress({ item: $item });
  };

  const getProductName = ({ $product }) => {
    return _.get($product, ['name'], 'Unknown Product');
  };

  const getProductPrice = ({ $product }) => {
    const price = _.get($product, ['price'], 0);
    return price > 0 ? `฿${price}` : 'Free';
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <Container $backgroundColor={$isActive ? theme?.background?.active : theme?.background?.primary}>
        <Title $color={theme?.text?.primary}>{getProductName({ $product: $item })}</Title>
        <Text $color={theme?.text?.secondary}>{getProductPrice({ $product: $item })}</Text>
      </Container>
    </TouchableOpacity>
  );
};
```

### ตัวอย่างที่ 2: ใช้ Lodash Chain

```javascript
import _ from 'lodash';

export const processOrderData = ({ $orders = [], $minAmount = 0 }) => {
  const processedOrders = _.chain($orders)
    .filter((order) => {
      const total = _.get(order, ['total'], 0);
      const status = _.get(order, ['status'], '');
      return total >= $minAmount && status === 'completed';
    })
    .map((order) => {
      return {
        id: _.get(order, ['id']),
        customerName: _.get(order, ['customer', 'name'], 'Unknown'),
        total: _.get(order, ['total'], 0),
        items: _.get(order, ['items'], []),
      };
    })
    .sortBy((order) => _.get(order, ['total']))
    .reverse()
    .value();

  return processedOrders;
};

export const calculateCategoryTotals = ({ $items = [] }) => {
  const categoryTotals = _.chain($items)
    .groupBy((item) => _.get(item, ['category', 'name'], 'Uncategorized'))
    .map((items, categoryName) => {
      const total = _.chain(items)
        .map((item) => _.get(item, ['price'], 0))
        .sum()
        .value();

      return {
        category: categoryName,
        itemCount: items.length,
        total: total,
        items: items,
      };
    })
    .sortBy((category) => _.get(category, ['total']))
    .reverse()
    .value();

  return categoryTotals;
};
```

### ตัวอย่างที่ 3: Helper Functions

```javascript
import _ from 'lodash';

// ✅ ถูกต้อง - มี return statement, destructuring, ใช้ lodash get
export const formatUserName = ({ $user = null }) => {
  const firstName = _.get($user, ['firstName'], '');
  const lastName = _.get($user, ['lastName'], '');
  const displayName = _.get($user, ['displayName'], '');

  if (displayName) {
    return displayName;
  }

  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  }

  if (firstName) {
    return firstName;
  }

  return 'Anonymous';
};

// ✅ ถูกต้อง - validation function
export const isValidProduct = ({ $product = null }) => {
  const hasName = _.get($product, ['name'], '').length > 0;
  const hasPrice = _.get($product, ['price'], 0) >= 0;
  const hasCategory = _.get($product, ['categoryId'], null) !== null;

  return hasName && hasPrice && hasCategory;
};

// ✅ ถูกต้อง - transformation function
export const transformProductForDisplay = ({ $product = null }) => {
  return {
    id: _.get($product, ['id']),
    name: _.get($product, ['name'], '-'),
    price: _.get($product, ['price'], 0),
    imageUrl: _.get($product, ['images', 0, 'url'], null),
    categoryName: _.get($product, ['category', 'name'], 'Uncategorized'),
    isAvailable: _.get($product, ['isAvailable'], true),
  };
};
```

---

## 📝 Summary Checklist

เมื่อเขียนโค้ดให้ตรวจสอบว่า:

- [ ] ฟังก์ชันทุกตัวใช้ destructuring parameters
- [ ] มี `return` statement ที่ชัดเจนทุกครั้ง (ไม่ใช้ short return)
- [ ] ใช้ `_.get()` กับ array notation `['key']` สำหรับเข้าถึง properties
- [ ] ใช้ `_.chain()` เมื่อต้อง chain lodash operations หลายตัว
- [ ] Props ที่ส่งไปยัง styled-components ขึ้นต้นด้วย `$` เสมอ
- [ ] Destructure props ใน styled-components template literals
- [ ] กำหนด default values สำหรับทุก prop
- [ ] ใช้ `fitPx({ px: X, dt: 'h', sf: true })` เสมอ (dt: 'h' เท่านั้น)

---

## 🎯 เป้าหมาย

คู่มือนี้มีวัตถุประสงค์เพื่อให้:

1. โค้ดมีความสม่ำเสมอ (Consistency) ทั่วทั้งโปรเจกต์
2. ง่ายต่อการอ่านและบำรุงรักษา (Maintainability)
3. ลดข้อผิดพลาดจาก null/undefined access
4. GitHub Copilot สามารถเข้าใจและสร้างโค้ดตาม pattern ที่กำหนด

---

**Last Updated:** 28 ธันวาคม 2568
**Version:** 1.0.0

---

## 7. Next.js SEO Best Practices (App Router)

### 7.1 Metadata Configuration

เราใช้ Next.js 14+ App Router สำหรับ SEO ทุกหน้าต้องมี metadata ที่เหมาะสม

```javascript
// ✅ ถูกต้อง - Static Metadata
export const metadata = {
  title: "Page Title | QR Bistro",
  description: "คำอธิบายหน้านี้ที่มีความยาว 150-160 ตัวอักษร",
  keywords: ["keyword1", "keyword2", "keyword3"],
  openGraph: {
    title: "Page Title",
    description: "คำอธิบายสำหรับ Social Media",
    images: ["/og-image.png"],
  },
};

// ✅ ถูกต้อง - Dynamic Metadata
export async function generateMetadata({ params, searchParams }) {
  const data = await fetchData(params.id);

  return {
    title: `${data.name} | QR Bistro`,
    description: data.description,
    openGraph: {
      title: data.name,
      description: data.description,
      images: [data.image],
    },
  };
}
```

### 7.2 Structured Data (JSON-LD)

ใช้ JSON-LD สำหรับ Rich Snippets

```javascript
// ✅ ถูกต้อง - Restaurant Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Restaurant Name",
  image: "https://example.com/image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Bangkok",
    addressCountry: "TH",
  },
  servesCuisine: "Thai",
  priceRange: "$$",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page content */}
    </>
  );
}
```

### 7.3 Image Optimization

ใช้ next/image สำหรับ optimized images

```javascript
import Image from "next/image";

// ✅ ถูกต้อง - มี alt text ที่อธิบายรูปภาพ
<Image
  src="/hero.jpg"
  alt="QR Bistro - ระบบสั่งอาหารผ่าน QR Code"
  width={1200}
  height={630}
  priority // สำหรับ LCP images
/>

// ❌ ผิด - ไม่มี alt text หรือ alt text ไม่อธิบาย
<Image src="/hero.jpg" alt="image" width={1200} height={630} />
```

### 7.4 Semantic HTML

ใช้ semantic HTML elements อย่างถูกต้อง

```javascript
// ✅ ถูกต้อง
<main>
  <article>
    <header>
      <h1>Main Title</h1>
    </header>
    <section>
      <h2>Section Title</h2>
      <p>Content...</p>
    </section>
  </article>
  <aside>
    <nav aria-label="Related links">
      <ul>
        <li><a href="/link1">Link 1</a></li>
      </ul>
    </nav>
  </aside>
</main>

// ❌ ผิด - ใช้ div แทน semantic elements
<div>
  <div>
    <div>Main Title</div>
  </div>
</div>
```

### 7.5 Dynamic Routes SEO

```javascript
// src/app/menu/[slug]/page.js

// Generate static params for SSG
export async function generateStaticParams() {
  const items = await getMenuItems();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }) {
  const item = await getMenuItem(params.slug);

  return {
    title: item.name,
    description: item.description,
    alternates: {
      canonical: `/menu/${params.slug}`,
    },
  };
}
```

### 7.6 Performance Optimization

```javascript
// ✅ ถูกต้อง - ใช้ loading states
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <AsyncComponent />
    </Suspense>
  );
}

// ✅ ถูกต้อง - ใช้ dynamic imports
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <Loading />,
  ssr: false, // ถ้าไม่ต้องการ SSR
});
```

---

## 📝 SEO Checklist

- [ ] ทุกหน้ามี unique title และ description
- [ ] ใช้ heading hierarchy อย่างถูกต้อง (h1 > h2 > h3)
- [ ] รูปภาพทุกรูปมี alt text ที่อธิบายเนื้อหา
- [ ] ใช้ semantic HTML elements
- [ ] มี Open Graph และ Twitter Card metadata
- [ ] มี canonical URL สำหรับหน้าที่อาจ duplicate
- [ ] ใช้ JSON-LD structured data เมื่อเหมาะสม
- [ ] Optimize images ด้วย next/image
- [ ] ใช้ priority สำหรับ LCP images
- [ ] ตรวจสอบ Core Web Vitals

---

## 8. Git Empty Folders (.gitkeep)

### ✅ DO: สร้าง .gitkeep สำหรับ folder ว่าง

เพื่อให้ folder ว่างสามารถ push ขึ้น git ได้:

```bash
# สร้าง .gitkeep ใน folder ว่าง
touch src/new-folder/.gitkeep
```

### ✅ DO: ลบ .gitkeep เมื่อ folder มีไฟล์แล้ว

**สำคัญมาก:** เมื่อ folder มีไฟล์อื่นแล้ว ให้ลบ .gitkeep ออกทันที

```bash
# ลบ .gitkeep เมื่อ folder มีไฟล์อื่นแล้ว
rm src/components/.gitkeep
```

### ❌ DON'T: ไม่เก็บ .gitkeep ไว้ใน folder ที่มีไฟล์อื่น

```bash
# ❌ ผิด - folder มีไฟล์แล้วแต่ยังมี .gitkeep อยู่
src/components/
├── .gitkeep      # ❌ ควรลบออก
├── Button/
└── Text/

# ✅ ถูกต้อง - ลบ .gitkeep ออกแล้ว
src/components/
├── Button/
└── Text/
```

---

## 📝 .gitkeep Checklist

- [ ] สร้าง .gitkeep ใน folder ว่างที่ต้องการ track
- [ ] ลบ .gitkeep ทันทีเมื่อ folder มีไฟล์อื่นแล้ว
- [ ] ไม่ commit folder ที่มีทั้ง .gitkeep และไฟล์อื่น
