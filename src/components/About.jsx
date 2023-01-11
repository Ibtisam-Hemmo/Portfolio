import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="mt-10">
          <p className="text-4xl font-bold inline border-b-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        As a full stack developer with experience in the PERN stack, I have a strong foundation in PostgreSQL, Express, React, and Node.js. I am able to design and implement a database schema, perform CRUD operations, and write SQL queries using PostgreSQL.
        </p>

        <br />

        <p className="text-xl">
        I am also proficient in creating and configuring a web server using the Express framework, and in building user interfaces using React, including creating and managing components, handling state and props, and using React hooks. With my experience in Node.js, I am able to build server-side applications, work with the file system, and handle asynchronous code using JavaScript.
        </p>
        <br />
        <p className="text-xl sm:mb-30">
        In addition to my technical skills, I have strong problem-solving and debugging abilities, and am able to write clean, efficient, and well-documented code.
        </p>
      </div>
    </div>
  );
};

export default About;