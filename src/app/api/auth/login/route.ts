import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // 이메일로 유저 찾기
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "이메일이 존재하지 않습니다." }), {
        status: 401,
      });
    }

    // 비밀번호 비교
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ error: "비밀번호가 올바르지 않습니다." }), {
        status: 401,
      });
    }

    // JWT 토큰 생성
    const token = jwt.sign(
      { userId: user.user_id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    // ✅ 유저 ID 함께 반환
    return new Response(JSON.stringify({ token, userId: user.id }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "서버 오류 발생" }), { status: 500 });
  }
}
