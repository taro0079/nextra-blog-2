import type { NextraThemeLayoutProps } from "nextra";
import { MDXProvider, Components } from "nextra/mdx";
import Footer from "./components/Footer";

const components = {};
export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { route } = pageOpts;
  if (route.startsWith("/posts")) {
    return (
      <div className="prose">
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    );
  }
  return <div>{children}</div>;
}
