import React from "react";

export default function BreadCrumb({ path, onNavigate }) {
  return (
    <div>
      {path.map((item, index) => (
        <span key={index}>
          {index > 0 && " > "}
          <button
            onClick={() => onNavigate(index, item)}
            className="breadcrumb-button hover:bg-gray-200 text-b font-semibold py-1 px-2 rounded mb-4 mt-5 mr-5 w-auto"
          >
            {item}
          </button>
        </span>
      ))}
    </div>
  );
}
