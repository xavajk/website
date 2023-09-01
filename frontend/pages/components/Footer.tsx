import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { BsEnvelopeAt } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="text-neutral-500 dark:text-neutral-100">
          © 2023 Xavier Kuehn
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 mb-1">
          <a href="https://github.com/xavajk" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/xavierkuehn/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
            />
          </a>
          <a href="mailto:me@xavierkuehn.com" rel="noreferrer" target="_blank">
            <BsEnvelopeAt
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
