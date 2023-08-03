import { sideMenu } from "@/utils/menu";
import Link from "next/link";
import React from "react";

const SideMenu = () => {
  return (
    <aside className="bg-gray-200 h-full p-4">
      <ul className="space-y-2">
        {sideMenu.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideMenu;
