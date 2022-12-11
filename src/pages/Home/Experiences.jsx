import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Experiences = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl mb-10 lg:mb-20">Experiences</h2>
        <div className="min-h-[50vh]">
          <Tabs
            className="grid gap-8 lg:gap-12 lg:grid-cols-12 max-w-2xl mx-auto "
            selectedTabClassName="underline text-purple-600 outline-none">
            <TabList className="lg:col-span-4 flex flex-wrap lg:flex-col gap-2">
              <Tab className="cursor-pointer">Tutor Lim</Tab>
              <Tab className="cursor-pointer">LEDP by ICT Division</Tab>
            </TabList>

            <div className="lg:col-span-8">
              <TabPanel>
                <h3>
                  <span className="text-purple-600 font-bold">
                    Web Developer
                  </span>
                  <span class="">
                    &nbsp;@&nbsp;
                    <a
                      href="#"
                      class=""
                      rel="noopener noreferrer"
                      target="_blank">
                      Tutor Lim
                    </a>
                  </span>
                </h3>
                <p class="mb-2">Sep 2021 - Dec 2022</p>
                <p className="">
                  To create new features, and pages and maintain websites using
                  Hubspot and Squarespace. Daily work includes Javascript,
                  GitHub, Slack, Jira, and Google Apps Script. Learned frontend
                  customization of a Splunk app.
                </p>
              </TabPanel>
              <TabPanel>
                <h3>
                  <span className="text-purple-600 font-bold">
                    Trainer - Web Development
                  </span>
                  <span class="">
                    &nbsp;@&nbsp;
                    <a
                      href="#"
                      class=""
                      rel="noopener noreferrer"
                      target="_blank">
                      LEDP by ICT Division
                    </a>
                  </span>
                </h3>
                <p class="mb-2">Sep - Nov 2020</p>
                <p className="">
                  I was a trainer for the web development section with 38
                  students. My job was to guide the students to learn
                  JavaScript, jQuery, Bootstrap, HTML, CSS, etc.
                </p>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
