import React from "react";

const Titlesubtile = ({ title, subtitle }) => {
  return (
    <div className="text-center h-80 mx-auto bg-[#9637E1] text-white py-10">
      <h2 className="text-3xl font-bold pb-5">{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Titlesubtile;
