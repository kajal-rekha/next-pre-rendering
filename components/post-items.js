import Link from "next/link";

const PostItem = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <h2 className="text-2xl">
        {post.id} - {post.title}
      </h2>
    </Link>
  );
};

export default PostItem;
