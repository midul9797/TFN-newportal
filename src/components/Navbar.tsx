"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const navbarItemStyle =
  "text-black dark:text-white  relative w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { setTheme } = useTheme();
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setTheme(darkMode ? "dark" : "light");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`bg-white dark:bg-black sticky top-0 z-50 md:text-sm lg:text-md ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      <div className=" w-full font-bold px-4 py-2 flex justify-between items-center">
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2 6h20M2 12h10M2 18h20"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Logo */}
        <div className="text-2xl text-black dark:text-white">
          <Link href="/">T F N</Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex md:space-x-3 lg:space-x-8 items-center">
          <a href="#features" className={navbarItemStyle}>
            Politics
          </a>

          <Link href="/customization" className={navbarItemStyle}>
            Sports
          </Link>
          <a href="#faq" className={navbarItemStyle}>
            Business
          </a>
          <a href="#faq" className={navbarItemStyle}>
            Technology
          </a>
          <a href="#faq" className={navbarItemStyle}>
            Entertainment
          </a>
          <a href="#faq" className={navbarItemStyle}>
            Science
          </a>
          <a href="#faq" className={navbarItemStyle}>
            Other
          </a>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors`}
          >
            {darkMode ? (
              <svg
                className="fill-yellow-400"
                fill="currentColor"
                width="25"
                height="25"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="fill-white"
                fill="none"
                width="25"
                height="25"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
          {/* Call-to-Action Button */}
          <Link
            href="#cta"
            className=" bg-white dark:bg-black  border-black dark:border-white  border-solid border-2 text-black dark:text-white px-4 py-2 mt-2 rounded hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-300"
          >
            Login
          </Link>
          <Link
            href="#cta"
            className=" bg-white dark:bg-black border-black dark:border-white  border-solid border-2 text-black dark:text-white px-4 py-2 mt-2 rounded hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-lg font-bold`}
      >
        {/* Mobile CTA Button */}
        <div className="flex w-[60%] mx-auto  justify-around space-y-2 mb-2">
          <Link
            href="#cta"
            className=" bg-white dark:bg-black  border-black dark:border-white  border-solid border-2 text-black dark:text-white px-4 py-2 mt-2 rounded hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-300"
          >
            Login
          </Link>
          <Link
            href="#cta"
            className=" bg-white dark:bg-black border-black dark:border-white  border-solid border-2 text-black dark:text-white px-4 py-2 mt-2 rounded hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-300"
          >
            Register
          </Link>
        </div>
        <a href="#features" className={` mx-auto py-2 ${navbarItemStyle}`}>
          Politics
        </a>
        <Link
          href="/customization"
          className={` mx-auto py-2 ${navbarItemStyle}`}
        >
          Sports
        </Link>

        <a href="#faq" className={` mx-auto py-2 ${navbarItemStyle}`}>
          Business
        </a>
        <a href="#faq" className={` mx-auto py-2 ${navbarItemStyle}`}>
          Entertainment
        </a>
        <a href="#faq" className={` mx-auto py-2 ${navbarItemStyle}`}>
          Technology
        </a>
        <a href="#faq" className={` mx-auto py-2 ${navbarItemStyle}`}>
          Science
        </a>
        <a href="#faq" className={` mx-auto py-2 ${navbarItemStyle}`}>
          Other
        </a>
      </div>
    </div>
  );
};

export default Navbar;
