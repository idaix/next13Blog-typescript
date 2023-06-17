"use client";

import Link from "next/link";
import BackToHome from "./BackToHome";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav
      className="
            sticky
            top-0
            left-0
            w-full h-20
            bg-gray-50
            dark:bg-slate-950
            shadow-sm
            flex
            items-center
            justify-between
            z-40
            px-5
        "
    >
      <BackToHome />
      <div className="flex ml-auto items-center gap-3">
        <Link href="/portfolio" className="text-gray-700 dark:text-gray-300">
          iPortfolio
        </Link>
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
