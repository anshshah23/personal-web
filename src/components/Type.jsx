import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="text-4xl mt-4 font-semibold">
      <Typewriter
        options={{
          strings: ["Web Developer", "Web Designer", "AI/ML Enthusiast"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Type;
