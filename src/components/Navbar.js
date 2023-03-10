// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-metal md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Edward Chen
          </a>
        </a>
        <ul className="hidden md:flex font-semibold">
            <li className="float-left">
                <a href="#profile" className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition   duration-300 ease-in-out">
                    <span className="mr-5 transition duration-150 ease-in-out hover:text-green-500">About</span>
                </a>
            </li>
            <li className="float-left">
                <a href="#skills" className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition   duration-300 ease-in-out">
                    <span className="mr-5 transition duration-150 ease-in-out hover:text-green-500">Experience</span>
                </a>
            </li>
            <li className="float-left">
                <a href="#projects" className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition   duration-300 ease-in-out">
                    <span className="mr-5 transition duration-150 ease-in-out hover:text-green-500">Projects</span>
                </a>
            </li>
            <li className="float-left">
                <a href="#contact" className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition   duration-300 ease-in-out">
                    <span className="mr-5 transition duration-150 ease-in-out hover:text-green-500">Contact</span>
                </a>
            </li>
            <li className="float-left">
                <a href="https://docs.google.com/document/d/1v2XAcbQ1GWHr4cUzEwsoptYi7jRVpItfAP0QkP-8_Y4/edit?usp=sharing" className="flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out border-2 border-green-500 hover:bg-green-500 p-2 text-green-500 hover:text-white">
                    <span className="">Resume</span>
                </a>
            </li>
        </ul>

      </div>
    </header>
  );
}