const Kontak = () => {
  return (
    <section class="mt-10 leading-relaxed tracking-wide md:mt-24">
      <div class="container text-center md:text-justify">
        <h1 class="text-2xl font-bold">Kontak</h1>
        <p class="mt-3">
          Temen-temen bisa temukan saya di{" "}
          <a href="https://instagram.com">
            <span class="cursor-pointer font-bold transition duration-300 hover:text-red-500 line">
              Instagram
            </span>
          </a>
          ,{" "}
          <a href="https://facebook.com">
            <span class="cursor-pointer font-bold transition duration-300 hover:text-red-500 line">
              Facebook
            </span>
          </a>
          , dan{" "}
          <a href="https://github.com">
            <span class="cursor-pointer font-bold transition duration-300 hover:text-red-500 line">
              Github
            </span>
          </a>
          . Jika ada keperluan khusus, bisa kontak saya via E-Mail:{" "}
          <span class="font-bold"> zazaki@nganu.com</span>
        </p>
      </div>
    </section>
  );
};

export default Kontak;
