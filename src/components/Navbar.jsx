import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navStatus, setNavStatus] = useState(false);
  const routes = [
    {
      id: 1,
      route: "home",
    },
    {
      id: 2,
      route: "about",
    },
    {
      id: 3,
      route: "projects",
    },
    {
      id: 4,
      route: "experience",
    },
    {
      id: 5,
      route: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center text-white w-full h-20 bg-black fixed px-4 z-50">
      <div>
        <h1 className="font-logoFont text-4xl ml-2">IHemmo</h1>
      </div>
      <ul className="hidden md:flex ">
        {routes.map(({ route, id }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-150"
            >
            <Link to={route} smooth duration={500}> 
              {route} 
            </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNavStatus(!navStatus)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {navStatus ? (
          <lord-icon
            src="https://cdn.lordicon.com/kftmarem.json"
            trigger="morph"
            colors="primary:#121331,secondary:#ebe6ef"
            style={{ width: "70px", height: "100px" }}
          ></lord-icon>
        ) : (
          <lord-icon
            src="https://cdn.lordicon.com/ihyatngg.json"
            trigger="hover"
            style={{ width: "70px", height: "100px" }}
          ></lord-icon>
        )}
      </div>
      {navStatus && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 w-full ">
          {routes.map(({ route, id }) => {
            return (
              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link to={route} onClick={()=> setNavStatus(!navStatus)} smooth duration={500}> {route} </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
