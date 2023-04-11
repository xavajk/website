import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Python" },
  { skill: "C" },
  { skill: "C++" },
  { skill: "React" },
  { skill: "Node.js" },
  { skill: "MongoDB" },
  { skill: "PostgreSQL" },
  { skill: "Git" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          &#9759; About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:p-4 md:flex-row md:text-left md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              {" "}
              Hi, my name is Xavier and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software
              engineering student based in Santa Clara, CA.
            </p>
            <br />
            <p>
              I am currently a Junior at Santa Clara University, working towards
              a BS in Computer Science and Engineering.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From learning languages, to playing sports, to memorizing the
              lyrics of my favorite songs, I am always seeking new experiences
              and love to keep myself engaged and learning new things.
            </p>
            <br />
            <p>
              I believe you should{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                never stop growing,
              </span>{" "}
              which is what I strive to do. I have a passion for technology and
              a desire to push the limits of what&apos;s possible. I&apos;m
              excited to see where my career takes me and am always open to new
              opportunities. 🙂
            </p>
          </div>
          <div className="text-center display:inline-block md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-purple-500 hover:text-purple-100 hover:cursor-crosshair hover:scale-105 transition-transform"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              className="hidden md:block md:relative md:bottom-4 md:top-8 md:left-20 md:z-0 rounded-full"
              src="/xavier-hi-2.png"
              alt="xavier wave"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
