"use client";
const Navbar = () => {
  return (
    <nav
      className="
            sticky
            w-fit
            top-2
            left-1/2
            -translate-x-1/2
            bg-white
            shadow-sm
            rounded-full
            overflow-hidden
        "
    >
      <ul className="flex">
        <li className="px-5 py-2 hover:text-blue-500 font-semibold text-gray-500 hover:bg-gray-100 cursor-pointer duration-300">
          Home
        </li>
        <li className="px-5 py-2 hover:text-blue-500 font-semibold text-gray-500 hover:bg-gray-100 cursor-pointer duration-300">
          Blog
        </li>
        <li className="px-5 py-2 hover:text-blue-500 font-semibold text-gray-500 hover:bg-gray-100 cursor-pointer duration-300">
          About
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
