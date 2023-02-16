import Link from "next/link";
import { NextraThemeLayoutProps } from "nextra";
import posts from "post.json";
import PostCard from "@/components/PostCard";
const Post = () => {
  return (
    <div className="justify-center">
      <div className="text-4xl mb-10 text-blue-500">Posts</div>
      {posts.posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default Post;
