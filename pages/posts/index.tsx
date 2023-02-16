import Link from "next/link";
import { NextraThemeLayoutProps } from "nextra";
import posts from "post.json";
import PostCard from "@/components/PostCard";
const Post = ({ pageOpts }: NextraThemeLayoutProps) => {
  return (
    <div>
      <div className="text-4xl">Posts</div>
      {posts.posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default Post;
