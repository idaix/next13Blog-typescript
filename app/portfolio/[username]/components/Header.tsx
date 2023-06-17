"use client";

import Image from "next/image";

interface HeaderProps {
  name: string;
  bio: string;
  profileImage: string;
}
const Header: React.FC<HeaderProps> = ({ name, bio, profileImage }) => {
  return (
    <header className="grid place-content-center md:place-content-start gap-y-10 md:grid-cols-2 items-center lg:px-40">
      <div className="space-y-5 ">
        <span className="font-mono tracking-wide text-blue-300 dark:text-blue-600">
          Welcome, I&apos;m
        </span>
        <h1 className="text-[50px] font-bold capitalize text-gray-800 dark:text-gray-200">
          {name}
        </h1>
        <p className="text-gray-500 text-lg">{bio}</p>
        <button className="px-3 py-1 rounded-xl border-2 border-blue-300 text-blue-300 dark:border-blue-600 dark:text-blue-600 outline-none">
          Find me on Github
        </button>
      </div>
      <div className="w-fit md:w-full">
        <figure className="w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden relative md:ml-auto shadow-2xl shadow-blue-300 dark:shadow-slate-950">
          <Image src={profileImage} fill alt={name + " profile"} />
        </figure>
      </div>
    </header>
  );
};

export default Header;
