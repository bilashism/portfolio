import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.webp";
import { APP_NAME } from "../../../utilities/utilities";
import Contact from "../../Home/Contact";

const Footer = () => {
  return (
    <>
      <Contact />
      <footer className="">
        <div className="container mx-auto px-4">
          <div className="p-6 bg-gray-100  md:flex md:items-center md:justify-between">
            <p className="text-2xl text-gray-500 justify-center sm:text-center flex flex-wrap w-full">
              © {new Date().getFullYear()}{" "}
              <Link
                to="/"
                className="text-center inline-flex items-center mx-1 gap-1">
                <img
                  src={logo}
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  alt={`${APP_NAME} logo`}
                />
                <span className="flex gap-1 text-2xl">{APP_NAME}</span>
              </Link>
              <span className="">all rights reserved.</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
