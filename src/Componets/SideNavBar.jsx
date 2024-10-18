import { useNavigate } from "react-router-dom";
import patioIcon from "../assets/icon.svg";
import { useTranslation } from "react-i18next";

export default function SideNavBar({ handleOptionClick }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="text-black w-18 h-screen hidden md:block border-r-2 border-[#1d4c47]">
      <div className="bg-white cursor-pointer hover:bg-gray-200">
        <img
          src={patioIcon}
          alt="Icon"
          className="w-16 h-16"
          onClick={() => navigate("/")}
        />
      </div>
      <ul>
        <li className="mb-4 ml-1">
          <button
            className="w-auto text-left hover:bg-gray-200 p-2 rounded text-3xl mt-4 cursor-pointer"
            onClick={() => navigate("/language")}
          >
            <i className="fa-solid fa-language"></i>
          </button>
        </li>
        <li className="mb-4 ml-2">
          <button
            className="w-auto text-left hover:bg-gray-200 p-2 rounded text-xl cursor-pointer"
            onClick={() => handleOptionClick("SSN")}
          >
            SSN
          </button>
        </li>
        <li className="mb-4 ml-2">
          <button
            className="w-auto text-left hover:bg-gray-200 p-2 rounded text-xl cursor-pointer"
            onClick={() => handleOptionClick("ITIN")}
          >
            ITIN
          </button>
        </li>
        <li className="mb-4 ml-2">
          <button
            className="w-auto text-left hover:bg-gray-200 p-2 rounded text-xl cursor-pointer"
            onClick={() => handleOptionClick("LL30")}
          >
            LL30
          </button>
        </li>
        <li className="mb-4 ml-2">
          <button className="w-auto text-left hover:bg-gray-200 p-2 rounded text-3xl cursor-pointer">
            <i className="fa-regular fa-envelope"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}
