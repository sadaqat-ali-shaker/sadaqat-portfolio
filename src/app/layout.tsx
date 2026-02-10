import "./globals.css";

export const metadata = {
  title: "Sadaqat Ali Shaker — Portfolio",
  description: "Software & Data Engineering portfolio for Sadaqat Ali Shaker.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
