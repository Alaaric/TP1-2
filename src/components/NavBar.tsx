import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/dictionary.png";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="rounded-full">
          <img
            src={logo}
            alt="Dictionnary logo"
            className="max-w-10 h-10 rounded-full"
          />
        </Link>
        <ul className="hidden md:flex space-x-4">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
