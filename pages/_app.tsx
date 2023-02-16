import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Headers />
      <div className="prose flex px-8 mx-auto my-4 justify-start">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
