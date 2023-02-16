import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router.pathname);
  if (router.pathname.startsWith("/posts/")) {
    return (
      <div>
        <Headers />
        <div className="prose px-8 mx-auto my-8">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    );
  } else if (router.pathname.startsWith("/about")) {
    return (
      <div>
        <Headers />
        <div className="prose px-8 mx-auto my-8">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Headers />
        <div className="px-8 mx-auto my-8">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    );
  }
}
