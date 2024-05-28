"use client";

import { Tabs } from "../ui/tabb";
import { AccordionDemoEntry, AccordionDemoPrograms, AccordionDemoapplication, AccordionDemovisa } from "./accordination";
import { TextGenerateEffecttt } from "../ui/text-generate-effect";

const words = `Common Questions`

export function TabsDemo() {
    
  const tabs = [
    {
      title: "Application",
      value: "Application",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-10">Application</p>
          <AccordionDemoapplication/>
        </div>
      ),
    },
    {
      title: "Entry Requirements",
      value: "Entry Requirements",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-10">Entry Requirements</p>
          <AccordionDemoEntry/>
        </div>
      ),
    },
    {
      title: "About Programs and Classes",
      value: "About Programs and Classes",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-10">About Programs and Classes</p>
          <AccordionDemoPrograms/>
        </div>
      ),
    },
    {
      title: "About Visas",
      value: "About Visas",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-10">About Visas</p>
          <AccordionDemovisa/>
        </div>
      ),
    },
   
  ];

  return (
   
    <div className="h-[40rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        <TextGenerateEffecttt words={words} className="mb-8 ml-48" />
      <Tabs tabs={tabs} />
    </div>
  );
}


