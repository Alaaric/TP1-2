interface ResultProps {
  result: { definition: string | null; synonyms: string[] | null };
  handleClickApiCall: (e: React.FormEvent, word: string) => void;
}

const ResultCard = ({ result, handleClickApiCall }: ResultProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 max-w-sm w-full">
      {result.definition && (
        <p className="text-gray-800 dark:text-gray-300 text-lg font-medium mb-4">
          {result.definition}
        </p>
      )}

      {result.synonyms && result.synonyms.length > 0 && (
        <div className="border-t border-gray-300 dark:border-gray-700 pt-3 mt-3">
          <h4 className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">
            Synonyms:
          </h4>
          <ul className="flex flex-wrap gap-2">
            {result.synonyms.map((synonym, index) => (
              <li key={index}>
                <button
                  onClick={(e) => handleClickApiCall(e, synonym)}
                  className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  {synonym}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default ResultCard;
