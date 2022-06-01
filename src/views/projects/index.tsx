import ProjectsList from "./projectsList";

const Projects = () => {
  return (
    <section class="mt-10 leading-relaxed tracking-wide md:mt-24">
      <h1 class="text-2xl text-center md:text-justify font-bold">Projects</h1>
      <div class="container flex flex-col md:flex-row justify-center items-center">
        <div class="grid grid-rows-1 mt-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-4">
          <ProjectsList />
        </div>
      </div>
    </section>
  );
};

export default Projects;
