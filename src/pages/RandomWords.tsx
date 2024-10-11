import { useEffect, useState } from "react";

interface ApiData {
  id: number;
  language: string;
  permalink: string;
  source: string;
  source_url: string;
  text: string;
}

const RandomWords = () => {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result: ApiData = await response.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>API Data</h1>
      {data && (
        <div>
          <h2>Random fact placeholder api call</h2>
          <p>{data.text}</p>
        </div>
      )}
    </div>
  );
};

export default RandomWords;
