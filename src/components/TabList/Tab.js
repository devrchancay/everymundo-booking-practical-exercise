import React from "react";

const Tab = ({ name, icon, active }) => (
  <li
    className={`font-sans justify-center cursor-pointer ml-1 md:w-1/3 p-4 bg-darkGray items-center content-center text-white ${
      active ? "active flex w-full" : "hidden md:flex"
    }`}
  >
    <p className={`ico ${icon}`} />
    <p>{name}</p>
  </li>
);

export default Tab;
