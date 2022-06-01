const Hero = () => {
  return (
    <div class="container flex flex-col md:flex-row justify-between items-center">
      <img class="w-96" src="/src/assets/Hero.png" alt="Hero" />

      <div class="text-center md:text-justify">
        <h1 class="text-3xl font-bold">Hello, There!</h1>
        <p class="mt-2 mb-4">
          Saya Zaki. Seorang Front End Developer yang berfokus dalam membuat
          tampilan website yang menarik dan fungsional
        </p>
        <a href="/tentang">
          <button class="px-6 py-1.5 bg-blue-500 hover:bg-blue-600 duration-300 transition-all text-lg font-semibold text-white shadow-lg rounded-full">
            More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
