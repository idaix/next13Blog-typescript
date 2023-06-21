"use client";
import { motion } from "framer-motion";
const Navbar = ({ name, username }: { name: string; username: string }) => {
  return (
    <nav className="bg-red-10 flex items-center gap-10 justify-between lg:px-20">
      <motion.span
        initial={{ x: "-100px" }}
        animate={{ x: 0 }}
        className="capitalize font-mono font-semibold border-b"
      >
        {name ? name : username}
      </motion.span>
      <motion.ul
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="hidden md:flex flex-1 gap-x-8 justify-end"
      >
        <li>
          <span className="text-xs font-mono text-blue-300 dark:text-blue-600">
            01.{" "}
          </span>
          Home
        </li>
        <li>
          <span className="text-xs font-mono text-blue-300 dark:text-blue-600">
            02.{" "}
          </span>
          Projects
        </li>
        <li>
          <span className="text-xs font-mono text-blue-300 dark:text-blue-600">
            03.{" "}
          </span>
          Contact
        </li>
      </motion.ul>
      <span className="md:hidden">Menu</span>
    </nav>
  );
};

export default Navbar;
