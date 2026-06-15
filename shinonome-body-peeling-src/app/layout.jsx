import "./globals.css";
import ScrollEffects from "./components/ScrollEffects";

export const metadata = {
  title: "SHINONOME 肌質改善ピーリング LP案",
  description: "SHINONOME Facial Lab の肌質改善ピーリング向けランディングページデモ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}
