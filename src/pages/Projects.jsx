import React from "react";
import ProjectBox from "../components/ProjectBox"; // Adjust the path as needed
import Noteng from "../images/Noteng.png";
import Portfolio from "../images/Portfolio.png";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Welcome to my portfolio website! Built with React and Tailwind CSS, it offers a modern, responsive interface for an exceptional user experience. I focused on loading optimization, responsiveness, and custom styling. Explore my work and see the elegance and functionality in every detail.",
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
  );
};

export default Projects;