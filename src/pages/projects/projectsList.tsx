import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const ProjectsList = () => {
  // enter your project description here, or you want more than 6 projects to show? Just add it
  const images = [
    { id: 1, ket: "Project 1" },
    { id: 2, ket: "Project 2" },
    { id: 3, ket: "Project 3" },
    { id: 4, ket: "Project 4" },
    { id: 5, ket: "Project 5" },
    { id: 6, ket: "Project 6" },
  ];
  return (
    <>
      {images.map((image) => (
        <div
          className="rounded-lg overflow-hidden bg-slate-200 dark:bg-gray-800 border-[0.5px] border-gray-500"
          key={image.id}
        >
          <Image src="/img/Project.jpg" width="600px" height="400px" />
          <div className="p-2">
            <h1 className="text-lg font-semibold">{image.ket}</h1>
            <p className="mt-1 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi.
            </p>
            <div className="mt-2 exclude flex justify-end items-center">
              <Link href="https://github.com" passHref>
                <FaGithub className="cursor-pointer my-2 mr-1 ml-2 transition duration-300 hover:text-red-500" />
              </Link>
              <Link href="https://github.com" passHref>
                <RiExternalLinkLine className="cursor-pointer my-2 ml-1 mr-2 transition duration-300 hover:text-red-500" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectsList;
