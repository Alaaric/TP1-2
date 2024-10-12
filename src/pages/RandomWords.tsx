import ResultCard from "../components/ResultCard";
import useApiCall from "../hooks/useApiCall";

const RandomWords = () => {
  const { data, loading, error, fetchData } = useApiCall();

  const handleClickApiCall = () => {
    fetchData("https://wordsapiv1.p.rapidapi.com/words?random=true");
  };

  return (
    <div>
      <h1>API Data</h1>
      <button onClick={handleClickApiCall}>get a random word</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Random word api call</h2>
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

export default RandomWords;
