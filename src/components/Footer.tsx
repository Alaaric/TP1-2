import githubIcon from "../assets/github_icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black dark:bg-gray-800 dark:text-white py-4 flex justify-between items-center px-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Alaric. All rights reserved.
      </p>
      <a
        href="https://github.com/Alaaric"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center dark:hover:bg-black hover:bg-gray-700 transition rounded-full"
      >
        <img
          src={githubIcon}
          alt="GitHub"
          className="h-6 w-6 invert dark:invert-0"
        />
      </a>
    </footer>
  );
};

export default Footer;
