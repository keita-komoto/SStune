import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="jp">
    <Head>
      <meta charSet="utf-8" />
      <meta name="keyword" content="スノーボード,ステッカー,印刷,加工,施工,ワンストップオーダー,snowboard,stiker,tune,print,construction" />
    </Head>
    <Script src="../js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
    <Script src="../js/script.js" strategy="lazyOnload" />
    <body className="home">
      <Main />
      <NextScript />
    </body>
  </Html>
  );
}
