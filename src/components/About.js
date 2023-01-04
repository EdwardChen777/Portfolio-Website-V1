import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function About() {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Software Engineer", "Project Manager", "Application Developer"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 120,
        backSpeed: 50,
        backDelay: 150,
        loop: true
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);

  return (
    <section id="about">
      <div className="container h-screen mx-auto flex px-15 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-white">
            Hi, I'm Edward.
            <br className="hidden lg:inline-block" />I am a <span ref={el}></span>
          </h1>
          <p className="mb-8 leading-relaxed text-2xl">
            I am currently a senior studying <span className = "text-green-500 font-semibold">Information Systems</span> at Carnegie Mellon University. I am passionate in creating 
            innovative solutions that will make positive impact on this world. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
    
  );
}
