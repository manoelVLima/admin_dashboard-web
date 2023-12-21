import Link from "next/link";
import { ReactNode } from "react";

interface MenuItemProps {
    url: string;
    text: string;
    icon: ReactNode;
}
export default function MenuItem({url,text, icon}: MenuItemProps) {
  return (
    <li className="hover:bg-gray-200 flex flex-col justify-center items-center h-20 w-full">
        {icon}
        <Link href={url}>
            <span className="text-xs font-light text-gray-600">
                {text}
            </span>
        </Link>

    </li>
  )
}
