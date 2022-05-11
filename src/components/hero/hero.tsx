import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-between items-center">
      <Image width="850px" height="800px" src="/img/Hero.png" alt="Hero" />
      <div className="text-center md:text-justify">
        <h1 className="text-3xl font-bold">Hello, There!</h1>
        <p className="mt-2 mb-4">
          Saya Zaki. Seorang Front End Developer yang berfokus dalam membuat
          tampilan website yang menarik dan fungsional
        </p>
        <Link href="/tentang" passHref>
          <button className="px-6 py-1.5 bg-blue-500 hover:bg-blue-600 duration-300 transition-all text-lg font-semibold text-white shadow-lg rounded-full">
            More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
