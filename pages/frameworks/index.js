const Frameworks = ({ frameworks }) => {
  return (
    <div>
      <h1>Frameworks</h1>

      {frameworks.map((framework) => (
        <div key={framework.id}>
          <h2>
            {framework.id} - {framework.title}
          </h2>
          <p>{framework.core}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Frameworks;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/frameworks");
  const data = await res.json();

  return {
    props: {
      frameworks: data,
    },
  };
}
