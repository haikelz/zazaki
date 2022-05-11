import Head from "next/head";
import Header from "../header/header";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/192x192.png" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
