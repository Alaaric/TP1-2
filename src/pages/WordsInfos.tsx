import { useState } from "react";
import useApiCall from "../hooks/useApiCall";
import ResultCard from "../components/ResultCard";
import Loading from "../components/Loading";

const WordsInfos = () => {
  const [word, setWord] = useState<string>("placeholder");
  const { data, loading, error, fetchData } = useApiCall();

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const handleClickApiCall = (e: React.FormEvent, wordToSearch: string) => {
    e.preventDefault();
    fetchData(`https://wordsapiv1.p.rapidapi.com/words/${wordToSearch}`);
  };
  return (
    <section className="flex-grow relative max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">
        Find a Word Definition (Maybe)
      </h1>
      <form
        onSubmit={(e) => handleClickApiCall(e, word)}
        className="flex justify-center mb-8"
      >
        <label
          htmlFor="search-word"
          className="mr-2 dark:text-white flex items-center"
        >
          Search:
        </label>
        <input
          type="text"
          name="search-word"
          id="search-word"
          onChange={handleWordChange}
          className="text-black dark:text-white bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2"
          placeholder="placeholder"
        />
        <button
          type="submit"
          className="ml-2 bg-gray-500 dark:bg-blue-500 text-white rounded-lg font-semibold px-4 py-2 hover:bg-gray-400 dark:hover:bg-blue-800 transition"
        >
          Search a word
        </button>
      </form>

      {loading && (
        <div className="text-center">
          <Loading />
        </div>
      )}
      {error && <p className="text-red-500 text-center">Error: {error}</p>}
      {data && (
        <article>
          <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
            {data.word}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {data.results &&
              data.results.map((result, index) => (
                <div key={index} className="flex justify-center">
                  <ResultCard
                    result={result}
                    handleClickApiCall={handleClickApiCall}
                  />
                </div>
              ))}
          </div>
        </article>
      )}
    </section>
  );
};

export default WordsInfos;
