import React from "react";
import ProjectBox from "../components/ProjectBox"; // Adjust the path as needed
import Noteng from "../images/Noteng.png";
import Portfolio from "../images/Portfolio.png";
import BookingApp from "../images/TravelBooking.png";
import NeoTravel from "../images/NeoTravel.png";
import RecipeGenerator from "../images/RecipeGenerator.png";
import WeatherApp from "../images/WeatherApp.png";

const Projects = () => {
  const projects = [
    {
      title: "BookingApp",
      description: 'Made with HTML,CSS and JavaScript, me and my team worked on this for our first hackathon, with Ankit and Akash we participated in Taqneeq 2.0, a hackathon in NMIMS College, Mumbai. I contributed in the role of Node Backend developer while my teammates led Frontend, which was a valuable learning experience for me. I learnt coding for the first time through this project.',
      imgSrc: BookingApp,
      imgAlt: "Hackathon Project Image",
      projLink: "",
    },
    {
      title: "NeoTravel",
      description: "NeoTravel was a challenge posed by the TechNext Minithon at Thadomal Shahani College where we had to provide a seamless UI/UX Experience along with a glitchy and modernly styled website for travel, and car rentals. Our team approched this project with all our skills to achieve the 1ST POSITION, I contributed as the Frontend Developer for booking page of the website.",
      imgSrc: NeoTravel,
      imgAlt: "NeoTravel Project Image",
      projLink: "https://neo-travels.vercel.app/",
    },
    {
      title: "Noteng",
      description: '"Noteng" was a collaborative college project where I served as a frontend web developer, collaborating with classmates to integrate Django backend functionalities. Using technologies like Bootstrap and Tailwind, we developed a centralized platform for sharing study-related materials such as notes, job opportunities, posts, and educational videos.',
      imgSrc: Noteng,
      imgAlt: "Noteng Project Image",
      projLink: "https://noteng.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      description: "Welcome to my portfolio website, a showcase of my skills as a passionate full-stack web developer. Built with React and Tailwind CSS, this site features a modern, responsive interface designed for an exceptional user experience. Throughout its development, I honed my expertise in loading optimization, responsiveness, and custom styling, including custom scrollbars.",
      imgSrc: Portfolio,
      imgAlt: "Personal Portfolio Image",
      projLink: "https://anshshah2303.vercel.app/",
    },
    {
      title: "Recipe Generator",
      description: "Recipe Generator is a fun project I worked on to practice my React skills. This app generates random recipes using the Edamam API, allowing users to explore new dishes and ingredients. I developed this project to enhance my knowledge of API integration, state management, and React component lifecycle methods. Feel free to check it out!",
      imgSrc: RecipeGenerator,
      imgAlt: "Recipe Generator Project Image",
      projLink: "https://recipegeneratorreactapp.onrender.com/",
    },
    {
      title: "Weather App",
      description: "Created using the Rapid ''API's'' Visual Crossing Weather, this app provides real-time weather updates for any location worldwide. I developed this project to enhance my skills in API integration, asynchronous JavaScript, and data visualization. The app features a clean, user-friendly interface with detailed weather information, including temperature, humidity, and wind speed.",
      imgSrc: WeatherApp,
      imgAlt: "Weather App Project Image",
      projLink: "https://weather-app-byansh.vercel.app/",
    }
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
