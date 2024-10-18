import { useState } from "react";
import SlideInBar from "./SlideInBar";

export default function Hamburger({ handleOptionClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex flex-col justify-around w-10 h-8 ml-auto cursor-pointer mr-4 md:hidden"
        onClick={toggleHamburger}
      >
        <div
          className={`h-1 bg-black transition-transform duration-300 ease-in-out ${
            isOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`h-1 bg-black transition-transform duration-300 ease-in-out ${
            isOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>
      <div>
        <SlideInBar isOpen={isOpen} handleOptionClick={handleOptionClick} />
      </div>
    </>
  );
}
