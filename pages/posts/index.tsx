import Link from "next/link";
import { NextraThemeLayoutProps } from "nextra";
import posts from "post.json";
import PostCard from "@/components/PostCard";
const Post = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <div className="text-4xl mb-10">Posts</div>
        {posts.posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
};

export default Post;
