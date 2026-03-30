// Root layout — just passes through to [locale]/layout.tsx
// next-intl middleware handles redirecting / → /en/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
