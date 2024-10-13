import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="text-center max-w-2xl mx-auto px-4 py-8 flex-grow relative">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold mb-4">
          The Truly Worst Dictionary!
        </h1>
        <p className="text-lg">
          Welcome to the worst dictionary ever created. Really.
        </p>
      </header>

      <article className="mb-8">
        <p className="text-lg mb-4">
          You saw a word and want to find its definition or any information
          about it? Then visit the{" "}
          <Link
            to="/wordsinfos"
            className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-cyan-400 transition duration-200"
          >
            Dictionary page
          </Link>
          , type your word, and good luck!
        </p>
        <p className="text-lg">
          Maybe you’ll find what you’re looking for, maybe not :)!!!
        </p>
      </article>

      <hr className="border-gray-300 dark:border-gray-600 mb-8 transition-colors duration-300" />

      <section className="mb-8">
        <header className="mb-4">
          <h2 className="text-2xl font-bold">Want to learn new words?</h2>
        </header>
        <p className="text-lg mb-4">
          Go to the{" "}
          <Link
            to="/randomwords"
            className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-cyan-400 transition duration-200"
          >
            Random Words
          </Link>{" "}
          page and good luck again!
        </p>
        <p className="text-lg">
          You'll get a word! But for the definition... don't expect too much.
        </p>
      </section>

      <hr className="border-gray-300 dark:border-gray-600 mb-8 transition-colors duration-300" />

      <section>
        <header className="mb-4">
          <h2 className="text-2xl font-bold">Learn more about me</h2>
        </header>
        <p className="text-lg">
          Want to know more about the genius behind this project? Visit the{" "}
          <Link
            to="/about"
            className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-cyan-400 transition duration-200"
          >
            About
          </Link>{" "}
          page to learn more.
        </p>
      </section>
    </section>
  );
};

export default Home;
