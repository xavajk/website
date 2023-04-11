"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center mt-10 -mb-20 md:flex-row md:text-align-left md:py-52 sm:py-32">
        <div className="md:mt-2 md:w-1/2">
          <Image
            className="rounded-full shadow-2xl"
            src="/xavier-hi-1.png"
            alt="headshot"
            width={350}
            height={350}
          />
        </div>
        <div className="md:mt-10 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi, I&apos;m Xavier! 👋🏼
          </h1>
          <p className="mt-4 mb-10 text-2xl">
            I&apos;m a{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              Computer Science and Engineeering{" "}
            </span>
            major studying at Santa Clara University
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-purple-600 dark:bg-purple-500 rounded shadow hover:bg-purple-700 dark:hover:bg-purple-600"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
