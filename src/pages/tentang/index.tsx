import Head from "next/head";
import Link from "next/link";

const Tentang = () => {
  return (
    <>
      <Head>
        <title>Tentang</title>
      </Head>
      <section className="mt-10 leading-relaxed tracking-wide md:mt-24">
        <div className="container text-center md:text-justify">
          <h1 className="text-2xl font-bold">Tentang Saya</h1>
          <p className="mt-3">
            Halo, saya Zaki. Saat ini sedang bekerja di{" "}
            <Link href="https://placeholder.com" passHref>
              <span className="cursor-pointer font-bold transition duration-300 hover:text-red-500 line">
                Placeholder
              </span>
            </Link>{" "}
            sebagai Front End Developer. Diluar kegiatan saya sebagai developer,
            saya biasanya menulis artikel, menghabiskan waktu dengan keluarga,
            dan pengamat motor.
          </p>
        </div>
      </section>
    </>
  );
};

export default Tentang;
