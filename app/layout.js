export const metadata = {
  title: "إدارة AI",
  manifest: "/manifest.json",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
