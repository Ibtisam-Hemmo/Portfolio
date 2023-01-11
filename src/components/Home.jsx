import React from "react";
import IbtisamImage from "../assets/ibtisama.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="font-bold text-white capitalize mb-4">
            Hi there! Ibtisam is here
          </p>
          <h2 className="text-xl sm:text-5xl font-bold text-white">
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              {" "}
              a Software Developer.
            </span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            A passionate and self-driven full stack developer based in
            Palestine. I always aspire to build and maintain responsive websites
            using meticulously written code and user-centered design.
          </p>
          <div className="flex gap-5">
            <Link to="projects" smooth duration={500}>
              <button className="group w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                Projects
                <span className="pl-2">
                  <lord-icon
                    src="https://cdn.lordicon.com/nsufrtmp.json"
                    trigger="hover"
                    style={{ width: "25px", height: "32px" }}
                  ></lord-icon>
                </span>
              </button>
            </Link>
            <Link to="contact" smooth duration={500}>
              <button className="group w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                Hire Me
                <span className="pl-2">
                  <lord-icon
                    src="https://cdn.lordicon.com/dtgezzsi.json"
                    colors="primary:#d1f3fa,secondary:#d1f3fa"
                    trigger="hover"
                    style={{ width: "45px", height: "32px" }}
                  ></lord-icon>
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={IbtisamImage}
            alt="hero image"
            className=" hidden md:flex rounded-xl mx-auto w-3/4 md:w-full bg-blend-lighten"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
