import React from "react";
import PMS from "../assets/projects/PMS.png";
import reddit from "../assets/projects/reddit.png";
import newsPage from "../assets/projects/newspage.png";
import furniture from "../assets/projects/furniture.png";
import todo from "../assets/projects/todo.png";
import finder from "../assets/projects/finder.png";
import ecommerce from "../assets/projects/ecommerce.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      src: PMS,
      code:'https://github.com/Ibtisam-Hemmo/PMS',
      demo:'https://pharmacies-mangement-system.onrender.com/'
    },
    {
      id: 2,
      src: furniture,
      code:'https://github.com/Ibtisam-Hemmo/E-Commerce-FullStack',
      demo:'https://bika-merce.herokuapp.com/'
    },
    {
      id: 3,
      src: finder,
      code:'https://github.com/Ibtisam-Hemmo/AutoComplete-Ibtisam-Ali',
      demo:'https://auto-complete-ibtisam-ali.herokuapp.com/'
    },
    {
      id: 4,
      src: reddit,
      code:'https://github.com/Ibtisam-Hemmo/Ibtisam-Reddit',
      demo:'https://ibtisam-reddit.herokuapp.com/'
    },
    {
      id: 5,
      src: todo,
      code:'https://github.com/Ibtisam-Hemmo/To-Do-App-Yazeed-Ibtisam',
      demo:'https://todo-gsg.herokuapp.com/'
    },
    {
      id: 6,
      src: newsPage,
      code:'https://github.com/Ibtisam-Hemmo/NewsPage-Ibtisam-Tareq',
      demo:'https://newsapp-tareq-ibtisam.herokuapp.com/'
    },
    {
      id: 7,
      src: ecommerce,
      code:'https://github.com/Ibtisam-Hemmo/E-Commerce-Team5',
      demo:'https://e-commerce-team5.netlify.app/'
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 sm:mt-20">
          <p className="text-4xl font-bold inline border-b-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            Projects
          </p>
          <p className="py-6">Check a few of my projects right here; interested in more? Contact me anytime</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px- sm:px-0">
          {projects.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105">
                <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
