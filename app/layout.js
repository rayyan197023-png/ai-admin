export const metadata = {
  name: "إدارة AI",
  manifest: "/manifest.json",
  themeColor: "#0c1020",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
