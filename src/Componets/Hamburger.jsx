import { useState } from "react";
import SlideInBar from "./SlideInBar";

export default function Hamburger({ handleOptionClick, isOpen, setIsOpen }) {

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="col-start-3 col-span-1 justify-self-end mr-4 ">
      <div
        className="flex flex-col justify-around w-8 h-8 ml-auto cursor-pointer mr-4 mt-4"
        onClick={toggleHamburger}
      >
        <div
          className={`h-1 bg-gray-500 bg-opacity-70 transition-transform duration-300 ease-in-out ${
            isOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`h-1 bg-gray-500 bg-opacity-70 transition-transform duration-300 ease-in-out ${
            isOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>
      <div>
        <SlideInBar isOpen={isOpen} handleOptionClick={handleOptionClick} />
      </div>
    </div>
  );
}
