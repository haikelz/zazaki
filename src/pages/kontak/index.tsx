import Link from "next/link";
import Head from "next/head";

const Kontak = () => {
  return (
    <>
      <Head>
        <title>Kontak</title>
      </Head>
      <section className="mt-10 leading-relaxed tracking-wide md:mt-24">
        <div className="container text-center md:text-justify">
          <h1 className="text-2xl font-bold">Kontak</h1>
          <p className="mt-3">
            Temen-temen bisa temukan saya di{" "}
            <Link href="https://instagram.com" passHref>
              <span className="cursor-pointer font-bold transition duration-300 hover:text-red-500 line">
                Instagram
              </span>
            </Link>
            ,{" "}
            <Link href="https://facebook.com" passHref>
              <span className="cursor-pointer font-bold transition duration-300 hover:text-red-500 line">
                Facebook
              </span>
            </Link>
            , dan{" "}
            <Link href="https://github.com" passHref>
              <span className="cursor-pointer font-bold transition duration-300 hover:text-red-500 line">
                Github
              </span>
            </Link>
            . Jika ada keperluan khusus, bisa kontak saya via E-Mail:{" "}
            <span className="font-bold"> zazaki@nganu.com</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Kontak;
