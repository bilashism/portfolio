import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [state, handleSubmit] = useForm("xgpobrwm");

  if (state.succeeded) {
    toast.success("Thanks for getting in touch!");
  }

  return (
    <section className="py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="">
            <h2 className="text-2xl lg:text-3xl mb-10">Contact me</h2>
            <div className="py-3">
              <div className="flex flex-col gap-4">
                <div className="">
                  <p className="">
                    Feel free to contact me on any platform you prefer. I
                    believe that getting in touch is a great way to build strong
                    relationship. Looking forward to getting your response.
                  </p>
                </div>
                <div className=" pt-3 pb-4">
                  <div className="flex gap-4">
                    <span className="inline-flex">
                      <svg viewBox="0 0 512 512" className="w-10 h-10">
                        <path
                          className="location-pin"
                          d="M256 0C156.698 0 76 80.7 76 180c0 33.6 9.302 66.301 27.001 94.501l140.797 230.414c2.402 3.9 6.002 6.301 10.203 6.901 5.698.899 12.001-1.5 15.3-7.2l141.2-232.516C427.299 244.501 436 212.401 436 180 436 80.7 355.302 0 256 0zm0 270c-50.398 0-90-40.8-90-90 0-49.501 40.499-90 90-90s90 40.499 90 90c0 48.9-39.001 90-90 90z"></path>
                        <path
                          className="location-pin"
                          d="M256 0v90c49.501 0 90 40.499 90 90 0 48.9-39.001 90-90 90v241.991c5.119.119 10.383-2.335 13.3-7.375L410.5 272.1c16.799-27.599 25.5-59.699 25.5-92.1C436 80.7 355.302 0 256 0z"></path>
                      </svg>{" "}
                    </span>
                    <span className="text align-self-end">
                      Jessore 7470, Khulna, Bangladesh
                    </span>
                  </div>
                  <div className="flex  gap-4 py-1">
                    <span className="inline-flex">
                      <svg viewBox="0 0 512 512" className="w-10 h-10">
                        <path
                          className=""
                          d="M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0z"></path>
                        <path
                          className="fill-white"
                          d="M405.024 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744-3.776 4.352-7.36 7.68-11.136 12.352-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z"></path>
                      </svg>{" "}
                    </span>
                    <span className="text align-self-end">
                      <a
                        href="https://api.whatsapp.com/send?phone=8801969848450&amp;text=Hi%20!!!"
                        title="Click to chat"
                        target="_blank"
                        rel="noopener"
                        className="text-decoration-none">
                        WhatsApp
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="inline-flex">
                      <svg viewBox="0 0 512 512" className="w-10 h-10">
                        <path
                          className="email-1"
                          d="M480 80H32C14.368 80 0 94.368 0 112v288c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V112c0-17.632-14.336-32-32-32z"></path>
                        <path
                          className="email-2 fill-white"
                          d="M432 144h-96c-8.832 0-16 7.168-16 16v96c0 8.832 7.168 16 16 16h96c8.832 0 16-7.168 16-16v-96c0-8.832-7.168-16-16-16zM272 368H80c-8.832 0-16-7.168-16-16s7.168-16 16-16h192c8.832 0 16 7.168 16 16s-7.168 16-16 16zm-64-64H80c-8.832 0-16-7.168-16-16s7.168-16 16-16h128c8.832 0 16 7.168 16 16s-7.168 16-16 16z"></path>
                      </svg>{" "}
                    </span>
                    <span className="text align-self-end">
                      <a
                        href="mailto:bilashism@gmail.com"
                        title="Click to send a mail"
                        target="_blank"
                        rel="noopener"
                        className="text-decoration-none">
                        bilashism@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <h2 className="text-center pt-2 pb-1 mb-4">Available on</h2>
              <div className="flex flex-wrap gap-4 lg:gap-7 justify-center text-center">
                <div className="">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/bilashism/"
                    rel="noopener"
                    title="LinkedIn"
                    aria-label="linkedin">
                    <svg viewBox="0 0 24 24" className="w-10 h-10">
                      <path
                        className="linkedin"
                        d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z"></path>
                    </svg>
                  </a>
                </div>
                <div className="">
                  <a
                    target="_blank"
                    href="https://twitter.com/bilashism"
                    rel="noopener"
                    title="Twitter"
                    aria-label="twitter">
                    <svg viewBox="0 0 512 512" className="w-10 h-10">
                      <path
                        className="twitter"
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path>
                    </svg>
                  </a>
                </div>
                <div className="">
                  <a
                    target="_blank"
                    href="https://github.com/bilashism"
                    rel="noopener"
                    title="Github"
                    aria-label="github">
                    <svg viewBox="0 0 512 512" className="w-10 h-10">
                      <path
                        className="github"
                        d="M255.968 5.329C114.624 5.329 0 120.401 0 262.353c0 113.536 73.344 209.856 175.104 243.872 12.8 2.368 17.472-5.568 17.472-12.384 0-6.112-.224-22.272-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464-11.616-29.696-28.416-37.6-28.416-37.6-23.264-15.936 1.728-15.616 1.728-15.616 25.696 1.824 39.2 26.496 39.2 26.496 22.848 39.264 59.936 27.936 74.528 21.344 2.304-16.608 8.928-27.936 16.256-34.368-56.832-6.496-116.608-28.544-116.608-127.008 0-28.064 9.984-51.008 26.368-68.992-2.656-6.496-11.424-32.64 2.496-68 0 0 21.504-6.912 70.4 26.336 20.416-5.696 42.304-8.544 64.096-8.64 21.728.128 43.648 2.944 64.096 8.672 48.864-33.248 70.336-26.336 70.336-26.336 13.952 35.392 5.184 61.504 2.56 68 16.416 17.984 26.304 40.928 26.304 68.992 0 98.72-59.84 120.448-116.864 126.816 9.184 7.936 17.376 23.616 17.376 47.584 0 34.368-.32 62.08-.32 70.496 0 6.88 4.608 14.88 17.6 12.352C438.72 472.145 512 375.857 512 262.353 512 120.401 397.376 5.329 255.968 5.329z"></path>
                    </svg>
                  </a>
                </div>

                <div className="">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCmCNzt0fSS6eMgOW1hknbEg"
                    rel="noopener"
                    title="Youtube"
                    aria-label="Youtube">
                    <svg viewBox="0 -77 512.002 512" className="w-10 h-10">
                      <path
                        className="yt-1"
                        d="M501.453 56.094c-5.902-21.934-23.195-39.223-45.125-45.13C416.262 0 255.996 0 255.996 0S95.734 0 55.668 10.547C34.16 16.449 16.445 34.164 10.543 56.094 0 96.156 0 179.242 0 179.242s0 83.504 10.543 123.149c5.906 21.93 23.195 39.222 45.129 45.129C96.156 358.484 256 358.484 256 358.484s160.262 0 200.328-10.546c21.934-5.903 39.223-23.196 45.129-45.125C512 262.745 512 179.663 512 179.663s.422-83.508-10.547-123.57zm0 0"></path>
                      <path
                        className="yt-2 fill-white"
                        d="M204.969 256l133.27-76.758-133.27-76.758zm0 0"></path>
                    </svg>
                  </a>
                </div>
                <div className="">
                  <a
                    target="_blank"
                    href="https://codepen.io/bilashism/"
                    rel="noopener"
                    title="Codepen"
                    aria-label="codepen">
                    <svg viewBox="0 0 24 24" className="w-10 h-10">
                      <path
                        className="codepen"
                        d="M24 7.598c-.044-.264-.08-.47-.36-.641C12.191.166 12.353-.34 11.61.109 2.933 5.503.518 6.706.171 7.126-.144 7.449 0 7.944 0 15.424c-.021.851 7.743 5.462 11.519 8.404.333.237.752.199 1.003-.029C23.746 15.843 24.019 16.163 24 15.424c0 0-.012-7.927 0-7.826zm-1.5 6.491l-3.876-2.359L22.5 9.033zm-5.277-3.212L12.75 8.155v-6.07l9.126 5.555zM12 14.51l-3.876-2.697L12 9.454l3.876 2.359zm-.75-12.426v6.074a537.339 537.339 0 01-4.451 2.734L2.124 7.64zm-5.857 9.658c-1.874 1.127-3.098 1.843-3.893 2.32V9.033zm1.33.924l4.527 3.149v5.999l-9.126-6.349zm6.027 9.149v-5.999l4.527-3.149 4.599 2.799z"></path>
                    </svg>
                  </a>
                </div>
                <div className="">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/Bilashism"
                    rel="noopener"
                    title="Facebook"
                    aria-label="Facebook">
                    <svg viewBox="0 0 512 512" className="w-10 h-10">
                      <path
                        className="facebook"
                        d="M384 176h-96v-64c0-17.664 14.336-32 32-32h32V0h-64c-53.024 0-96 42.976-96 96v80h-64v80h64v256h96V256h64l32-80z"></path>
                    </svg>
                  </a>
                </div>
                <div className="">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/bilashism/"
                    rel="noopener"
                    title="Instagram"
                    aria-label="Instagram">
                    <svg viewBox="0 0 512 512" className="w-10 h-10">
                      <defs>
                        <linearGradient
                          id="a"
                          gradientUnits="userSpaceOnUse"
                          x1="42.966"
                          x2="469.034"
                          y1="469.03"
                          y2="42.962">
                          <stop offset="0" stopColor="#ffd600"></stop>
                          <stop offset=".5" stopColor="#ff0100"></stop>
                          <stop offset="1" stopColor="#d800b9"></stop>
                        </linearGradient>
                        <linearGradient
                          id="b"
                          gradientUnits="userSpaceOnUse"
                          x1="163.043"
                          x2="348.954"
                          y1="348.954"
                          y2="163.043">
                          <stop offset="0" stopColor="#ff6400"></stop>
                          <stop offset=".5" stopColor="#ff0100"></stop>
                          <stop offset="1" stopColor="#fd0056"></stop>
                        </linearGradient>
                        <linearGradient
                          id="c"
                          gradientUnits="userSpaceOnUse"
                          x1="370.929"
                          x2="414.373"
                          y1="141.068"
                          y2="97.624">
                          <stop offset="0" stopColor="#f30072"></stop>
                          <stop offset="1" stopColor="#e50097"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        className="instagram-1"
                        d="M510.46 150.453c-1.245-27.25-5.573-45.86-11.901-62.14a125.466 125.466 0 00-29.528-45.344 125.503 125.503 0 00-45.344-29.535c-16.285-6.325-34.89-10.649-62.14-11.887C334.247.297 325.523 0 256 0s-78.246.297-105.547 1.54c-27.25 1.245-45.855 5.573-62.14 11.901A125.466 125.466 0 0042.968 42.97a125.488 125.488 0 00-29.535 45.34c-6.325 16.285-10.649 34.894-11.887 62.14C.297 177.754 0 186.473 0 255.996c0 69.527.297 78.25 1.547 105.55 1.242 27.247 5.57 45.856 11.898 62.142a125.451 125.451 0 0029.528 45.34 125.433 125.433 0 0045.343 29.527c16.282 6.332 34.891 10.656 62.141 11.902 27.305 1.246 36.023 1.54 105.547 1.54 69.523 0 78.246-.294 105.547-1.54 27.25-1.246 45.855-5.57 62.14-11.902a130.879 130.879 0 0074.868-74.868c6.332-16.285 10.656-34.894 11.902-62.14C511.703 334.242 512 325.523 512 256c0-69.527-.297-78.246-1.54-105.547zM464.38 359.45c-1.137 24.961-5.309 38.516-8.813 47.535a84.775 84.775 0 01-48.586 48.586c-9.02 3.504-22.574 7.676-47.535 8.813-26.988 1.234-35.086 1.492-103.445 1.492-68.363 0-76.457-.258-103.45-1.492-24.956-1.137-38.51-5.309-47.534-8.813a79.336 79.336 0 01-29.434-19.152 79.305 79.305 0 01-19.152-29.434c-3.504-9.02-7.676-22.574-8.813-47.535-1.23-26.992-1.492-35.09-1.492-103.445 0-68.36.262-76.453 1.492-103.45 1.14-24.96 5.309-38.515 8.813-47.534a79.367 79.367 0 0119.152-29.438 79.261 79.261 0 0129.438-19.148c9.02-3.508 22.574-7.676 47.535-8.817 26.992-1.23 35.09-1.492 103.445-1.492h-.004c68.356 0 76.453.262 103.45 1.496 24.96 1.137 38.511 5.309 47.534 8.813a79.375 79.375 0 0129.434 19.148 79.261 79.261 0 0119.149 29.438c3.507 9.02 7.68 22.574 8.816 47.535 1.23 26.992 1.492 35.09 1.492 103.445 0 68.36-.258 76.453-1.492 103.45zm0 0"></path>
                      <path
                        className="instagram-2"
                        d="M255.996 124.54c-72.601 0-131.457 58.858-131.457 131.46s58.856 131.457 131.457 131.457c72.606 0 131.461-58.855 131.461-131.457s-58.855-131.46-131.46-131.46zm0 216.792c-47.125-.004-85.332-38.207-85.328-85.336 0-47.125 38.203-85.332 85.332-85.332 47.129.004 85.332 38.207 85.332 85.332 0 47.129-38.207 85.336-85.336 85.336zm0 0"></path>
                      <path
                        className="instagram-3"
                        d="M423.371 119.348c0 16.965-13.754 30.718-30.719 30.718-16.968 0-30.722-13.754-30.722-30.718 0-16.97 13.754-30.723 30.722-30.723 16.965 0 30.72 13.754 30.72 30.723zm0 0"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative z-0">
              <input
                type="text"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                name="name"
                required
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                name="email"
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                id="subject"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                name="subject"
                required
              />
              <label
                htmlFor="subject"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Subject
              </label>
            </div>
            <div className="relative z-0">
              <textarea
                type="text"
                id="message"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                name="message"></textarea>
              <label
                htmlFor="message"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Message
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={state.submitting}
                className={`${
                  state.submitting ? "cursor-not-allowed" : ""
                } capitalize border-2 border-purple-300 inline-flex items-center justify-center text-lg py-2 px-4 text-center bg-white font-bold  hover:border-purple-600 hover:text-purple-600 shadow-sm transition-colors`}>
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
