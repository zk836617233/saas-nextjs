import "antd/dist/reset.css";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress
        color="#64943E"
        startPosition={0.3}
        stopDelayMs={200}
        height={10}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}
