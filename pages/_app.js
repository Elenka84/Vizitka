import "@/styles/globals.css";
import { IBM_Plex_Sans, Unbounded } from "next/font/google";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

const titleFont = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700", "800"],
  variable: "--font-title"
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${bodyFont.variable} ${titleFont.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
