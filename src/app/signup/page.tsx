"use client"; // ← 최상단에 추가

import Signup from "@/components/pages/Signup";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Signup />
    </div>
  );
}
