import './globals.css'

export const metadata = {
  title: 'hello page',
  description: 'a simple next.js app that displays a hello world message.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
