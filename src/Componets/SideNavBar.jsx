import { useNavigate } from "react-router-dom";
import patioIcon from "../assets/icon.svg";
import { useTranslation } from "react-i18next";

export default function SideNavBar({ handleOptionClick }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="text-gray-500 w-18 h-screen bg-yellow-50 shadow-sm  hidden md:block border-r-2 ">
      <div className=" cursor-pointer hover:bg-gray-200">
        <img
          src={patioIcon}
          alt="Icon"
          className="w-24 h-24 opacity-50 grayscale"
          onClick={() => navigate("/")}
        />
      </div>
      <ul>
        <li className="mb-4 ml-4">
          <button
            className="w-auto text-left hover:bg-gray-200 font-black p-2 rounded text-xl cursor-pointer"
            onClick={() => handleOptionClick("SSN")}
          >
            SSN
          </button>
        </li>
        <li className="mb-4 ml-4">
          <button
            className="w-auto text-left hover:bg-gray-200 font-black p-2 rounded text-xl cursor-pointer"
            onClick={() => handleOptionClick("ITIN")}
          >
            ITIN
          </button>
        </li>
        <li className="mb-4 ml-3">
          <button
            className="w-auto text-left hover:bg-gray-200 font-black p-2 rounded text-xl cursor-pointer"
            onClick={() => handleOptionClick("LL30")}
          >
            LL30
          </button>
        </li>
        <li className="mb-4 ml-4">
          <button className="ml-1.5 w-auto text-left hover:bg-gray-200 font-black p-2 rounded text-3xl cursor-pointer">
            <i className="fa-regular fa-envelope"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}
