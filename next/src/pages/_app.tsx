import "@/styles/globals.css";
import "@/styles/normalize.css";
import "@/styles/modaal.css";
import "@/styles/slick.css";
import "@/fontawesome/css/all.min.css";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
