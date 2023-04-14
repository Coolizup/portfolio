import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full h-11 bg-[#810CA8] items-center justify-between">
      <div className="p-4">
        <h1 className="text-xl font-semibold text-white">Coolizup</h1>
      </div>
      <div className="flex text-l text-white p-2">
        <h1 className="p-2 transition-colors duration-500 ease-in-out hover:bg-[#2D033B] rounded-md">
          Articles
        </h1>
        <h1 className="p-2 transition-colors duration-500 ease-in-out hover:bg-[#2D033B] rounded-md">
          Works
        </h1>
        <h1 className="p-2 transition-colors duration-500 ease-in-out hover:bg-[#2D033B] rounded-md">
          Skills
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
