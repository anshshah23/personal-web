import React from "react";
import { FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly min-h-[80vh] overflow-hidden items-center">
      <div className="w-full md:w-1/2 font-medium text-lg md:text-xl leading-8 md:leading-10 tracking-wide">
        <h1 className="text-3xl md:text-4xl font-semibold pb-10">
          Get to <b>know</b> me!
        </h1>
        <p>
          Hi, my name is <b>Ansh Shah</b> and I am from Mumbai,
          India. I'm a <b>Frontend web developer</b> and a Third-Year
          student pursuing a <b>BTech in Computer Engineering</b>.
          <br />
          <br />
          I love to create projects with beautiful designs and put my own
          twists on it. You can check out some of my work in the projects
          section.
          <br />
          <br />
          I am <b>open</b> to new collaborations or work where I can
          contribute and grow. Feel free to connect with me, links are in the
          footer.
          <br />
          Apart from coding, I love to make Discord servers, design, and do
          photography in my spare time.
        </p>
        <a href="https://drive.google.com/file/d/1rUW3frRpHS8r76Spe9r_uNKzpQyIwAlx/view?usp=drive_link" download className="inline-block mt-6" target='_blank' rel='noopener noreferrer'>
          <button className="flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Download Resume <FaFileDownload className="ml-2" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
