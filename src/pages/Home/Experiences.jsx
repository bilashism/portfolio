import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

const Experiences = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl mb-10 lg:mb-20">Experiences</h2>
        <div className="">
          <Tabs
            className="grid gap-8 lg:gap-12 lg:grid-cols-12 max-w-2xl mx-auto "
            selectedTabClassName="underline text-purple-600 outline-none">
            <TabList className="lg:col-span-3 flex flex-wrap lg:flex-col gap-2">
              <Tab className="cursor-pointer">Title 1</Tab>
              <Tab className="cursor-pointer">Title 2</Tab>
            </TabList>

            <div className="lg:col-span-6">
              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
