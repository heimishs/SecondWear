import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "./middleware";

export async function GET(req: NextRequest) {
  const user = authMiddleware(req);
  if (user instanceof NextResponse) return user; // 인증 실패 시 응답 반환

  return NextResponse.json({ message: "인증된 사용자만 접근 가능", user });
}
