import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/dictionary.png";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 relative z-10">
      <div className="container flex justify-between items-center h-20 mx-0">
        <Link to="/" className="rounded-full">
          <img src={logo} alt="Dictionnary logo" className="max-w-20 h-20" />
        </Link>
        <ul className="hidden md:flex space-x-10">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/wordsinfos" className="text-gray-300 hover:text-white">
              Dictionary
            </Link>
          </li>
          <li>
            <Link to="/randomwords" className="text-gray-300 hover:text-white">
              Randoms Words
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>
        </ul>
        <ThemeSwitcher />
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <ul>
          <li>
            <Link
              to="/"
              className="block text-gray-300 hover:text-white px-2 py-2"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/wordsinfos"
              className="block text-gray-300 hover:text-white px-2 py-2"
              onClick={handleLinkClick}
            >
              Dictionary
            </Link>
          </li>
          <li>
            <Link
              to="/randomwords"
              className="block text-gray-300 hover:text-white px-2 py-2"
              onClick={handleLinkClick}
            >
              Randoms Words
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-gray-300 hover:text-white px-2 py-2"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
