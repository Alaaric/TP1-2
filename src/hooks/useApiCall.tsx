import { useState, useCallback } from "react";

interface ApiData {
  frequency: number | null;
  pronunciation: object | null;
  results: { definition: string | null; synonyms: string[] | null }[] | null;
  syllables: object | null;
  word: string;
}

export const useApiCall = () => {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_WORDS_API_KEY,
        },
      });
      if (!response.ok) {
        throw new Error(
          "No matching results. Are you sure this is an English word?"
        );
      }
      const result: ApiData = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred... sorry");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
};

export default useApiCall;
