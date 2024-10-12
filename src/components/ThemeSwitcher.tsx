import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);

  const { theme, toggleTheme } = themeContext;

  return (
    <div className="flex items-center">
      <label htmlFor="theme-toggle" className="mr-3 text-white">
        {theme === "dark" ? "🌙" : "☀️"}
      </label>
      <button
        id="theme-toggle"
        onClick={toggleTheme}
        className="w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 bg-gray-300 dark:bg-blue-700 "
      >
        <div className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 dark:translate-x-6" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
