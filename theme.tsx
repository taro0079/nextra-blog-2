import type { NextraThemeLayoutProps } from "nextra";

const components = {};
export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;
  console.log(pageMap);
  return <div>{children}</div>;
}
