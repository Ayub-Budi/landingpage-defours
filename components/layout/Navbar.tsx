"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebar, setSidebar] = useState(false); // ✅ pakai useState

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="p-4 flex justify-between items-center mx-auto max-w-[1440px]">
        <p className="text-2xl font-bold">
          <Link href="/">DFOURS</Link>
        </p>

        <button className="md:hidden" onClick={() => setSidebar(!sidebar)}>
          <i className="ri-menu-line text-xl"></i>
        </button>
        <div className="gap-4 hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      {sidebar && (
          <div>
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setSidebar(false)}
            ></div>
            <div className="absolute left-0 top-0 z-50 w-[200px] h-full bg-white p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">
                  DFOURS
                </p>
                <i
                  className="ri-close-line text-2xl"
                  onClick={() => setSidebar(false)}
                ></i>
              </div>
              <Link href="/" onClick={() => setSidebar(false)}>Home</Link>
              <Link href="/about" onClick={() => setSidebar(false)}>About</Link>
              <Link href="/contact" onClick={() => setSidebar(false)}>Contact</Link>
            </div>
          </div>
        )}
    </>
  );
}
