import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import avatarImg from "../../images/avater-up-640.webp";

const Header = () => {
  return (
    <header className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 items-center">
          <figure className="mx-auto text-center relative">
            <picture className="max-w-lg flex items-center justify-center">
              <source srcSet={avatarImg} />
              <img
                loading="lazy"
                src={avatarImg}
                alt="bilashism, bilash"
                className=" mx-auto"
                width="650"
                height="650"
                decoding="async"
                fetchpriority="low"
              />
            </picture>
          </figure>
          <article className="flex flex-col gap-4">
            <h1 className="text-2xl lg:text-4xl">
              <span className="text-purple-600">Hi!</span> I'm Taifuzzaman
              Bilash
            </h1>
            <div className="text-purple-600 text-xl">
              <Typewriter
                options={{
                  strings: [
                    "Front-End Web Developer",
                    "I am creative",
                    "MERN Stack Developer",
                    "I love to develop for the web"
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
            </div>
            <p className="text-lg">
              Delivering pixel-perfect and well-performant websites with the
              latest technologies. I've got 3 years of hands-on experience in
              Front-End Web Development.
            </p>

            <div className="flex flex-wrap items-center capitalize gap-4">
              <div className="p-1 rounded bg-gradient-to-r from-rose-500 to-purple-500 hover:from-purple-500 hover:to-rose-500 transition-all">
                <a
                  href="https://drive.google.com/u/0/uc?id=1z3LPQsJtitkVWt1AOm5rg2EOpCfT9C9x&export=download"
                  className="px-6 py-2 text-blue-800 bg-white block text-center w-full">
                  download resume
                </a>
              </div>
              <div className="p-1 rounded bg-gradient-to-r from-rose-500 to-purple-500 hover:from-purple-500 hover:to-rose-500 transition-all">
                <Link
                  to="/projects"
                  className="px-6 py-2 text-blue-800 bg-white block text-center w-full">
                  projects
                </Link>
              </div>
            </div>

            <div className="flex mt-2 flex-wrap gap-4 items-center">
              <a
                className="w-6 h-6"
                target="_blank"
                href="https://twitter.com/bilashism"
                rel="noopener"
                title="Twitter"
                aria-label="twitter">
                <svg viewBox="0 0 512 512">
                  <path
                    className="twitter"
                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path>
                </svg>{" "}
              </a>
              <a
                className="w-6 h-6"
                target="_blank"
                href="https://www.linkedin.com/in/bilashism/"
                rel="noopener"
                title="LinkedIn"
                aria-label="linkedin">
                <svg viewBox="0 0 24 24">
                  <path
                    className="linkedin"
                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z"></path>
                </svg>{" "}
              </a>
              <a
                className="w-6 h-6"
                target="_blank"
                href="https://codepen.io/bilashism/"
                rel="noopener"
                title="Codepen"
                aria-label="codepen">
                <svg viewBox="0 0 24 24">
                  <path
                    className="codepen"
                    d="M24 7.598c-.044-.264-.08-.47-.36-.641C12.191.166 12.353-.34 11.61.109 2.933 5.503.518 6.706.171 7.126-.144 7.449 0 7.944 0 15.424c-.021.851 7.743 5.462 11.519 8.404.333.237.752.199 1.003-.029C23.746 15.843 24.019 16.163 24 15.424c0 0-.012-7.927 0-7.826zm-1.5 6.491l-3.876-2.359L22.5 9.033zm-5.277-3.212L12.75 8.155v-6.07l9.126 5.555zM12 14.51l-3.876-2.697L12 9.454l3.876 2.359zm-.75-12.426v6.074a537.339 537.339 0 01-4.451 2.734L2.124 7.64zm-5.857 9.658c-1.874 1.127-3.098 1.843-3.893 2.32V9.033zm1.33.924l4.527 3.149v5.999l-9.126-6.349zm6.027 9.149v-5.999l4.527-3.149 4.599 2.799z"></path>
                </svg>{" "}
              </a>
              <a
                className="w-8 h-8"
                target="_blank"
                href="https://github.com/bilashism"
                rel="noopener"
                title="Github"
                aria-label="github">
                <svg viewBox="0 0 512 512">
                  <path
                    className="github"
                    d="M255.968 5.329C114.624 5.329 0 120.401 0 262.353c0 113.536 73.344 209.856 175.104 243.872 12.8 2.368 17.472-5.568 17.472-12.384 0-6.112-.224-22.272-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464-11.616-29.696-28.416-37.6-28.416-37.6-23.264-15.936 1.728-15.616 1.728-15.616 25.696 1.824 39.2 26.496 39.2 26.496 22.848 39.264 59.936 27.936 74.528 21.344 2.304-16.608 8.928-27.936 16.256-34.368-56.832-6.496-116.608-28.544-116.608-127.008 0-28.064 9.984-51.008 26.368-68.992-2.656-6.496-11.424-32.64 2.496-68 0 0 21.504-6.912 70.4 26.336 20.416-5.696 42.304-8.544 64.096-8.64 21.728.128 43.648 2.944 64.096 8.672 48.864-33.248 70.336-26.336 70.336-26.336 13.952 35.392 5.184 61.504 2.56 68 16.416 17.984 26.304 40.928 26.304 68.992 0 98.72-59.84 120.448-116.864 126.816 9.184 7.936 17.376 23.616 17.376 47.584 0 34.368-.32 62.08-.32 70.496 0 6.88 4.608 14.88 17.6 12.352C438.72 472.145 512 375.857 512 262.353 512 120.401 397.376 5.329 255.968 5.329z"></path>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </header>
  );
};

export default Header;
