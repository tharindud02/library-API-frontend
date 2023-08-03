import React, { useState } from "react";
import SideMenu from "../shared/asideMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex">
      <div className="py-4 px-2 md:hidden">
        <button
          className="text-gray-700 hover:text-gray-900"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block w-full" : "hidden w-1/4"
        } p-4  md:block`}
      >
        <SideMenu />
      </div>

      <main className={`${isMenuOpen ? "hidden" : "p-8 w-3/4"} `}>
        {children}
      </main>
    </div>
  );
}
