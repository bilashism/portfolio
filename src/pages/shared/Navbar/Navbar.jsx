import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBlog, FaHome } from "react-icons/fa";
import { MdOutlineWork, MdOutlineContactPage } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";

const Navbar = () => {
  const [show, setShow] = useState(null);

  const logoItem = (
    <Link to="/" className="group">
      <BiCodeCurly className="fill-indigo-700 w-16 h-16 group-hover:fill-indigo-400 transition-colors duration-300" />
    </Link>
  );

  const menuItems = (
    <>
      <li className="">
        <Link to={"/"} className="cursor-pointer flex items-center">
          <FaHome className="text-indigo-700 w-6 h-6 xl:hidden" />
          <span className=" hover:text-indigo-700 xl:text-base text-base ml-3">
            home
          </span>
        </Link>
      </li>
      <li className="">
        <Link to={"/projects"} className="cursor-pointer flex items-center">
          <MdOutlineWork className="text-indigo-700 w-6 h-6 xl:hidden" />
          <span className=" hover:text-indigo-700 xl:text-base text-base ml-3">
            projects
          </span>
        </Link>
      </li>
      <li className="">
        <a href="#contact" className="cursor-pointer flex items-center">
          <MdOutlineContactPage className="text-indigo-700 w-6 h-6 xl:hidden" />
          <span className=" hover:text-indigo-700 xl:text-base text-base ml-3">
            contact
          </span>
        </a>
      </li>
      <li className="">
        <Link to={"/blogs"} className="cursor-pointer flex items-center">
          <FaBlog className="text-indigo-700 w-6 h-6 xl:hidden" />
          <span className=" hover:text-indigo-700 xl:text-base text-base ml-3">
            blogs
          </span>
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 w-full isolate z-20">
      <div className="bg-gray-50 h-full w-full">
        {/* Code block starts */}
        <nav className="w-full mx-auto hidden xl:block bg-gray-50 shadow">
          <div className="container px-4 justify-between h-16 flex items-center lg:items-stretch mx-auto">
            <div className="h-full flex items-center lg:w-full">
              <div className="mr-10 flex items-center">{logoItem}</div>
              <ul className="pr-12 lg:pr-0 xl:flex items-center h-full hidden capitalize lg:w-full lg:justify-end">
                {menuItems}
              </ul>
            </div>
            <div className="h-full xl:flex items-center justify-end hidden">
              <div className="w-full h-full flex items-center">
                <div className="w-full h-full flex items-center"></div>
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        <nav>
          <div className="p-4 w-full flex xl:hidden justify-between items-center bg-gray-50 sticky top-0 z-40 shadow">
            <div className="">{logoItem}</div>
            {/* <div> */}
            <div id="menu" className="" onClick={() => setShow(!show)}>
              {show ? (
                " "
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={4} y1={6} x2={20} y2={6} />
                  <line x1={4} y1={12} x2={20} y2={12} />
                  <line x1={4} y1={18} x2={20} y2={18} />
                </svg>
              )}
            </div>
            {/* </div> */}
          </div>

          {/*Mobile responsive sidebar*/}
          <div
            className={`fixed xl:hidden w-full h-full transition-transform transform z-40 top-0  ${
              show ? " -translate-x-0 " : "-translate-x-full"
            }`}
            id="mobile-nav">
            <div
              className="bg-indigo-500 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-gray-50 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-4 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-4 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">{logoItem}</div>
                        <div
                          id="cross"
                          className=""
                          onClick={() => setShow(!show)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="py-8 capitalize">{menuItems}</ul>
                  </div>
                  <div className="w-full pt-4">
                    <div className="border-t border-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Sidebar ends */}

        {/* Code block ends */}
      </div>
    </nav>
  );
};

export default Navbar;
