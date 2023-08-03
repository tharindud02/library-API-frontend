import { sideMenu } from "@/utils/menu";
import Link from "next/link";
import React from "react";

const SideMenu = () => {
  return (
    <aside className="bg-gray-800 min-h-[95vh] text-white p-4 flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Menu</h2>
      <ul className="flex-grow space-y-2 overflow-y-auto">
        {sideMenu.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.url}
                className="block py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideMenu;
