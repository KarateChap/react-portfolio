import React from "react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);

  const toggleHandler = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <>
      <div className="w-screen h-[70px] bg-black flex justify-center">
        <div className="max-w-[1240px] w-full flex flex-row justify-between items-center px-5">
          <div>
            <h2 className="font-bold text-3xl uppercase text-white cursor-pointer">
              Gab.
            </h2>
          </div>
          <div className="hidden sm:flex">
            <ul className="flex gap-8">
              <li className="font-bold uppercase text-1xl text-white cursor-pointer">
                Me
              </li>
              <li className="font-bold uppercase text-1xl text-white cursor-pointer">
                My Works
              </li>
              <li className="font-bold uppercase text-1xl text-white cursor-pointer">
                Contact Me
              </li>
            </ul>
          </div>
          <div className="sm:hidden flex">
            <BiMenu
              className="text-white text-3xl cursor-pointer"
              onClick={toggleHandler}
            />
          </div>
        </div>
      </div>
      {toggleOpen && (
        <div className="sm:hidden flex h-screen bg-black w-screen fixed p-">
          <ul className="text-center w-full p-5 ">
            <li className="font-bold text-white cursor-pointer uppercase pt-7">
              Me
            </li>
            <li className="font-bold text-white cursor-pointer uppercase pt-7">
              My Works
            </li>
            <li className="font-bold text-white cursor-pointer uppercase pt-7">
              Contact Me
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
