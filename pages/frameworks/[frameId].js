const FrameworkDetails = ({ framework }) => {
  return (
    <div>
      <h1>
        {" "}
        {framework.id} - {framework.title}
      </h1>
      <p>{framework.core}</p>
    </div>
  );
};

export default FrameworkDetails;

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:4000/frameworks/${params.frameId}`);
  const data = await res.json();

  console.log("getServerSideProps()  ran...");

  return {
    props: {
      framework: data,
    },
  };
}
