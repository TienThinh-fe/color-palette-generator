import React from "react";
import { useAlert } from "react-alert";

function ColorElement({ colorCode }) {
  const alert = useAlert();

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="bg-slate-100 h-96 max-w-xs rounded-md relative">
      <span
        className="h-72 absolute inset-x-3 top-4 rounded-md cursor-pointer"
        style={{ backgroundColor: `${colorCode}` }}
        onClick={() => {
          handleCopy(colorCode);
          alert.show('Copied');
        }}
      ></span>
      <span className="text-center absolute inset-x-0 bottom-6 text-lg font-medium">
        {colorCode}
      </span>
    </div>
  );
}

export default ColorElement;
