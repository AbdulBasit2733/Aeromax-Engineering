"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/Aeromax.svg";
import Link from "next/link";
import MenuIcons from "./icons/MenuIcons";
import XIcon from "./icons/XIcon";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="md:px-8 flex justify-between items-center max-h-24 max-w-full px-4">
      <Image src={logo} alt="logo" className="h-56 w-56" /> {/* Adjusted the size of the logo */}
      
      <div
        className={`${
          navOpen
            ? "md:hidden flex absolute h-screen py-10 top-24 left-0 bg-white w-full flex-col gap-10 z-20 items-center transition-all ease-in-out duration-500"
            : "hidden md:flex md:flex-row gap-x-10 items-center transition-all ease-in-out duration-500"
        }`}
      >
        <Link
          className="hover:bg-primary text-primary px-3 py-1 hover:text-white rounded-full font-semibold tracking-wide transition-all ease-in-out duration-300"
          href={"/services"}
        >
          Services
        </Link>
        <Link
          className="hover:bg-primary text-primary px-3 py-1 hover:text-white rounded-full font-semibold tracking-wide transition-all ease-in-out duration-300"
          href={"/projects"}
        >
          Projects
        </Link>
        <Link
          className="hover:bg-primary text-primary px-3 py-1 hover:text-white rounded-full font-semibold tracking-wide transition-all ease-in-out duration-300"
          href={"/about"}
        >
          About
        </Link>
        <button className="bg-primary text-white px-5 py-2 rounded-md shadow-md font-semibold hover:bg-white hover:text-primary transition-all ease-in-out duration-300">
          Contact us
        </button>
      </div>

      {/* Toggle Button for Mobile Menu */}
      <button onClick={() => setNavOpen(!navOpen)} className="md:hidden p-0">
        {navOpen ? <XIcon /> : <MenuIcons />}
      </button>
    </div>
  );
};

export default Navbar;
