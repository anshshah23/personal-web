import React from "react";
import { FaHtml5, FaCss3, FaBootstrap, FaGitAlt, FaGithub, FaReact, FaNpm, FaFigma } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss, SiMongodb, SiPython, SiDjango, SiCplusplus, SiDocker, SiFirebase, SiTypescript } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    Tailwind: <SiTailwindcss />,
    "C++": <CgCPlusPlus />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    MongoDB: <SiMongodb />,
    Python: <SiPython />,
    Django: <SiDjango />,
    C: <SiCplusplus />,
    Docker: <SiDocker />,
    Firebase: <SiFirebase />,
    TypeScript: <SiTypescript />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
