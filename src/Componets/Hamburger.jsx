import { useState } from "react";
import SlideInBar from "./SlideInBar";

export default function Hamburger({ handleOptionClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="col-start-3 col-span-1 justify-self-end">
      <div
        className="flex flex-col justify-around w-8 h-8 ml-auto cursor-pointer mr-4 md:hidden mt-4"
        onClick={toggleHamburger}
      >
        <div
          className={`h-1 bg-gray-500 transition-transform duration-300 ease-in-out ${
            isOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`h-1 bg-gray-500 transition-transform duration-300 ease-in-out ${
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
