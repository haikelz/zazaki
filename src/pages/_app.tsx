import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-5 my-4 sm:mt-4 leading-relaxed flex justify-center items-center dark:text-white">
      <div className="w-full sm:w-3/4 xl:w-3/5">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
  );
}

export default MyApp;
