import Providers from "@/redux/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers> {/* ✅ Redux Provider 적용 */}
      </body>
    </html>
  );
}
