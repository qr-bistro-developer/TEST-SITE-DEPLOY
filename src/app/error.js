"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

const ERROR_CONFIG = {
  0: {
    title: "ไม่สามารถเชื่อมต่อได้",
    message: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตแล้วลองใหม่",
    action: "retry",
  },
  401: {
    title: "กรุณาเข้าสู่ระบบ",
    message: "คุณต้องเข้าสู่ระบบเพื่อเข้าถึงหน้านี้",
    action: "login",
  },
  403: {
    title: "ไม่มีสิทธิ์เข้าถึง",
    message: "คุณไม่มีสิทธิ์เข้าถึงหน้านี้",
    action: "home",
  },
  404: {
    title: "ไม่พบหน้าที่ค้นหา",
    message: "หน้าที่คุณต้องการไม่มีอยู่หรือถูกลบไปแล้ว",
    action: "home",
  },
  500: {
    title: "เซิร์ฟเวอร์ขัดข้อง",
    message: "เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ กรุณาลองใหม่ภายหลัง",
    action: "retry",
  },
  502: {
    title: "Bad Gateway",
    message: "เซิร์ฟเวอร์ไม่สามารถตอบกลับได้ กรุณาลองใหม่ภายหลัง",
    action: "retry",
  },
  503: {
    title: "บริการไม่พร้อมใช้งาน",
    message: "ระบบกำลังปรับปรุง กรุณาลองใหม่ภายหลัง",
    action: "retry",
  },
};

const DEFAULT_CONFIG = {
  title: "เกิดข้อผิดพลาด",
  message: "ขออภัย เกิดข้อผิดพลาดบางอย่าง กรุณาลองใหม่อีกครั้ง",
  action: "retry",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
`;

const StatusCode = styled.span`
  font-size: 64px;
  font-weight: bold;
  color: #e0e0e0;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: #333;
`;

const Message = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
  max-width: 400px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ $variant = "primary" }) =>
    $variant === "secondary" ? "#6c757d" : "#e74c3c"};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ $variant = "primary" }) =>
      $variant === "secondary" ? "#5a6268" : "#c0392b"};
  }
`;

export default function Error({ $error = null, $reset = null, error, reset }) {
  const router = useRouter();
  const actualError = $error || error;
  const actualReset = $reset || reset;

  const status = actualError?.status;
  const config = ERROR_CONFIG[status] || DEFAULT_CONFIG;

  const handleAction = () => {
    switch (config.action) {
      case "login":
        router.push("/login");
        break;
      case "home":
        router.push("/");
        break;
      case "retry":
      default:
        actualReset?.();
        break;
    }
  };

  const getActionLabel = () => {
    switch (config.action) {
      case "login":
        return "เข้าสู่ระบบ";
      case "home":
        return "กลับหน้าแรก";
      case "retry":
      default:
        return "ลองใหม่";
    }
  };

  return (
    <Container>
      {status > 0 && <StatusCode>{status}</StatusCode>}
      <Title>{config.title}</Title>
      <Message>{config.message}</Message>
      <ButtonGroup>
        <Button onClick={handleAction}>{getActionLabel()}</Button>
        {config.action !== "home" && (
          <Button $variant="secondary" onClick={() => router.push("/")}>
            กลับหน้าแรก
          </Button>
        )}
      </ButtonGroup>
    </Container>
  );
}
