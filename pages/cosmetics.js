const Cosmetics = ({ cosmetics }) => {
  return (
    <div>
      <h1>List of Cosmetics</h1>

      {cosmetics.map((cosmetic) => (
        <div key={cosmetic.id}>
          <h2>
            {cosmetic.id} - {cosmetic.title} - {cosmetic.price}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Cosmetics;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/cosmetics");
  const data = await res.json();

  return {
    props: {
      cosmetics: data,
    },
    revalidate: 1,
  };
}
