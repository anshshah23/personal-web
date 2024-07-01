import React from "react";
import ProjectBox from "../components/ProjectBox"; // Adjust the path as needed
import Noteng from "../images/Noteng.png";
import Portfolio from "../images/Portfolio.png";
const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Welcome to my portfolio website, a showcase of my skills as a passionate full-stack web developer. Built with React and Tailwind CSS, this site features a modern, responsive interface designed for an exceptional user experience. Throughout its development, I honed my expertise in loading optimization, responsiveness, and custom styling, including custom scrollbars.",
      imgSrc: Portfolio,
      imgAlt: "Personal Portfolio Image",
      projLink: "https://anshshah2303.vercel.app/",
    },
    {
      title: "Noteng",
      description: '"Noteng" was a collaborative college project where I served as a frontend web developer, collaborating with classmates to integrate Django backend functionalities. Using technologies like Bootstrap and Tailwind, we developed a centralized platform for sharing study-related materials such as notes, job opportunities, posts, and educational videos.',
      imgSrc: Noteng,
      imgAlt: "Noteng Project Image",
      projLink: "https://noteng.vercel.app/",
    },
  ];

  return (
    <div className="flex flex-col justify-center">
      <div className="font-medium text-sm md:text-lg leading-6 md:leading-8 tracking-wide justify-center">
        <h1 className="text-2xl md:text-4xl font-semibold pb-10 text-center">
          My <b className="text-yellow-400">Projects</b>!</h1>
      </div>
      <div className="flex flex-wrap justify-center mr-4">
        {projects.map((project, index) => (
          <div key={index} className="flex justify-center mb-20 sm:mb-10 mt-0 w-full sm:w-1/2 lg:w-1/3">
            <ProjectBox
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              imgAlt={project.imgAlt}
              projLink={project.projLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
