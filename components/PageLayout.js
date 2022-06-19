import React from "react";

const PageLayout = ({ children, className = "" }) => {
  return <div className={`w-[100vw] h-[80vh] ${className}`}>{children}</div>;
};

export default PageLayout;
