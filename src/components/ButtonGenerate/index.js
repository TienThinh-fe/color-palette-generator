import React from "react";

function ButtonGenerate({ handleOnClick }) {
  return (
    <div
      className="bg-[#7E6CCA] text-center w-fit m-auto px-12 py-6 rounded-md text-white font-medium text-base cursor-pointer hover:px-14 ease-out duration-300"
      onClick={handleOnClick}
    >
      Click here to generate color palette
    </div>
  );
}

export default ButtonGenerate;
