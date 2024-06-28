import React from "react";
import { Card } from "flowbite-react";
import '../components/styles/Projects.css';

const ProjectBox = ({ title, description, imgSrc, imgAlt, projLink }) => {
  return (
    <Card className="max-w-xs w-full flex flex-col items-center justify-between transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl bg-black bg-opacity-40 border-none">
      <div>
        <div className="flex flex-col items-center p-4">
          <img src={imgSrc} alt={imgAlt} className="w-64 h-64 object-contain" />
          <h1 className="text-2xl text-white font-bold mb-2">{title}</h1>
          <p className="text-white mb-4">{description}</p>
        </div>
        <div className="w-full p-4 pt-0">
          <a
            href={projLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block text-center py-2 px-4 rounded hover:shadow-lg focus:outline-none transition-transform duration-500 projects-button border-none"
          >
            View {title}
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProjectBox;
