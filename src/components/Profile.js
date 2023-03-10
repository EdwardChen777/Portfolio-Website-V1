// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
// import { projects } from "../data";

export default function Projects() {
  return (
    <section id="profile" className="text-white bg-metal body-font h-screen">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 inline border-b-4 border-green-500">
            Something about me
          </h1>
        </div>
      </div>
      <div className="container mx-auto flex px-15 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
            Hello, my name is Edward Chen and I enjoy creating web applications. My passion in software development started at the end of my sophomore year, when I built a web application using Ruby on Rails. Then, I decided to transfer into the Information Systems program, when I started learning about <span className="text-green-500"> mobile application development</span>, <span className="text-green-500">full stack application development</span>, <span className="text-green-500">machine learning</span>, and more. 
          </p>
          <br />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">Now, I am looking for an opportunity to learn and grow, while using my knowledge to <span className="text-green-500">solve challenging problems</span> and <span className="text-green-500">build impactful solutions</span>.</p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded h-96"
            alt="hero"
            src="./profile.jpg"
          />
        </div>
        {/* <div className="flex flex-wrap -m-4">
            
        </div> */}
      </div>
    </section>
  );
}