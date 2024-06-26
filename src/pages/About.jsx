import React, { useState, useRef, useEffect } from "react";
import {
  FaFileDownload,FaHtml5,FaCss3,FaBootstrap,FaGitAlt,FaGithub,FaReact,FaNpm,FaFigma,FaJava,FaWix} from "react-icons/fa";
import { DiJavascript1, DiNodejs } from "react-icons/di";
import {
  SiTailwindcss, SiYarn,SiMysql,SiMongodb,SiCanva,SiPython,SiDjango,SiCplusplus,SiFirebase,SiTypescript,SiRedux,SiMaterialdesignicons,SiExpress,SiLatex,SiVite,} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { CgCPlusPlus } from "react-icons/cg";
import '../components/styles/About.css';

const About = () => {
  const skills = [
    ["MaterialUI", "Tailwind CSS", "Bootstrap","HTML", "CSS", "JavaScript"],
    ["Git", "GitHub", "NPM","React", "Redux", "TypeScript"],
    ["Python", "Java", "C", "C++", "MongoDB", "SQL",],
    ["Latex", "Yarn", "Vite","Wix Studio", "Figma", "Canva"],
    [ "Node.js", "REST APIs", "Django", "Redux", "Firebase"],
  ];

  const skillsCarouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % skills.length);
      setFade(false);
    }, 500);
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
      "Node.js": <FaNpm />,MaterialUI: <SiMaterialdesignicons />,Canva: <SiCanva />,"Wix Studio": <FaWix />,"REST APIs": <AiFillApi />,SQL: <SiMysql />,HTML: <FaHtml5 />,CSS: <FaCss3 />,JavaScript: <DiJavascript1 />,Bootstrap: <FaBootstrap />,"Tailwind CSS": <SiTailwindcss />,"C++": <CgCPlusPlus />,React: <FaReact />,Git: <FaGitAlt />,GitHub: <FaGithub />,MongoDB: <SiMongodb />,Python: <SiPython />,Django: <SiDjango />,C: <SiCplusplus />,Firebase: <SiFirebase />,TypeScript: <SiTypescript />,Figma: <FaFigma />,Redux: <SiRedux />,Java: <FaJava />,"Node.js": <DiNodejs />,Express: <SiExpress />,Latex: <SiLatex />,Vite: <SiVite />, NPM: <FaNpm />, Yarn: <SiYarn />,
    };
    return <div className="skill-icon text-4xl m-2">{icons[skill]}</div>;
  };

  return (
    <div className="flex flex-col justify-center items-center px-2 sm:px-4 lg:px-8 pr-0 sm:pr-4 lg:pr-8 z-0">
      <section className="flex flex-col justify-center sm:justify-evenly items-center w-full">
        <div className="w-full md:w-2/3 font-medium text-sm md:text-lg leading-6 md:leading-8 tracking-wide mb-10">
          <h1 className="text-2xl md:text-4xl font-semibold pb-10 text-center">
            Get to <b className="text-yellow-400">know</b> me!
          </h1>
          <p className="text-left">
            Hi, my name is <b className="text-yellow-400">Ansh Shah</b> and I am from Mumbai, India. I'm a <b className="text-yellow-400">Frontend Web Developer</b> and a Third-Year
            student pursuing <b className="text-yellow-400">BTech in Computer Engineering</b>.
            <br />
            <br />
            I love to create projects with beautiful designs and apply my own touch to them. You can check out some of my work in the projects
            section. Proficient in diverse technologies, seeking opportunities to innovate and contribute effectively to projects.
            <br />
            <br />
            I am <b className="text-yellow-400">open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are on the navigation bar.
            <br />
            <br />
            Apart from coding, I love to read novels, paint, design, and do photography in my spare time.
          </p>
          <button
            onClick={handleDownload}
            className="about-button relative flex items-center justify-center font-bold py-2 px-4 rounded transition duration-250 ease-in-out overflow-hidden"
          >
            Download CV <FaFileDownload className="ml-2" />
            <span className="absolute inset-0 bg-black opacity-0 transition-opacity duration-250"></span>
          </button>
        </div>
        <div className="w-full md:w-2/3 font-medium text-sm md:text-lg leading-6 md:leading-8 tracking-wide mb-10">
          <h1 className="text-2xl md:text-4xl font-semibold pb-10 text-center">
            My <b className="text-yellow-400">Skills</b>
          </h1>
          <div
            ref={skillsCarouselRef}
            className={`relative w-full flex flex-col justify-center items-center mb-4 ${isMobile ? 'overflow-x-auto scrollbar-hide' : ''}`}
          >
            <div className={`skills-carousel grid grid-flow-row grid-cols-3 ${isMobile ? 'min-w-full' : 'min-w-[80%]'} px-2 sm:px-4 justify-center ${isMobile ? 'overflow-x-scroll' : ''}`} onClick={handleNext}>
              {skills[currentSlide].map((skill, index) => (
                <div
                  key={index}
                  className={`skill-item mx-1 sm:mx-2 bg-white text-gray-800 p-1 sm:p-2 px-4 sm:px-6 rounded-full shadow-md min-w-[80px] sm:min-w-[160px] text-center flex items-center justify-center ${isMobile ? 'flex-col items-center mb-2' : ''} transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
                >
                  <SkillIcon skill={skill} />
                  {!isMobile && <span className="ml-1 sm:ml-2 whitespace-nowrap">{skill}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
