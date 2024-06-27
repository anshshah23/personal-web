import React from "react";
import { Card } from "flowbite-react";

const ProjectBox = ({ title, description, imgSrc, imgAlt, projLink }) => {
  return (
    <Card className="max-w-xs w-full flex flex-col items-center justify-between transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="flex flex-col items-center">
        <img src={imgSrc} alt={imgAlt} className="w-64 h-64 object-contain" />
      </div>
      <div className="p-4 pt-0 text-center flex flex-col flex-grow">
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={projLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block w-full text-center bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded hover:shadow-lg hover:bg-blue-700 hover:text-white focus:outline-none transition-transform duration-500"
        >
          View {title}
        </a>
      </div>
    </Card>
  );
};

export default ProjectBox;
