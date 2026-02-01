import CryptoJS from "crypto-js";

export const SECRET_KEY =
  process.env.PRIVATE_SECRET_KEY || "QR-BISTRO-SECRET-KEY";
export const COOKIE_PREFIX = "QR_BISTRO_STORAGE_";

export const encrypt = (data) => {
  try {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  } catch (error) {
    console.error("Encrypt error:", error);
    return null;
  }
};

export const decrypt = (data) => {
  try {
    const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.error("Decrypt error:", error);
    return null;
  }
};
