import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-48 items-center min-h-screen py-8">
          <div className="">
            <h2 className="text-2xl lg:text-3xl">About me</h2>
            <div className="flex flex-col gap-4">
              <p className="pt-4 ">
                Focusing on client satisfaction and providing quality service. I
                know that every single details matters for your business &amp; I
                pay close attention on details. So that, you can be successful.
              </p>
              <p className="pt-1 ">
                As a developer, I know how to build your website so that it can
                run across all devices &amp; platforms and optimize it for the
                best performance.
              </p>
              <div className="grid lg:grid-cols-2 gap-4 py-2">
                <div className="">
                  <div>
                    <span className="">Name:</span> Md. Taifuzzaman Bilash
                  </div>
                  <div>
                    <span className="">Email:</span>{" "}
                    <a className="btn p-0" href="mailto:bilashism@gmail.com">
                      bilashism@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="">Country:</span> Bangladesh
                  </div>
                </div>
                <div className="">
                  <div>
                    <span className="">Timezone:</span> UTC +6.00
                  </div>
                  <div>
                    <span className="">Response Time:</span> ~ 1 hour
                  </div>
                  <div className="">
                    <span className="">✨</span> Available
                  </div>
                </div>
              </div>
              <div className="py-3 ">
                <button className="capitalize border-2 border-purple-300 inline-flex items-center justify-center text-lg py-2 px-4 text-center bg-white font-bold  hover:border-purple-600 hover:text-purple-600 shadow-sm transition-colors">
                  contact me
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              initialSlide={0}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                clickable: true
              }}
              modules={[Pagination, Autoplay]}
              className="">
              {/* expertise */}
              <SwiperSlide className="pb-10 w-full">
                <div className="">
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
                    React
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 w-3/4"></div>
                  </div>

                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
                    JavaScript
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 w-3/4"></div>
                  </div>
                </div>
              </SwiperSlide>
              {/* comfortable */}
              <SwiperSlide className="pb-10">
                <div className="">
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
                    Node.js
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 w-3/4"></div>
                  </div>

                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
                    Express.js
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 w-3/4"></div>
                  </div>
                </div>
              </SwiperSlide>
              {/* familiar */}
              <SwiperSlide className="pb-10">
                <div className="">
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
                    Typescript
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 w-3/4"></div>
                  </div>

                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
                    Redux
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 w-3/4"></div>
                  </div>
                </div>
              </SwiperSlide>
              {/* tools */}
              <SwiperSlide className="pb-10">
                <div className="">
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
                    Github
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 w-3/4"></div>
                  </div>

                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
                    Vite.js
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 w-3/4"></div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
