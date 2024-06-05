import "@/styles/globals.css";
import "@/styles/normalize.css";
import "@/styles/style.css";
import "@/styles/modaal.css";
import "@/styles/slick.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
