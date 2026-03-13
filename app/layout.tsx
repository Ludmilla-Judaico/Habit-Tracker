import "./globals.css"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
        id="wallpaper"
      >
        {children}
      </body>
    </html>
  );
}
