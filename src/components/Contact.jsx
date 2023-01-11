import React from "react";

const Contact = () => {
  return (
    <div name='contact' className="w-full h-fit bg-gradient-to-b from-black to-gray-800 text-white" >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 sm:mt-20">
          <p className="text-4xl font-bold inline border-b-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">GET IN TOUCH</p>
          <p className="py-6">Please fill in the form below, and I'll get back to you right away if you have any constructive comments, projects, or even just want to say hi.</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/107ac08c-58b3-4eaf-b3b0-dc5117aa016e"  method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="email"
              placeholder="Enter Your name"
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="name"
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="bg-gradient-to-b  from-cyan-300 to-blue-500 px-6 py-3 my-8  max-auto flex items-center rounded-md hover:scale-110 duration-300 text-white">Lets' talk</button>
          </form>
        </div>
        <p className="text-center">By Ibtisam Hemmo 2023</p>
      </div>
    </div>
  );
};

export default Contact;
