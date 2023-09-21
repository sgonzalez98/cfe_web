import React from "react";

const ButtonPrimary = ({ children } : { children: string }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none"
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
