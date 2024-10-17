import patioIcon from "../assets/icon.svg";

export default function SideNavBar() {
  return (
    <div className="bg-gray-800 text-white w-16 h-screen hidden md:block">
      <div>
        <img src={patioIcon} alt="Icon" className="w-16 h-16" />
      </div>
      <ul>
        <li className="mb-4">
          <button className="w-auto text-left hover:bg-gray-700 p-2 rounded text-3xl mt-4">
            <i className="fa-solid fa-language"></i>
          </button>
        </li>
        <li className="mb-4">
          <button className="w-auto text-left hover:bg-gray-700 p-2 rounded text-3xl">
            <i className="fa-regular fa-envelope"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}
