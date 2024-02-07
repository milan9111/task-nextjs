"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900 py-8 px-4 z-50">
      <div className="flex justify-end md:justify-center items-center">
        <div className="flex items-center">
          <nav
            className={`flex md:flex flex-col md:flex-row items-center gap-10 ${
              isOpen
                ? "absolute left-0 right-0 top-full bg-slate-900 p-4 md:relative md:flex md:bg-transparent transition-all duration-300 ease-in-out"
                : "hidden"
            }`}
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/posts" onClick={() => setIsOpen(false)}>
              Posts
            </Link>
            <Link href="/users" onClick={() => setIsOpen(false)}>
              Users
            </Link>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
