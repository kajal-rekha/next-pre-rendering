import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("something went wrong...");
  return res.json();
};
const Cars = () => {
  const { data, error, isValidating } = useSWR(
    "http://localhost:4000/cars",
    fetcher
  );

  const isLoading = !data && !error && isValidating;

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>{error.message}</h2>;

  return (
    <div>
      <h2>Cars</h2>

      {data.map((car) => (
        <div key={car.id}>
          <h2>{car.title}</h2>
          <p>{car.speed}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Cars;
