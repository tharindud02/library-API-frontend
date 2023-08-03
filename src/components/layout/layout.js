import React from "react";
import SideMenu from "../shared/asideMenu";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <div className="p-4 w-1/4">
        <SideMenu />
      </div>

      <main className="p-8 w-3/4">{children}</main>
    </div>
  );
}
