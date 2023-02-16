import Link from "next/link";
import { NextraThemeLayoutProps } from "nextra";
import posts from "post.json";
const Post = ({ pageOpts }: NextraThemeLayoutProps) => {
  return (
    <div>
      <div className="text-4xl">Posts</div>
      {posts.posts.map((post) => (
        <Link href={post.slug} key={post.slug}>
          <div>{post.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default Post;
