import cat from "../assets/cat.jpg";
import catZoom from "../assets/cat-zoom.jpg";
import { useState } from "react";

const About = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <section className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto px-4 py-8 flex-grow relative">
      <article className="w-full md:w-1/2 p-4 min-w-[300px] max-w-[500px] relative">
        <h2 className="text-xl font-bold text-center mb-4 dark:text-white">
          About Me
        </h2>
        <figure className="w-2/4 mx-auto min-w-[300px] max-w-[500px]">
          <img
            src={show ? catZoom : cat}
            alt="cat photo"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="w-full h-[200px] object-cover"
          />
          <figcaption className="text-center w-full dark:text-white">
            {show ? "Trust Me" : "Me"}
          </figcaption>
        </figure>
        <p className="dark:text-white mt-4">I'm Alaric, a junior developer.</p>

        <p className="dark:text-white mt-2">
          If you have a project that needs a (talented)* developer, you can mail
          me at{" "}
          <a
            href="mailto:alaric.henrot@gmail.com"
            className="text-blue-500 hover:text-blue-400 dark:text-blue-300 dark:hover:text-blue-200"
          >
            alaric.henrot@gmail.com
          </a>
          .
        </p>
        <p className="dark:text-white mt-2">
          If you want to see my work, you can visit both{" "}
          <a
            href="https://alaric-henrot-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-400 dark:text-blue-300 dark:hover:text-blue-200"
          >
            my portfolio
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/Alaaric"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-400 dark:text-blue-300 dark:hover:text-blue-200"
          >
            {" "}
            my Github
          </a>
          .
        </p>

        <p className="dark:text-white mt-2">
          And for more info (or not), you can also visit{" "}
          <a
            href="https://www.linkedin.com/in/alarichenrot/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-400 dark:text-blue-300 dark:hover:text-blue-200"
          >
            my LinkedIn
          </a>
          .
        </p>
        <p className="text-xs dark:text-gray-500 absolute bottom-0 left-4">
          * It all depends on how thick your wallet is!
        </p>
      </article>

      <article className="w-full md:w-1/2 md:border-t-0 border-t md:border-l border-l-gray-200 p-4 min-w-[300px] max-w-[500px]">
        <h2 className="text-xl font-bold text-center mb-4 dark:text-white">
          About the Site
        </h2>
        <p className="dark:text-white mt-4">
          This site has no specific goal; it is simply a coding exercise using a
          less-than-ideal API.
        </p>
        <p className="dark:text-white mt-2">
          It uses an incomplete API to find words. Quite unfortunate, really.
        </p>
        <p className="dark:text-white mt-2">
          I don't use the full dataset the API provides, as I lack both the time
          and interest to utilize all of it.
        </p>
        <p className="dark:text-white mt-2">
          Tip: Click on the synonyms words to search for their definitions.
        </p>
      </article>
    </section>
  );
};

export default About;
