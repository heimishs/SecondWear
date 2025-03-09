"use client"; // ← 최상단에 추가

import Login from "@/components/pages/Login";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Login />
    </div>
  );
}
