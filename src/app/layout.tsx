import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/redux/Providers";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <Providers>{children}</Providers> {/* ✅ Redux Provider 적용 */}
        <Footer />
      </body>
    </html>
  );
}
