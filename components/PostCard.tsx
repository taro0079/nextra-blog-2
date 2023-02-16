import { post } from "@/type";
import Link from "next/link";

const PostCard = ({ post }: { post: post }) => {
  return (
    <Link href={post.slug} key={post.slug}>
      <div>{post.title}</div>
    </Link>
  );
};

export default PostCard;
