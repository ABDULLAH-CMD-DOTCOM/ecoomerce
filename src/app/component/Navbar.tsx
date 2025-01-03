"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cart from "../assets/cart.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#a8dadc] w-full shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-[#1d3557] font-extrabold text-2xl cursor-pointer">
            Trendverse
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="text-black flex gap-6 items-center font-medium text-lg">
            <li className="hover:text-[#1d3557] transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#1d3557] transition">
              <Link href="/featured">Featured</Link>
            </li>
            <li className="hover:text-[#1d3557] transition">
              <Link href="/login">Login</Link>
            </li>
            <li className="hover:text-[#1d3557] transition">
              <Link href="/signup">Signup</Link>
            </li>
          </ul>
        </div>

        {/* Cart Icon */}
        <Link href="/cart">
          <div className="hidden md:flex items-center justify-center bg-[#f1ddc9] w-10 h-10 rounded-full hover:shadow-md">
            <Image src={cart} alt="cart" width={20} height={20} />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="text-black md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#f1ddc9] flex flex-col items-center py-4 space-y-4">
          <ul className="text-black flex flex-col items-center gap-4 font-medium text-lg">
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/featured">Featured</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/login">Login</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
