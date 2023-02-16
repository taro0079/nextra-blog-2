import { post } from "@/type";
import Link from "next/link";

const PostCard = ({ post }: { post: post }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <Link
          href={post.slug}
          key={post.slug}
          style={{ textDecoration: "none" }}
        >
          <div className="border-solid border-2 border-indigo-600 my-4 p-4 rounded-lg">
            <div className="text-2xl">{post.title}</div>
            <div>{post.date}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
