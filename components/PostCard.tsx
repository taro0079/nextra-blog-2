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
          <div className="my-4 p-4 rounded-lg shadow-md shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 ease-in duration-200">
            <div className="text-2xl text-blue-500">{post.title}</div>
            <div className="text-gray-400">{post.date}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
