import { useState } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import List from "./list";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="flex justify-between">
        <div>
          <Link href="/" passHref>
            <h1 className="text-3xl group font-bold cursor-pointer">
              <span className="group-hover:text-red-400 duration-300 transition">
                za
              </span>
              <span className="text-red-400  group-hover:text-slate-900 group-hover:dark:text-white duration-300 transition">
                .ki
              </span>
            </h1>
          </Link>
        </div>
        <div>
          <ul className="hidden sm:flex font-medium items-center">
            <li className="hover:text-red-500 duration-300 transition line">
              <Link href="/tentang" passHref>
                Tentang
              </Link>
            </li>
            <li className="mx-6 hover:text-red-500 duration-300 transition line">
              <Link href="/projects" passHref>
                Projects
              </Link>
            </li>
            <li className="hover:text-red-500 duration-300 transition line">
              <Link href="/kontak" passHref>
                Kontak
              </Link>
            </li>
          </ul>
        </div>
        <div className="-mr-2 flex flex-col justify-end sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex justify-end p-1 rounded-md focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {!isOpen ? (
              <BiMenu className="block h-6 w-6" />
            ) : (
              <MdClose className="block h-6 w-6" />
            )}
          </button>
          {isOpen ? <List /> : ""}
        </div>
      </div>
    </header>
  );
};

export default Header;
