import Link from "next/link";

const Header = () => {
  const listHeader = { HOME: "", BLOG: "posts", about: "about" };
  return (
    <div className="bg-blue-400 py-4">
      <div className="container mx-auto">
        <div className="flex flex-row">
          {Object.keys(listHeader).map((item) => {
            return (
              <Link href={`/${listHeader[item]}`} key={listHeader[item]}>
                <div className="px-4">
                  <p className="text-white capitalize">{item}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Header;
