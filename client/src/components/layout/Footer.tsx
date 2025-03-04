import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-[200px] border-t mt-20 pt-10">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center bg-white relative">
      {/* 왼쪽 로고 */}
      <h1 className="text-2xl font-bold text-black">헌옷이</h1>

      {/* 오른쪽 정보 */}
      <div className="text-right">
        <nav className="flex space-x-4 justify-end">
          <a href="#" className="hover:text-gray-700">서비스 소개</a>
          <a href="#" className="hover:text-gray-700">이용약관</a>
          <a href="#" className="hover:text-gray-700">개인정보처리방침</a>
        </nav>
        <p className="mt-2">이메일: revecloud7@gmail.com</p>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
