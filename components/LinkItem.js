import React from "react";
import { Link } from "react-awesome-slider/dist/navigation";

const LinkItem = ({ slug, slugParam, text, className = "" }) => {
  return (
    <Link
      className={`${slug === slugParam ? "selected bg-gray-700 rounded-md" : null}`}
      href={`/${slugParam}`}
    >
      <span
        className={`text-white hover:bg-gray-800 rounded-md block px-3 py-2 font-medium ${className}`}
      >
        {text}
      </span>
    </Link>
  );
};

export default LinkItem;
