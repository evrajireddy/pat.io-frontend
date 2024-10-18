import React from "react";

export default function BreadCrumb({ path, onNavigate }) {
  return (
    <div className="col-span-3">
      {path.map((item, index) => (
        <span key={index}>
          {index > 0 && " > "}
          <button
            onClick={() => onNavigate(index, item)}
            className="breadcrumb-button hover:bg-gray-200 text-b font-semibold px-1 rounded w-auto"
          >
            {item.slice(0, 8)}
          </button>
        </span>
      ))}
    </div>
  );
}
