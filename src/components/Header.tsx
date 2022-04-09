import React from "react";

function Header() {
  return (
    <div className="text-center">
      <h1 className="font-bold title md:text-7xl sm:text-6xl">
        <span className="bg-green-500 text-white">Todo</span> List
      </h1>
      <h6 className="mt-3 text-lg text-gray-700">
        yet another todo list written in react.
      </h6>
      <hr className="mt-3 bg-gray-800 m-auto md:w-3/5 sm:w-full" />
    </div>
  );
}

export default Header;
