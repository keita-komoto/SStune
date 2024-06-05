import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="jp">
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keyword" content="スノーボード,ステッカー,印刷,加工,施工,ワンストップオーダー,snowboard,stiker,tune,print,construction" />
      <meta name="description" content="MAKE UP SNOWBOARD ｜ スノーボードのデッキをオリジナルのデザインでメイクしよう。ワンストップオーダーでデザインから加工まで。デザイナーと直接相談して0からデザインを作ろう ｜ SStune" />
    </Head>
    <body className="home">
      <Main />
      <NextScript />
    </body>
  </Html>
  );
}
