import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import WordsInfo from "./pages/WordsInfos";
import NavBar from "./components/NavBar";
import RandomWords from "./pages/RandomWords";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 text-black dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wordsinfos" element={<WordsInfo />} />
          <Route path="/randomwords" element={<RandomWords />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
