import React from "react";
import Logo from "./Logo";
import UILinks from "./UILinks";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <div className="bg-black fixed w-full top-0 z-50 h-[60px] flex items-center justify-between">
      <div className="container flex items-center justify-between py-1">
        <Logo />
        <UILinks />
        <Sidebar />
      </div>
    </div>
  );
}
