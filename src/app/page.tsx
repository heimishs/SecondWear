"use client"; // ← 최상단에 추가

import Content from "@/components/pages/Home";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Content />
    </div>
  );
}
