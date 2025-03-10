"use client"; // 클라이언트 컴포넌트 선언

import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mx-auto h-[200px] border-t border-gray-200 mt-20 pt-10 px-6">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center bg-white">
          {/* 왼쪽 로고 */}
          <h1 className="text-2xl font-bold text-black">헌옷이</h1>

          {/* 오른쪽 정보 */}
          <div className="text-right">
            <nav className="flex space-x-4 justify-end">
              <Link href="/about" className="hover:text-gray-700">
                서비스 소개
              </Link>
              <Link href="/terms" className="hover:text-gray-700">
                이용약관
              </Link>
              <Link href="/privacy" className="hover:text-gray-700">
                개인정보처리방침
              </Link>
            </nav>
            <p className="mt-2">
              이메일:{" "}
              <a
                href="mailto:revecloud7@gmail.com"
                className="text-blue-600 hover:underline"
              >
                revecloud7@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
