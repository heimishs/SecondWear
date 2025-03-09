"use client"; // 클라이언트 컴포넌트 선언

import React from "react";
import Slide from "@/components/ui/slide/Banner";
import Search from "@/components/ui/search/Search";
import Wight from "@/components/ui/wight/Wight";
import Wight2 from "@/components/ui/wight/Wight2";
import Wight3 from "@/components/ui/wight/Wight3";

const Content: React.FC = () => {
  return (
    <main className="w-full max-w-[1200px] mx-auto p-4">
      <Search />
      <Slide />
      <Wight />
      <Wight2 />
      <Wight3 />
    </main>
  );
};

export default Content;
