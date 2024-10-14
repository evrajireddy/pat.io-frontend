import React from "react";

export default function BreadCrumb({ path, onNavigate }) {
  return (
    <div className="BreadCrumb">
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
