import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <section className="mt-10 leading-relaxed tracking-wide md:mt-24">
        <div className="container flex flex-col justify-between items-center">
          <Image
            width="350px"
            height="300px"
            src="/img/notFound.svg"
            alt="Not Found"
          />
          <h1 className="text-2xl text-center font-semibold mt-10">
            Oops, Halaman yang kamu cari tidak ditemukan
          </h1>
          <Link href="/" passHref>
            <button className="font-semibold mt-4 px-4 py-1.5 bg-blue-500 hover:bg-blue-600 rounded-full duration-300 transition-all text-lg shadow-lg text-white">
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
