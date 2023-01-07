// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
// import { projects } from "../data";
import { data } from "../data/data.js";
import {AiFillGithub, AiFillYoutube, AiFillChrome} from 'react-icons/ai';

export default function Projects() {
  const project = data;
  return (
    <section id="projects" className="text-white bg-metal body-font">
      <div name='work' className='w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col text-center justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-500'>
                    Projects
                </p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            {/* container for projects */}
            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          
                {/* Gird Item */}
                {project.map((item, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url(${item.image})` }}
                        className="group container rounded-md 
                            flex justify-center text-center items-center mx-auto content-div"
                    >
                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 transition duration-100 ease-in-out">
                            <h1 className="text-2xl font-bold text-white tracking-wider ">
                                {item.name}
                            </h1>
                            <p className="text-md">
                                {item.description}
                            </p>
                            <div className="pt-8 text-center ">
                                {/* eslint-disable-next-line */}
                                <a href={item.github} target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                                        border-2 border-white hover:bg-white text-gray-700 font-bold text-lg transition duration-300 ease-in-out"
                                    >
                                        {/* Code */}
                                        <AiFillGithub />
                                    </button>
                                </a>
                                {/* eslint-disable-next-line */}
                                <a href={item.youtube} target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                                               border-2 border-white hover:bg-white text-gray-700 font-bold text-lg transition duration-300 ease-in-out"
                                    >
                                        <AiFillYoutube />
                                    </button>
                                </a>
                                {/* eslint-disable-next-line */}
                                <a href={item.live} target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                                        border-2 border-white hover:bg-white text-gray-700 font-bold text-lg transition duration-300 ease-in-out"
                                    >
                                        <AiFillChrome />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
      </div>
    
      {/* <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          
        </div>
      </div> */}
    </section>
  );
}
