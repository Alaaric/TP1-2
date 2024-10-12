import { useState } from "react";
import useApiCall from "../hooks/useApiCall";
import ResultCard from "../components/ResultCard";

const WordsInfos = () => {
  const [word, setWord] = useState<String | null>(null);
  const { data, loading, error, fetchData } = useApiCall();

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
    console.log(word);
  };

  const handleClickApiCall = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetchData(`https://wordsapiv1.p.rapidapi.com/words/${word}`);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="search-word">
          <input
            type="text"
            name="search-word"
            id="search-word"
            onChange={handleWordChange}
            className="text-black"
          />
        </label>
        <button type="submit" onClick={handleClickApiCall}>
          Search word
        </button>
      </form>
      <h2>Search a word</h2>
      {loading && <div> loading... </div>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p>{data.word}</p>
          {data.results &&
            data.results.map((result, index) => (
              <div key={index}>
                <ResultCard result={result} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default WordsInfos;
