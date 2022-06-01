import { createSignal } from "solid-js";
import { FiMenu, FiX } from "solid-icons/fi";
import List from "./list";

const Header = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <header>
      <div class="flex items-center justify-between">
        <div>
          <a href="/">
            <h1 class="text-3xl group font-bold cursor-pointer">
              <span class="group-hover:text-red-400 duration-300 transition">
                za
              </span>
              <span class="text-red-400  group-hover:text-slate-900 group-hover:dark:text-white duration-300 transition">
                .ki
              </span>
            </h1>
          </a>
        </div>
        <div>
          <ul class="hidden sm:flex font-medium items-center">
            <li class="hover:text-red-500 duration-300 transition-all line">
              <a href="/tentang">Tentang</a>
            </li>
            <li class="mx-6 hover:text-red-500 duration-300 transition-all line">
              <a href="/projects">Projects</a>
            </li>
            <li class="hover:text-red-500 duration-300 transition-all line">
              <a href="/kontak">Kontak</a>
            </li>
          </ul>
        </div>
        <div class="-mr-2 flex flex-col justify-end relative sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen())}
            type="button"
            class="inline-flex justify-end p-1 rounded-md focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {!isOpen() ? (
              <FiMenu class="block h-6 w-6" />
            ) : (
              <FiX class="block h-6 w-6" />
            )}
          </button>
          {isOpen() ? <List /> : ""}
        </div>
      </div>
    </header>
  );
};

export default Header;
