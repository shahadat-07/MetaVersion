import React from "react";

const PageLayout = ({ children, className = "" }) => {
  return (
    <div
      className={`container mx-auto px-10 3xl:px-0 w-[100vw] h-[80vh] ${className}`}
    >
      {children}
    </div>
  );
};

export default PageLayout;
