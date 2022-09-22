import React from "react";

const BreadCrumbs = () => {
  return (
    <nav
      className="text-breadCrumbs ml-12 my-4 hidden md:block"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center">
        <li className="inline-flex items-center">
          <a href="/">Home</a>
        </li>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
        <li className="inline-flex items-center underline" aria-current="page">
          <a href="/">Reports & insights</a>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
