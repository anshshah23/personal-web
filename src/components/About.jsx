import React, { useState } from "react";
import '../App.css';
import { FaFileDownload, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const About = () => {
  const skills = [
    ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind CSS", "Bootstrap", "Git", "GitHub"],
    ["Node.js", "Express", "MongoDB", "SQL", "Python", "Django", "Java", "C", "C++"],
    ["GraphQL", "REST APIs", "Docker", "Kubernetes", "AWS", "Firebase", "Next.js", "TypeScript", "Figma"]
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

  return (
    <div className="App flex flex-col justify-evenly items-center px-4">
      <section className="flex flex-col justify-evenly items-center w-full">
        <div className="w-full md:w-3/5 font-medium text-sm md:text-lg leading-6 md:leading-8 tracking-wide mb-6">
          <h1 className="text-2xl md:text-4xl font-semibold pb-5 text-center md:text-left">
            Get to <b>know</b> me!
          </h1>
          <p className="text-center md:text-left">
            Hi, my name is <b>Ansh Shah</b> and I am from Mumbai, India. I'm a <b>Frontend web developer</b> and a Third-Year
            student pursuing a <b>BTech in Computer Engineering</b>.
            <br />
            <br />
            I love to create projects with beautiful designs and put my own twists on it. You can check out some of my work in the projects
            section.
            <br />
            <br />
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the
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
        <div className="SkillsSection w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">My Skills</h2>
          <div className="relative w-full flex justify-center items-center mb-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 absolute left-0 arrow-button"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <FaArrowLeft />
            </button>
            <div className="skills-carousel flex overflow-x-auto min-w-full px-2">
              {skills[currentSlide].map((skill, index) => (
                <div key={index} className="skill-item mx-2">
                  {skill}
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 absolute right-0 arrow-button"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
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
