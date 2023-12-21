import { ReactNode } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Content from "./Content";

interface LayoutProps {
    title: string;
    subtitle: string;
    children?: ReactNode;
}
export default function Layout({title, subtitle, children}: LayoutProps) {
  return (
    <div>
        <SideMenu />
        <Header title={title} subtitle={subtitle} />
        <Content children={children} />
    </div>
  )
}
