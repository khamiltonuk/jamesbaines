import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <meta name="title" content="James Baines - Producer / Filmmaker"></meta>
        <meta
          name="description"
          content="Hi! I'm James, a freelance senior creative producer and filmmaker with
                over ten years experience helping brands tell stories."
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Bentham&family=Zen+Kaku+Gothic+New:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
