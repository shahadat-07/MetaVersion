import React from "react";

const PageLayout = ({ children, className = "", style= "" }) => {
  return (
    <div
    style={{style}}
      className={`container mx-auto px-16 3xl:px-0 w-[100vw] h-[90vh] 3xl:max-w-[2000px] ${className}`}
    >
      {children}
    </div>
  );
};

export default PageLayout;
