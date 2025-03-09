"use client"; // ✅ 클라이언트 컴포넌트로 지정

import { Provider } from "react-redux";
import { store } from "./store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
