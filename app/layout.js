import { Inter } from "next/font/google";

export const metadata = {
  title: "Nextjs Tailwind",
  description: "Learning Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
