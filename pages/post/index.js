import PostItem from "@/components/post-items";

const Posts = ({ posts }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl">Posts</h1>

      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
