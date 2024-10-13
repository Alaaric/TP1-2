import Loading from "../components/Loading";
import ResultCard from "../components/ResultCard";
import useApiCall from "../hooks/useApiCall";

const RandomWords = () => {
  const { data, loading, error, fetchData } = useApiCall();

  const handleClickApiRandomCall = () => {
    fetchData("https://wordsapiv1.p.rapidapi.com/words?random=true");
  };

  const handleClickApiCall = (e: React.FormEvent, wordToSearch: string) => {
    e.preventDefault();
    fetchData(`https://wordsapiv1.p.rapidapi.com/words/${wordToSearch}`);
  };

  return (
    <section className="flex-grow relative max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2 dark:text-white">
        Get a Random Word
      </h1>
      <p className="text-xs text-center mb-6">(good luck)</p>

      <div className="text-center mb-6">
        <button
          onClick={handleClickApiRandomCall}
          className="bg-gray-500 dark:bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-gray-400 dark:hover:bg-blue-800 transition"
        >
          Get it
        </button>
      </div>

      {loading && <Loading />}

      {error && <p className="text-red-500 text-center">Error: {error}</p>}

      {data && (
        <div>
          <h2 className="text-2xl font-semibold text-center dark:text-white mb-6">
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
        </div>
      )}
    </section>
  );
};

export default RandomWords;
