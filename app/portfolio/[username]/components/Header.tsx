"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeaderProps {
  name: string;
  bio: string;
  profileImage: string;
}
const Header: React.FC<HeaderProps> = ({ name, bio, profileImage }) => {
  return (
    <header className="grid items-center justify-center gap-y-10 md:grid-cols-2 lg:px-28 lg:py-10">
      <div className="space-y-5 ">
        <motion.span
          initial={{ x: "-100px" }}
          animate={{ x: 0 }}
          className="font-mono tracking-wide text-blue-300 dark:text-blue-600"
        >
          Welcome, I&apos;m
        </motion.span>
        <motion.h1
          initial={{ x: "-100px" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[50px] font-bold capitalize text-gray-800 dark:text-gray-200"
        >
          {name}
        </motion.h1>
        <motion.p
          initial={{ x: "-100px" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-lg"
        >
          {bio}
        </motion.p>
        <motion.button
          initial={{ x: "-100px" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4 }}
          className="px-3 py-1 rounded-xl border-2 border-blue-300 text-blue-300 dark:border-blue-600 dark:text-blue-600 outline-none"
        >
          Find me on Github
        </motion.button>
      </div>
      <div className="w-full">
        <motion.figure
          initial={{ y: "-100px" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-56 h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden relative mx-auto md:ml-auto md:mr-0 shadow-2xl shadow-blue-300 dark:shadow-slate-950"
        >
          <Image src={profileImage} fill alt={name + " profile"} />
        </motion.figure>
      </div>
    </header>
  );
};

export default Header;
