import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-10 "
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="mt-10">
          <p className="text-4xl font-bold inline border-b-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          As a skilled Front-End Engineer with solid experience building
          responsive and user-friendly web applications, I enjoy turning design
          ideas into interactive digital experiences and collaborating with
          teams to bring projects to life. I am eager to expand my skills in
          front-end technologies and contribute to creating high-quality
          products.
        </p>
        <br />
        <p className="text-xl sm:mb-30">
          In addition to my technical skills, I have strong problem-solving and
          debugging abilities, and am able to write clean, efficient, and
          well-documented code. I am looking for a role where I can grow professionally
          while helping to build impactful web solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
