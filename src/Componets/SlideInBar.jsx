import { useNavigate } from "react-router-dom";
import patioIcon from "../assets/icon.svg";
import { useTranslation } from "react-i18next";

export default function SlideInBar({ handleOptionClick, isOpen }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-opacity-40 bg-slate-100 shadow-md text-gray-500 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="bg-opacity-0 ml-5 bg-white cursor-pointer hover:text-black">
        <img
          src={patioIcon}
          alt="Icon"
          className="ml-1 mb-4 w-16 h-16 grayscale "
          onClick={() => navigate("/")}
        />
      </div>
      <ul>
        {/* <li className="mb-4 ml-1">
          <button
            className="w-auto text-left hover:bg-gray-200 p-2 rounded text-3xl mt-4 ml-1.5 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <i className="fa-solid fa-language"></i>
          </button>
        </li> */}
        <li className="mb-2 ml-3">
          <button
            className="w-auto text-left [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] hover:text-black p-2 font-black rounded text-lg cursor-pointer"
            onClick={() => handleOptionClick("SSN")}
          >
            Social Security Number
          </button>
        </li>
        <li className="mb-2 ml-3">
          <button
            className="w-auto text-left [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] hover:text-black p-2 font-black rounded text-lg cursor-pointer"
            onClick={() => handleOptionClick("ITIN")}
          >
            ITIN Number
          </button>
        </li>
        <li className="mb-4 ml-3">
          <button
            className="w-auto text-left [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] hover:text-black p-2 font-black rounded text-xl cursor-pointer"
            onClick={() => handleOptionClick("LL30")}
          >
            Local Law 30
          </button>
        </li>
        <li className="mb-4 ml-5">
          <button
            onClick={() => navigate("/research")}
            className="text-xl font-bold hover:text-black [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition-colors"
          >
            Research Page
          </button>
        </li>
        <li className="mb-4 ml-5">
          <button
            onClick={() => navigate("/contact")}
            className="text-xl font-bold hover:text-black [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition-colors"
          >
            Contact Us
          </button>
        </li>
        <li className="mb-4 ml-5">
          <button
            onClick={() => navigate("/company")}
            className="text-xl font-bold hover:text-black [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition-colors"
          >
            Company
          </button>
        </li>
        <li className="mb-4 ml-5">
          <button
            onClick={() => navigate("/careers")}
            className="text-xl font-bold hover:text-black [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition-colors"
          >
            Careers
          </button>
        </li>
      </ul>
    </div>
  );
}
