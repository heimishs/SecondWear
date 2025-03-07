/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}", // ✅ Next.js App Router 적용
      "./src/components/**/*.{js,ts,jsx,tsx}", // ✅ components 폴더 감지
      "./src/styles/**/*.{css}", // ✅ Tailwind CSS 스타일 폴더 감지
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  