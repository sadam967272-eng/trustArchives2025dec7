import LoginPage from "@/components/login-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "تسجيل الدخول - ارشيف الثقة التجارية",
  description: "صفحة تسجيل الدخول لمنصة أرشيف الثقة التجارية",
}

export default function Page() {
  return <LoginPage />
}
