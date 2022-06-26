import React from "react";
import { Link } from "react-awesome-slider/dist/navigation";

const LinkItem = ({ slug, slugParam, text, className = "" }) => {
  return (
    <Link
      className={`${slug === slugParam ? "selected" : null}`}
      href={`/${slugParam}`}
    >
      <span
        className={`text-gray-300 focus:bg-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium ${className}`}
      >
        {text}
      </span>
    </Link>
  );
};

export default LinkItem;
