import Head from "next/head";
import Hero from "@/src/components/hero/hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Zaki</title>
      </Head>
      <section className="mt-10 leading-relaxed tracking-wide md:mt-24">
        <Hero />
      </section>
    </>
  );
};

export default Home;
