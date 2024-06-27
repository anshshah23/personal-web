import React, { useState } from "react";
import { FaFileDownload, FaArrowLeft, FaArrowRight, FaHtml5, FaCss3, FaBootstrap, FaGitAlt, FaGithub, FaReact, FaNpm, FaFigma } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss, SiMongodb, SiPython, SiDjango, SiCplusplus, SiFirebase, SiTypescript } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import '../App.css';

const About = () => {
  const skills = [
    ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind CSS", "Bootstrap", "Git", "GitHub"],
    ["Node.js", "Express", "MongoDB", "SQL", "Python", "Django", "Java", "C", "C++"],
    ["Latex", "REST APIs", "Canva", "Wix Studio", "Firebase", "TypeScript", "MaterialUI", "Figma"]
  ];

  const SMskills = [
    ["HTML", "CSS", "JavaScript" ],
    ["React", "Redux", "Tailwind CSS"],
    ["Bootstrap", "Git", "GitHub"],
    ["Node.js", "Express", "MongoDB"],
    ["SQL", "Python", "Django"],
    ["Java", "C", "C++"],
    ["Latex", "REST APIs", "Canva"],
    ["Wix Studio", "Firebase", "TypeScript"],
    ["MaterialUI", "Figma"]
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % skills.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + skills.length) % skills.length);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1gh1Bvc4RnGiQPMu6kejUaXr53gLAlQ8b";
    link.download = "Ansh_Shah_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const SkillIcon = ({ skill }) => {
    const icons = {
      HTML: <FaHtml5 />,
      CSS: <FaCss3 />,
      JavaScript: <DiJavascript1 />,
      Bootstrap: <FaBootstrap />,
      "Tailwind CSS": <SiTailwindcss />,
      "C++": <CgCPlusPlus />,
      React: <FaReact />,
      Git: <FaGitAlt />,
      GitHub: <FaGithub />,
      Nodejs: <FaNpm />,
      MongoDB: <SiMongodb />,
      Python: <SiPython />,
      Django: <SiDjango />,
      C: <SiCplusplus />,
      Firebase: <SiFirebase />,
      TypeScript: <SiTypescript />,
      Figma: <FaFigma />
    };
    return <div className="skill-icon text-4xl m-2">{icons[skill]}</div>;
  };

  return (
    <div className="App flex flex-col justify-center items-center px-2 pr-12 z-0">
      <section className="flex flex-col justify-evenly items-center w-full">
        <div className="w-full md:w-2/3 font-medium text-sm md:text-lg leading-6 md:leading-8 tracking-wide mb-6">
          <h1 className="text-2xl md:text-4xl font-semibold pb-5 text-center md:text-left">
            Get to <b>know</b> me!
          </h1>
          <p className="text-left">
            Hi, my name is <b className="text-yellow-400">Ansh Shah</b> and I am from Mumbai, India. I'm a <b className="text-yellow-400">Frontend web developer</b> and a Third-Year
            student pursuing a <b className="text-yellow-400">BTech in Computer Engineering</b>.
            <br />
            <br />
            I love to create projects with beautiful designs and put my own twists on it. You can check out some of my work in the projects
            section.
            <br />
            <br />
            I am <b className="text-yellow-400">open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding, I love to make Discord servers, design, and do photography in my spare time.
          </p>
          <button
            onClick={handleDownload}
            className="flex items-center justify-center bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded hover:shadow-black hover:shadow-lg hover:bg-blue-700 hover:text-white focus:outline-none mt-8 mx-auto md:mx-0"
          >
            Download CV <FaFileDownload className="ml-2" />
          </button>
        </div>
        <div className="SkillsSection w-full max-w-screen-lg mx-auto p-5 relative">
          <h2 className="text-2xl font-semibold mb-4 text-center">My Skills</h2>
          <div className="relative w-full flex justify-center items-center mb-4">
            <button
              onClick={handlePrev}
              className="arrow-button left bg-yellow-400 text-black opacity-70 hover:opacity-100 rounded-full p-2 shadow-md hover:bg-gray-400 focus:outline-none"
            >
              <FaArrowLeft />
            </button>
            <div className="skills-carousel flex min-w-full px-2 justify-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
              {skills[currentSlide].map((skill, index) => (
                <div key={index} className="skill-item mx-1 bg-white text-gray-800 p-1 px-5 rounded-lg shadow-md min-w-[140px] text-center flex items-center justify-center">
                  <SkillIcon skill={skill} />
                  <span className="ml-2">{skill}</span>
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="arrow-button right bg-yellow-400 text-black opacity-70 hover:opacity-100 rounded-full p-2 shadow-md hover:bg-gray-400 focus:outline-none"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
