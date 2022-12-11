import React from "react";
import { Link } from "react-router-dom";
import xtraEquipImg from "../../images/xtra-equip.png";

const FeaturedProjects = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl mb-10 lg:mb-20">
          Some things I've built
        </h2>
        <div className="grid grid-cols-1 items-center gap-10 mb-20">
          <div className="grid grid-cols-12 relative isolate overflow-hidden items-center">
            <figure className="col-start-1 col-end-[-1] lg:col-end-8 row-start-1 row-end-[-1] bg-teal-300 bg-opacity-25 shadow-lg overflow-hidden">
              <picture className="flex items-center justify-center ">
                <source srcSet={xtraEquipImg} />
                <img
                  loading="lazy"
                  src={xtraEquipImg}
                  alt="bilashism, bilash"
                  className="mx-auto scale-150 object-cover object-top origin-top   "
                  width="650"
                  height="650"
                  decoding="async"
                  fetchpriority="low"
                />
              </picture>
            </figure>
            <div className="z-0 col-start-1 lg:col-start-7 col-end-[-1] row-start-1 row-end-[-1] ">
              <div className="flex flex-col gap-4 items-end ">
                <p className="bg-purple-400 px-2 py-1 ">Featured Project</p>
                <h3 className="text-2xl">
                  <a
                    href="https://xtra-equip.web.app"
                    rel="noopener noreferrer"
                    target="_blank">
                    Xtra Equip
                  </a>
                </h3>
                <div className="w-full flex flex-col gap-1 bg-slate-300 bg-opacity-80 rounded-lg shadow  p-4">
                  <p className="">
                    A place to buy and sell all the used fitness equipment.
                  </p>
                  <ul className="flex flex-col list-disc pl-4 ">
                    <li>Role-based user login and registration</li>
                    <li>Protected routes and Dashboard based on user roles</li>
                    <li>
                      Sellers can manage their products, buyers can buy and
                      admin can manage buyers and sellers
                    </li>
                  </ul>
                </div>
                <ul className="flex flex-wrap gap-2 items-center justify-end text-sm w-full">
                  <li className="bg-purple-200 px-2 py-1"> Authentication</li>
                  <li className="bg-purple-200 px-2 py-1"> React router dom</li>
                  <li className="bg-purple-200 px-2 py-1"> tanstack query</li>
                  <li className="bg-purple-200 px-2 py-1"> react hook from </li>
                  <li className="bg-purple-200 px-2 py-1">
                    {" "}
                    react date picker
                  </li>
                  <li className="bg-purple-200 px-2 py-1"> JWT</li>
                  <li className="bg-purple-200 px-2 py-1"> Axios</li>
                </ul>
                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href="https://xtra-equip.web.app"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank">
                    🌍 Website
                  </a>
                  <a
                    href="https://github.com/bilashism/xtra-equip"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank">
                    🎨 Client
                  </a>
                  <a
                    href="https://github.com/bilashism/xtra-equip-server"
                    aria-label="External Link"
                    className="external"
                    rel="noopener noreferrer"
                    target="_blank">
                    📦 Server
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded bg-gradient-to-r from-rose-500 to-purple-500 hover:from-purple-500 hover:to-rose-500 transition-all ">
            <Link
              to="/projects"
              className="px-6 py-2 text-blue-800 bg-white block text-center w-full first-letter:uppercase">
              view all projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
