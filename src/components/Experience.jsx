import React from "react";

import html from "../assets/techs/html.png";
import css from "../assets/techs/css.png";
import sass from "../assets/techs/sass.png";
import javascript from "../assets/techs/javascript.png";
import react from "../assets/techs/react.png";
import nextjs from "../assets/techs/nextjs.png";
import github from "../assets/techs/github.png";
import node from "../assets/techs/node.png";
import Postgresql from "../assets/techs/Postgresql.png";
import tailwind from "../assets/techs/tailwind.png";
import jest from "../assets/techs/jest.png";
import TypeScript from "../assets/techs/ts.png";
import mui from "../assets/techs/mui.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: nextjs,
      title: "Next.js",
      style: "shadow-gray-500",
    },
    {
      id: 2,
      src: react,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: sass,
      title: "SASS",
      style: "shadow-pink-400",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: TypeScript,
      title: "TypeScript",
      style: "shadow-blue-300",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: node,
      title: "Node JS",
      style: "shadow-green-300",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: Postgresql,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: mui,
      title: "Material UI",
      style: "shadow-blue-700",
    },
    {
      id: 13,
      src: jest,
      title: "Jest",
      style: "shadow-red-700",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div className="sm:mt-20">
          <p className="text-4xl font-bold border-b-4  p-2 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Experience
          </p>
          <p className="py-6">
            These are some of the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style} flex flex-col items-center justify-between h-full`}
            >
              <img src={src} alt="" className="w-24 mx-auto" />
              <p className="mt-4 text-lg font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
