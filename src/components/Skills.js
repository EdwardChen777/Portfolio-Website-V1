// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, {useEffect} from "react";
// import { skills } from "../data";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
    useEffect(() => {
        Aos.init({duration:1500});
    },[]);
  return (
    <section id="skills">
      <div className="container px-5 pt-10 mx-auto h-screen">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Experiences
          </h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p> */}
        </div>
        {/* lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2  */}
        <div className="grid grid-cols-2 text-lg gap-3">
            <div data-aos="fade-right" className="grid justify-items-end text-green-500">01</div>
            <div data-aos="fade-right">
                <h1><span>Software Developer</span> @ Healome</h1>
                <h2>June - Aug 2022</h2>
            </div>
            <div data-aos="fade-left" className="grid justify-items-end text-green-500">02</div>
            <div data-aos="fade-left">
                <h1><span>Project Manager</span> @ re:Bloom</h1>
                <h2>Sep 2021 - Aug 2022</h2>
            </div>
            <div data-aos="fade-right" className="grid justify-items-end text-green-500">03</div>
            <div data-aos="fade-right">
                <h1><span>Software Developer</span> @ Sustainible</h1>
                <h2>Jan 2022 - Apr 2022</h2>
            </div>
            <div data-aos="fade-left" className="grid justify-items-end text-green-500">04</div>
            <div data-aos="fade-left">
                <h1><span>Research Assistant</span> @ CMU Tepper School of Business</h1>
                <h2>Jan 2022 - Apr 2022</h2>
            </div>
            {/* <div className="flex flex-row gap-10">
                <div>
                    <h1 className="font-bold text-green-500">01</h1>
                </div>
                <div className="">
                    <h1 className="ml-50"><span>Software Developer</span> @ Healome</h1>
                    <h2>June - Aug 2022</h2>
                </div>
            </div>
            <div className="flex flex-row gap-10">
                <div>
                    <h1 className="font-bold text-green-500">02</h1>
                </div>
                <div className="">
                    <h1 className="ml-50"><span>Project Manager</span> @ re:Bloom</h1>
                    <h2>Sep 2021 - Aug 2022</h2>
                </div>
            </div>
            <div className="flex flex-row gap-10">
                <div>
                    <h1 className="font-bold text-green-500">03</h1>
                </div>
                <div className="">
                    <h1 className="ml-50"><span>Software Developer</span> @ Sustainible</h1>
                    <h2>Jan - Apr 2022</h2>
                </div>
            </div> */}
        </div>
      </div>
    </section>
  );
}