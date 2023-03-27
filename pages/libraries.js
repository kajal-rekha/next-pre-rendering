import { useEffect, useState } from "react";

const Libraries = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:4000/libraries");
        if (!res.ok) throw new Error("An error has occured ....");
        const json = await res.json();
        setIsLoading(false);
        setData(json);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };

    getData();
  }, []);

  if (isLoading) return <p>Loading.....</p>;

  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>Libraries</h1>

      {data &&
        data.map((lib) => (
          <h2 key={lib.id}>
            {lib.title} - {lib.core}
          </h2>
        ))}
    </div>
  );
};

export default Libraries;
