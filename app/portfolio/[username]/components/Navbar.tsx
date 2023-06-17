"use client";
const Navbar = ({ name, username }: { name: string; username: string }) => {
  return (
    <nav className="bg-red-10 flex items-center gap-10 justify-between lg:px-20">
      <span className="capitalize font-mono font-semibold border-b">
        {name ? name : username}
      </span>
      <ul className="hidden md:flex flex-1 gap-x-8 justify-end">
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
          About
        </li>
        <li>
          <span className="text-xs font-mono text-blue-300 dark:text-blue-600">
            03.{" "}
          </span>
          Projects
        </li>
      </ul>
      <span className="md:hidden">Menu</span>
    </nav>
  );
};

export default Navbar;
