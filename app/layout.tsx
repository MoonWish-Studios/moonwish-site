import "../styles/globals.scss";
import { Inter } from "@next/font/google";

const inter = Inter();
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={inter.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
