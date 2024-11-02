"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const navbarItemStyle =
  "text-black dark:text-white text-base md:text-xs lg:text-base  relative w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search/${searchQuery}`);
    setSearchQuery("");
  };
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
        <div className="min-[780px]:hidden flex items-center">
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
        <div className="hidden min-[780px]:block text-xl md:text-base lg:text-2xl text-black dark:text-white">
          <Link href="/">T F N</Link>
        </div>
        <div className="flex min-[780px]:hidden items-center text-xl md:text-base lg:text-2xl text-black dark:text-white">
          <button
            onClick={toggleSearch}
            aria-label={isSearchVisible ? "Close search" : "Open search"}
            className="bg-transparent border-none text-black dark:text-white cursor-pointer text-xl"
          >
            {isSearchVisible ? (
              "✕"
            ) : (
              <svg
                viewBox="0 0 32 32"
                width="20"
                height="20"
                aria-hidden="true"
                className="fill-black dark:fill-white"
              >
                <path d="m30.6 28.1-8.3-8.3c1.5-2 2.4-4.4 2.4-7.2C24.7 6 19.6 1 13 1S1.4 6.1 1.4 12.7 6.5 24.3 13 24.3c2.3 0 4.4-.6 6.2-1.8l8.5 8.5 2.9-2.9zM4 12.6c0-5.2 3.9-9.1 9-9.1s9 3.9 9 9.1c0 5.2-3.9 9.1-9 9.1s-9-3.9-9-9.1z"></path>
              </svg>
            )}
          </button>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors`}
          >
            {theme === "light" ? (
              <svg
                className="fill-yellow-400"
                fill="currentColor"
                width="20"
                height="20"
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
                width="20"
                height="20"
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
          <Link href="/">T F N</Link>
        </div>

        {/* Menu Items */}
        <div className="hidden min-[780px]:flex md:space-x-2 lg:space-x-4 items-center">
          <Link href="/" className={navbarItemStyle}>
            Home
          </Link>
          <Link href="/category/world" className={navbarItemStyle}>
            World
          </Link>

          <Link href="/category/sports" className={navbarItemStyle}>
            Sports
          </Link>
          <Link href="/category/business" className={navbarItemStyle}>
            Business
          </Link>
          <Link href="/category/technology" className={navbarItemStyle}>
            Technology
          </Link>
          <Link href="/category/entertainment" className={navbarItemStyle}>
            Entertainment
          </Link>
          <Link href="/category/other" className={navbarItemStyle}>
            Other
          </Link>
          <button
            onClick={toggleSearch}
            aria-label={isSearchVisible ? "Close search" : "Open search"}
            className="bg-transparent border-none text-black dark:text-white cursor-pointer text-xl"
          >
            {isSearchVisible ? (
              "✕"
            ) : (
              <svg
                viewBox="0 0 32 32"
                width="20"
                height="20"
                aria-hidden="true"
                className="fill-black dark:fill-white"
              >
                <path d="m30.6 28.1-8.3-8.3c1.5-2 2.4-4.4 2.4-7.2C24.7 6 19.6 1 13 1S1.4 6.1 1.4 12.7 6.5 24.3 13 24.3c2.3 0 4.4-.6 6.2-1.8l8.5 8.5 2.9-2.9zM4 12.6c0-5.2 3.9-9.1 9-9.1s9 3.9 9 9.1c0 5.2-3.9 9.1-9 9.1s-9-3.9-9-9.1z"></path>
              </svg>
            )}
          </button>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors`}
          >
            {theme === "light" ? (
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
          {/* <Link
            href="#cta"
            className=" bg-white dark:bg-black text-base md:text-xs lg:text-base  border-black dark:border-white  border-solid border-2 text-black dark:text-white px-4 py-2 mt-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-300"
          >
            Login
          </Link>
          <Link
            href="#cta"
            className=" bg-white dark:bg-black text-base md:text-xs lg:text-base border-black dark:border-white  border-solid border-2 text-black dark:text-white px-4 py-2 mt-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-300"
          >
            Register
          </Link> */}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`min-[780px]:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white dark:bg-black shadow-lg font-bold`}
      >
        {/* Mobile CTA Button */}
        {/* <div className="flex w-[60%] mx-auto  justify-around space-y-2 mb-2">
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
        </div> */}
        <Link href="/" className={`mx-auto py-2  ${navbarItemStyle}`}>
          Home
        </Link>
        <Link
          href="/category/world"
          className={`mx-auto py-2  ${navbarItemStyle}`}
        >
          World
        </Link>

        <Link
          href="/category/sports"
          className={`mx-auto py-2  ${navbarItemStyle}`}
        >
          Sports
        </Link>
        <Link
          href="/category/business"
          className={`mx-auto py-2  ${navbarItemStyle}`}
        >
          Business
        </Link>
        <Link
          href="/category/technology"
          className={`mx-auto py-2  ${navbarItemStyle}`}
        >
          Technology
        </Link>
        <Link
          href="/category/entertainment"
          className={`mx-auto py-2  ${navbarItemStyle}`}
        >
          Entertainment
        </Link>
        <Link
          href="/category/other"
          className={`mx-auto py-2  ${navbarItemStyle}`}
        >
          Other
        </Link>
      </div>
      <div
        className={`bg-gray-100 dark:bg-[#0c0b09] p-4 transition-all duration-300 ease-in-out ${
          isSearchVisible ? "max-h-20 block" : "max-h-0 hidden overflow-hidden"
        }`}
      >
        <div className="container mx-auto">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <div className="relative flex-grow">
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search"
                className="w-full py-2 pl-8 pr-2 rounded-md border border-gray-300  text-base"
              />
            </div>
            <button
              type="submit"
              aria-label="Submit search"
              className="  p-2 rounded-md text-xl flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#1a1814]  transition-colors duration-200"
            >
              <svg
                viewBox="0 0 32 32"
                width="20"
                height="20"
                className="fill-black dark:fill-white"
              >
                <path d="m30.6 28.1-8.3-8.3c1.5-2 2.4-4.4 2.4-7.2C24.7 6 19.6 1 13 1S1.4 6.1 1.4 12.7 6.5 24.3 13 24.3c2.3 0 4.4-.6 6.2-1.8l8.5 8.5 2.9-2.9zM4 12.6c0-5.2 3.9-9.1 9-9.1s9 3.9 9 9.1c0 5.2-3.9 9.1-9 9.1s-9-3.9-9-9.1z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
