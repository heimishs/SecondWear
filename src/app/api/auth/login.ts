import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // 유저 찾기
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: "유저를 찾을 수 없음" }, { status: 404 });
  }

  // 비밀번호 검증
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return NextResponse.json({ error: "비밀번호가 틀림" }, { status: 401 });
  }

  // ✅ JWT 토큰 생성
  const token = jwt.sign(
    { userId: user.user_id, email: user.email },
    process.env.JWT_SECRET!, // 환경변수에서 시크릿 키 가져옴
    { expiresIn: "1h" } // 1시간 동안 유효
  );

  return NextResponse.json({ message: "로그인 성공", token });
}
