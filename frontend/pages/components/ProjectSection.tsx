import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "Homework Annotator: Multimodal ML Pipeline",
    description:
      "A multi-modal image captioning model that take’s in a user’s input image and returns an appropriate caption. Uses transfer \
      learning to incorporate  EfficientNet CNN to encode images and transformer encoder-decoder to encode and generate captions. \
      Image captioning model pre-trained on Flickr30k dataset and fine-tuned on images of written work using Google Colab hardware acceleration.",
    image:
      "/scientist-working-on-neural-network-brain-programming-4254680-3535107.png",
    github: "https://github.com/xavajk/homework-annotator",
    link: "https://github.com/xavajk/homework-annotator",
  },
  {
    name: "Microgrid Intelligent Agents: Senior Design Project",
    description:
      "Developing a software implementation for autonomous agents in a microgrid environment which regulate power generation \
      and consumption. The project involves understanding the nature of agent communication (bartering, deal-making, negotiation). \
      Research is also being conducted on microgrid systems themselves, PV cells, wind, battery, generators, and loads, in order to \
      better understand how agents can achieve autonomous operation. The agents use deterministic interaction protocols along with forecasting \
      models and reinforcement learning to minimize operational cost to the user.",
    image: "/solar-energy-plant-5097002-4268357.png",
    github: "https://github.com/xavajk/auto-grid",
    link: "https://github.com/xavajk/auto-grid",
  },
  {
    name: "SpeakNotes",
    description:
      "This repository is a Python program that uses gTTS (Google Text-to-Speech) and the SpeechRecognition library to quickly and \
      effectively create, read, update, and delete tasks consolitdated within your Notion workspace.",
    image: "/notes-7141019-5792239.png",
    github: "https://github.com/xavajk/speak-notes",
    link: "https://github.com/xavajk/speak-notes",
  },
  {
    name: "PDF Chatter",
    description:
      "This project is centered around a PDF chatbot that can answer questions related to user-uploaded PDF documents. The app uses \
       only Python for the GUI (Streamlit) and LangChain for the LLM interactions and embeddings.",
    image: "/online-file-sharing-8086773-6514076.webp",
    github: "https://github.com/xavajk/lesson-saver",
    link: "https://github.com/xavajk/lesson-saver",
  },
  {
    name: "Deep Learning Specialization",
    description:
      "Built and trained deep neural networks, identifying key architecture parameters, implemented vectorized neural networks and \
      deep learning applications. Trained test sets, analyzed variance for DL applications, used standard techniques and optimization \
      algorithms, and built neural networks in TensorFlow. Built a CNN and applied it to detection and recognition tasks, used neural \
      style transfer to generate art, and applied algorithms to image and video data. Built and trained RNNs, worked with NLP and Word \
      Embeddings, and used HuggingFace tokenizers and transformer models to perform NER and Question Answering.",
    image: "/deep-learning-4120580-3427635.webp",
    github: "https://github.com/xavajk/deep-learning",
    link: "https://www.coursera.org/specializations/deep-learning",
  },
  {
    name: "Course Registration Bot",
    description:
      "Using Python and Selenium, this bot was made to automate the course registration process given only login credentials and a CSV file of course numbers.",
    image: "/gadget-production-automation-6818304-5625488.png",
    github: "https://github.com/xavajk/class-adder",
    link: "https://github.com/xavajk/class-adder",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <div className="my-12 pb-12 md:pt-16 md:pb-20">
        <h1 className="text-center font-bold text-4xl">
          &#9759; Project Spotlight
          <hr className="w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col animate-slideUpCubiBezier md:flex-row md:space-x-12">
                    <div className="mt-8 md:w-1/2">
                      <Link href={project.link} target="_blank">
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-12 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">
                        {project.name}
                      </h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-200">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
