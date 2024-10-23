import { useNavigate } from "react-router-dom";
import patioIcon from "../assets/icon.svg";
import { useTranslation } from "react-i18next";

export default function SlideInBar({ handleOptionClick, isOpen }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div
      className={`fixed top-0 left-0 h-full w-18 bg-[#fffbeb] text-[#1d4c47] transform transition-transform duration-300 ease-in-out border-r-2 border-[#1d4c47] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="bg-[#fffbeb] cursor-pointer hover:bg-gray-200">
        <img
          src={patioIcon}
          alt="Icon"
          className="ml-1 w-16 h-16"
          onClick={() => navigate("/")}
        />
      </div>
      <ul>
        <li className="mb-4 ml-1">
          <button
            className="w-auto text-left hover:bg-gray-200 p-2 rounded text-3xl mt-4 ml-1.5 cursor-pointer"
            onClick={() => navigate("/language")}
          >
            <i className="fa-solid fa-language"></i>
          </button>
        </li>
        <li className="mb-4 ml-2">
          <button
            className="w-auto text-left hover:bg-gray-200 p-2 font-black rounded text-xl cursor-pointer"
            onClick={() => handleOptionClick("SSN")}
          >
            SSN
          </button>
        </li>
        <li className="mb-4 ml-2">
          <button
            className="w-auto text-left hover:bg-gray-200 p-2 font-black rounded text-xl cursor-pointer"
            onClick={() => handleOptionClick("ITIN")}
          >
            ITIN
          </button>
        </li>
        <li className="mb-4 ml-2">
          <button
            className="w-auto text-left hover:bg-gray-200 p-2 font-black rounded text-xl cursor-pointer"
            onClick={() => handleOptionClick("LL30")}
          >
            LL30
          </button>
        </li>
        <li className="mb-4 ml-2">
          <button className="w-auto text-left hover:bg-gray-200 p-2 ml-1.5 rounded text-3xl cursor-pointer">
            <i className="fa-regular fa-envelope"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}
