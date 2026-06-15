import "./globals.css";
import { Playfair_Display } from "next/font/google";
import ScrollEffects from "./components/ScrollEffects";
import { brand } from "./data";

// Latin display serif (Playfair). Japanese headings fall back to the Mincho
// stack in globals.css, so no multi-MB JP webfont is shipped.
const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: `${brand.name} ｜ ${brand.service}`,
  description: brand.tagline || brand.service,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={display.variable}>
      <body>
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}
