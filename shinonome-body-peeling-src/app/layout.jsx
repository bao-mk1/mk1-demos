import "./globals.css";

export const metadata = {
  title: "SHINONOME 肌質改善ピーリング LP Demo",
  description: "SHINONOME Facial Lab の肌質改善ピーリング向けランディングページデモ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
