import { NextResponse } from "next/server";

export async function GET(request) {
  const authHeader = request.headers.get("authorization");
  const hasBearer = authHeader?.startsWith("Bearer ");
  const token = hasBearer ? authHeader.replace("Bearer ", "") : null;

  return NextResponse.json({
    success: true,
    message: hasBearer ? "Bearer token received!" : "No bearer token",
    hasBearer,
    tokenPreview: token ? `${token.substring(0, 20)}...` : null,
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request) {
  const authHeader = request.headers.get("authorization");
  const hasBearer = authHeader?.startsWith("Bearer ");
  const token = hasBearer ? authHeader.replace("Bearer ", "") : null;

  let body = null;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  return NextResponse.json({
    success: true,
    message: hasBearer ? "Bearer token received!" : "No bearer token",
    hasBearer,
    tokenPreview: token ? `${token.substring(0, 20)}...` : null,
    body,
    timestamp: new Date().toISOString(),
  });
}
