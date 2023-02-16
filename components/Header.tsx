import Link from "next/link";

const Header = () => {
  return (
    <div className="flex px-8 mx-auto my-4 justify-around">
      <Link href="/">
        <div className="text-2xl">taroblog</div>
      </Link>
      <Link href="/posts">
        <div className="text-sm">Blog</div>
      </Link>
      <Link href="/about">
        <div className="text-sm">About</div>
      </Link>
    </div>
  );
};
export default Header;
