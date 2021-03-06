import { FiGithub, FiLink } from "solid-icons/fi";
import ProjectsImage from "../../assets/Project.jpg";

const ProjectsList = () => {
  const images = [
    { ket: "Project 1" },
    { ket: "Project 2" },
    { ket: "Project 3" },
    { ket: "Project 4" },
    { ket: "Project 5" },
    { ket: "Project 6" },
  ];
  return (
    <>
      {images.map((image: any, index: number) => (
        <div class="rounded-lg overflow-hidden bg-slate-200 dark:bg-gray-800 border-[0.5px] border-gray-500">
          <img src={ProjectsImage} width="600px" height="400px" />
          <div class="p-2">
            <h1 class="text-lg font-semibold">{image.ket}</h1>
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

export default ProjectsList;
