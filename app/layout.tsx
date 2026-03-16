import "./globals.css"
import { Road_Rage } from 'next/font/google'

const roadRage = Road_Rage({
  subsets: ["latin"],
  weight: "400"
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roadRage.className}
        id="wallpaper"
      >
        {children}
      </body>
    </html>
  );
}
