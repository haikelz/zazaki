import Head from "next/head";
import Header from "../header/header";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://avatars.githubusercontent.com/u/77146709?v=4"
        />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
