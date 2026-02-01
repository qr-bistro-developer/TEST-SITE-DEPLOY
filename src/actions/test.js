"use server";

import { httpRequest } from "@helpers/https/httpRequest";
import {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
} from "@store/cookies/accessToken";

const API_KEY = process.env.API_KEY;
const API_ENDPOINT = process.env.API_ENDPOINT;

export const testEnvVariables = async () => {
  console.log("=== Server Action: testEnvVariables ===");
  console.log("API_KEY:", API_KEY);
  console.log("API_ENDPOINT:", API_ENDPOINT);
  console.log("=======================================");

  return {
    hasApiKey: !!API_KEY,
    hasApiEndpoint: !!API_ENDPOINT,
    apiKeyPreview: API_KEY ? `${API_KEY.substring(0, 4)}...` : null,
    apiEndpointPreview: API_ENDPOINT || null,
  };
};

export const testHttpRequest = async () => {
  console.log("=== Server Action: testHttpRequest ===");
  console.log("API_KEY:", API_KEY);
  console.log("API_ENDPOINT:", API_ENDPOINT);

  try {
    const data = await httpRequest({
      externalUrl: "https://jsonplaceholder.typicode.com/todos/1",
      method: "get",
    });
    console.log("Response:", data);
    console.log("======================================");
    return { success: true, data };
  } catch (error) {
    console.log("Error:", error.message);
    console.log("======================================");
    return { success: false, error: error.message };
  }
};

// ===== Token Test Functions =====

export const testSetToken = async (token = "test-token-12345") => {
  console.log("=== Server Action: testSetToken ===");
  console.log("Setting token:", token);

  await setAccessToken(token);

  const savedToken = await getAccessToken();
  console.log("Saved token:", savedToken);
  console.log("===================================");

  return {
    success: true,
    tokenSet: token,
    tokenRead: savedToken,
    match: token === savedToken,
  };
};

export const testGetToken = async () => {
  console.log("=== Server Action: testGetToken ===");

  const token = await getAccessToken();
  console.log("Current token:", token);
  console.log("===================================");

  return {
    hasToken: !!token,
    token: token,
    tokenPreview: token ? `${token.substring(0, 10)}...` : null,
  };
};

export const testRemoveToken = async () => {
  console.log("=== Server Action: testRemoveToken ===");

  await removeAccessToken();

  const token = await getAccessToken();
  console.log("Token after remove:", token);
  console.log("======================================");

  return {
    success: true,
    tokenRemoved: !token,
  };
};

// ===== Test Bearer Token in Headers =====

export const testBearerToken = async () => {
  console.log("=== Server Action: testBearerToken ===");

  const token = await getAccessToken();
  console.log("Current token:", token);

  try {
    // httpbin.org/headers จะ echo headers กลับมา
    const data = await httpRequest({
      externalUrl: "https://httpbin.org/headers",
      method: "get",
      useAuthToken: true,
    });

    console.log("Headers sent to server:", data);
    console.log("======================================");

    // ดึง Authorization header ที่ส่งไป
    const authHeader = data?.headers?.Authorization || null;

    return {
      success: true,
      tokenInCookie: token,
      authorizationHeader: authHeader,
      hasBearer: authHeader?.startsWith("Bearer ") || false,
      allHeaders: data?.headers,
    };
  } catch (error) {
    console.log("Error:", error.message);
    return { success: false, error: error.message };
  }
};
