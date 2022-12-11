import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project, isDetailed }) => {
  const {
    _id,
    name,
    description,
    isFeatured,
    links: { website, client, server },
    images: { display },
    featureList,
    technologies
  } = project;

  return (
    <div className="grid grid-cols-12 relative isolate overflow-hidden items-center shadow rounded ">
      <figure className="col-start-1 col-end-[-1] lg:col-end-8 row-start-1 row-end-[-1] bg-teal-300 bg-opacity-25 shadow-lg overflow-hidden h-full">
        <picture className="flex items-center justify-center ">
          <source srcSet={display} />
          <img
            loading="lazy"
            src={display}
            alt={name}
            className="mx-auto scale-150 object-cover object-top origin-top   "
            width="650"
            height="650"
            decoding="async"
            fetchpriority="low"
          />
        </picture>
      </figure>

      <div className="z-0 col-start-1 lg:col-start-7 col-end-[-1] row-start-1 row-end-[-1] lg:pr-4">
        <div className="flex flex-col gap-4 items-end py-4">
          {isFeatured && (
            <p className="bg-purple-400 px-2 py-1 lg:-mr-4">Featured Project</p>
          )}
          <h3 className="text-2xl">
            <a
              href={website ? website : "#"}
              rel="noopener noreferrer"
              target={website ? "_blank" : "_self"}>
              {name}
            </a>
          </h3>
          <div className="w-full flex flex-col gap-1 bg-slate-300 bg-opacity-90 rounded-lg shadow  p-4">
            <p className="">{description}</p>
            <ul className="flex flex-col list-disc pl-4 ">
              {featureList.map((item, i) => {
                switch (isDetailed) {
                  case true: {
                    break;
                  }

                  default: {
                    if (i >= 3) return;
                    break;
                  }
                }

                return <li key={`item-${i}`}>{item}</li>;
              })}
            </ul>

            {isDetailed || (
              <div className="self-end inline-flex  p-px rounded bg-gradient-to-r from-rose-500 to-purple-500 hover:from-purple-500 hover:to-rose-500 transition-all group">
                <Link
                  to={`/projects/${_id}`}
                  className="px-6 text-blue-800 bg-white block text-center w-full rounded first-letter:capitalize group-hover:text-purple-600">
                  view details
                </Link>
              </div>
            )}
          </div>
          <ul className="flex flex-wrap gap-2 items-center justify-center lg:justify-end text-sm w-full">
            {technologies?.map((item, i) => (
              <li key={`item-${i}`} className="bg-purple-200 px-2 py-1">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-end w-full">
            <a
              href={website}
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target={website ? "_blank" : "_self"}>
              🌍 Website
            </a>
            <a
              href={client ? client : "#"}
              aria-label="GitHub client Link"
              rel="noopener noreferrer"
              target={client ? "_blank" : "_self"}>
              🎨 Client
            </a>
            <a
              href={server ? server : "#"}
              aria-label="GitHub server Link"
              rel="noopener noreferrer"
              target={server ? "_blank" : "_self"}>
              📦 Server
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
