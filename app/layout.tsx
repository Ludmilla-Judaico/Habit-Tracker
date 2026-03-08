import "./globals.css"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex flex-col justify-center items-center p-7"
        id="wallpaper"
      >
        {children}
      </body>
    </html>
  );
}
