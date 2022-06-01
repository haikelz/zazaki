import { FiGithub, FiLink } from "solid-icons/fi";

const Gambar = ({ gambar }: { gambar: any }) => {
  return (
    <>
      {gambar.map((image: any) => (
        <div class="rounded-lg overflow-hidden bg-slate-200 dark:bg-gray-800 border-[0.5px] border-gray-500">
          <img src="/src/assets/Project.jpg" width="600px" height="400px" />
          <div class="p-2">
            <h1 class="text-lg font-semibold">Project {image.id}</h1>
            <p class="mt-1 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi.
            </p>
            <div class="mt-2 exclude flex justify-end items-center">
              <a href="https://github.com">
                <FiGithub class="cursor-pointer my-2 mr-1 ml-2 transition duration-300 hover:text-red-500" />
              </a>
              <a href="https://github.com">
                <FiLink class="cursor-pointer my-2 ml-1 mr-2 transition duration-300 hover:text-red-500" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Gambar;
