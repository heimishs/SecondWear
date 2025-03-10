import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { id, password, email, region, usageType } = await req.json();

  // 아이디 중복 확인
  const existingUser = await prisma.user.findUnique({ where: { id } });
  if (existingUser) {
    return NextResponse.json({ error: "이미 사용 중인 아이디입니다." }, { status: 400 });
  }

  // 비밀번호 해싱
  const hashedPassword = await bcrypt.hash(password, 10);

  // 🔹 EnumUserType 변환 추가 (사용자 입력을 Enum 값으로 매핑)
  const prismaUserType = usageType === "개인" ? "NORMAL" : "ADMIN";

  // 회원가입
  await prisma.user.create({
    data: {
      id,
      password: hashedPassword,
      email,
      region,
      type: prismaUserType as "NORMAL" | "ADMIN", // Prisma Enum 형식으로 변환
    },
  });

  return NextResponse.json({ message: "회원가입 성공" });
}
