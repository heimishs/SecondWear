"use client"; // ← 최상단에 추가

import Community from "@/components/pages/Community";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Community />
    </div>
  );
}
