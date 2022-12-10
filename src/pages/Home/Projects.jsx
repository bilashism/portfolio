import React from "react";
import xtraEquipImg from "../../images/xtra-equip.png";

const Projects = () => {
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
            <div class="z-0 col-start-1 lg:col-start-7 col-end-[-1] row-start-1 row-end-[-1] ">
              <div className="flex flex-col gap-4 items-end ">
                <p class="bg-purple-400 px-2 py-1 ">Featured Project</p>
                <h3 class="text-2xl">
                  <a
                    href="https://xtra-equip.web.app"
                    rel="noopener noreferrer"
                    target="_blank">
                    Xtra Equip
                  </a>
                </h3>
                <div class="w-full flex flex-col gap-1 bg-slate-300 bg-opacity-80 rounded-lg shadow  p-4">
                  <p className="">
                    A place to buy and sell all the used fitness equipment.
                  </p>
                  <ul class="flex flex-col list-disc pl-4 ">
                    <li>Role-based user login and registration</li>
                    <li>Protected routes and Dashboard based on user roles</li>
                    <li>
                      Sellers can manage their products, buyers can buy and
                      admin can manage buyers and sellers
                    </li>
                  </ul>
                </div>
                <ul class="flex flex-wrap gap-2 items-center justify-end text-sm w-full">
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
                <div class="flex flex-wrap gap-4 items-center">
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
                    class="external"
                    rel="noopener noreferrer"
                    target="_blank">
                    📦 Server
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
