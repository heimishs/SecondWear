"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/redux/Providers";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // localStorage에서 로그인 상태 확인
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // 토큰이 있으면 로그인 상태 true
  }, []);

  return (
    <html lang="ko">
      <body>
        {/* ✅ isLoggedIn 상태를 Header에 전달 */}
        <Header isLoggedIn={isLoggedIn} />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
