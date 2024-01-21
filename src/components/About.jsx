import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">Sophomore from VIT Chennai</p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          laudantium officia cumque tempora rem voluptas atque exercitationem
          odio, impedit, sequi dicta. Impedit dicta enim quis veritatis
          temporibus culpa voluptatum cum!
        </p>
      </div>
    </div>
  );
};

export default About;
