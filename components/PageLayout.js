import React from "react";

const PageLayout = ({ children, className = "", style= "" }) => {
  return (
    <div
    style={{style}}
      className={`container mx-auto px-28 w-[100vw] h-[88vh] md:h-[82vh] ${className}`}
    >
      {children}
    </div>
  );
};

export default PageLayout;
