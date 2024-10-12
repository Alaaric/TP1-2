interface resultProps {
  result: { definition: string | null; synonyms: string[] | null };
}

const ResultCard = ({ result }: resultProps) => {
  return (
    <>
      <p>{result.definition && result.definition}</p>
      {result.synonyms &&
        result.synonyms.map((synonym, index) => (
          <div key={index}>{synonym}</div>
        ))}
    </>
  );
};
export default ResultCard;
