import React from "react";

export default function BreadCrumb({ path, onNavigate }) {
  return (
    <div className="bg-blue-500 hover:bg-gray-700 text-white font-semibold py-1 px-2 rounded mb-4 mt-5 mr-5 w-auto">
      {path.map((item, index) => (
        <span key={index}>
          {index > 0 && " > "}
          <button
            onClick={() => onNavigate(index, item)}
            className="breadcrumb-button"
          >
            {item}
          </button>
        </span>
      ))}
    </div>
  );
}
