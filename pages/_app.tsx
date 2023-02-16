import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Headers />
      <div className="flex">
        <div className="max-w-none prose px-8 mx-auto mt-8 mb-20 w-1/3">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
