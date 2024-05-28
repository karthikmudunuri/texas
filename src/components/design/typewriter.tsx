"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import {AccordionDemoabout, AccordionDemoapplication, AccordionDemoaus, AccordionDemocan, AccordionDemoire, AccordionDemonewz, AccordionDemouk,AccordionDemousa} from "./accordination"


export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Study",
      className: "text-white dark:text-blue-500",

    },
    {
      text: "in",
      className: "text-white dark:text-blue-500",
    },
    {
      text: "USA",
      className: "text-white dark:text-blue-500",
    },
    
    {
      text: "FAQ's",
      className: "text-blue-500 dark:text-violet-500",
    },
  ];
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center overflow-x-hidden">
  {/* Radial gradient for the container to give a faded look */}
  <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
  <div className="text-4xl sm:text-7xl -mt-32 relative bg-clip-text font-sans font-bold mb-8">
    <TypewriterEffectSmooth words={words}  /> {/* Set startFromBeginning prop to true */}
  </div>
  <AccordionDemousa/>
</div>

  );
}

export function TypewriterEffectSmoothuk() {
    const wordsuk = [
      {
        text: "Study",
        className: "text-white dark:text-blue-500",
  
      },
      {
        text: "in",
        className: "text-white dark:text-blue-500",
      },
      {
        text: "UK",
        className: "text-white dark:text-blue-500",
      },
      
      {
        text: "FAQ's",
        className: "text-blue-500 dark:text-violet-500",
      },
    ];
    return (
      <div className="h-[50rem] w-full dark:bg-black bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center overflow-x-hidden">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
    <div className="text-4xl sm:text-7xl -mt-32 relative bg-clip-text font-sans font-bold mb-8">
      <TypewriterEffectSmooth words={wordsuk}  /> {/* Set startFromBeginning prop to true */}
    </div>
    <AccordionDemouk/>
  </div>
  
    );
  }
  


export function TypewriterEffectSmoothaus() {
    const wordsaus = [
      {
        text: "Study",
        className: "text-white dark:text-blue-500",
  
      },
      {
        text: "in",
        className: "text-white dark:text-blue-500",
      },
      {
        text: "Australia",
        className: "text-white dark:text-blue-500",
      },
      
      {
        text: "FAQ's",
        className: "text-blue-500 dark:text-violet-500",
      },
    ];
    return (
      <div className="h-[50rem] w-full dark:bg-black bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center overflow-x-hidden">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
    <div className="text-4xl sm:text-7xl -mt-32 relative bg-clip-text font-sans font-bold mb-8">
      <TypewriterEffectSmooth words={wordsaus}  /> {/* Set startFromBeginning prop to true */}
    </div>
    <AccordionDemoaus/>
  </div>
  
    );
  }



  export function TypewriterEffectSmoothcan() {
    const wordscan = [
      {
        text: "Study",
        className: "text-white dark:text-blue-500",
  
      },
      {
        text: "in",
        className: "text-white dark:text-blue-500",
      },
      {
        text: "Canada",
        className: "text-white dark:text-blue-500",
      },
      
      {
        text: "FAQ's",
        className: "text-blue-500 dark:text-violet-500",
      },
    ];
    return (
      <div className="h-[50rem] w-full dark:bg-black bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center overflow-x-hidden">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
    <div className="text-4xl sm:text-7xl -mt-32 relative bg-clip-text font-sans font-bold mb-8">
      <TypewriterEffectSmooth words={wordscan}  /> {/* Set startFromBeginning prop to true */}
    </div>
    <AccordionDemocan/>
  </div>
  
    );
  }



  export function TypewriterEffectSmoothire() {
    const wordsire = [
      {
        text: "Study",
        className: "text-white dark:text-blue-500",
  
      },
      {
        text: "in",
        className: "text-white dark:text-blue-500",
      },
      {
        text: "Ireland",
        className: "text-white dark:text-blue-500",
      },
      
      {
        text: "FAQ's",
        className: "text-blue-500 dark:text-violet-500",
      },
    ];
    return (
      <div className="h-[50rem] w-full dark:bg-black bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center overflow-x-hidden">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
    <div className="text-4xl sm:text-7xl -mt-32 relative bg-clip-text font-sans font-bold mb-8">
      <TypewriterEffectSmooth words={wordsire}  /> {/* Set startFromBeginning prop to true */}
    </div>
    <AccordionDemoire/>
  </div>
  
    );
  }



  export function TypewriterEffectSmoothnewz() {
    const wordsnew = [
      {
        text: "Study",
        className: "text-white dark:text-blue-500",
  
      },
      {
        text: "in",
        className: "text-white dark:text-blue-500",
      },
      {
        text: "Ireland",
        className: "text-white dark:text-blue-500",
      },
      
      {
        text: "FAQ's",
        className: "text-blue-500 dark:text-violet-500",
      },
    ];
    return (
      <div className="h-[50rem] w-full dark:bg-black bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center overflow-x-hidden">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
    <div className="text-4xl sm:text-7xl -mt-32 relative bg-clip-text font-sans font-bold mb-8">
      <TypewriterEffectSmooth words={wordsnew}  /> {/* Set startFromBeginning prop to true */}
    </div>
    <AccordionDemonewz/>
  </div>
  
    );
  }

  export function TypewriterEffectApplication() {
    const wordsnews = [
      {
        text: "Common",
        className: "text-white dark:text-blue-500",
  
      },
      {
        text: "Questions",
        className: "text-white dark:text-blue-500",
      },
      {
        text: "For",
        className: "text-white dark:text-blue-500",
      },
      
      {
        text: "Applications",
        className: "text-blue-500 dark:text-violet-500",
      },
    ];
    return (
      <div className="h-full w-full dark:bg-black bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center overflow-x-hidden">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
    <div className="text-4xl sm:text-7xl -mt-32 relative bg-clip-text font-sans font-bold mb-8">
      <TypewriterEffectSmooth words={wordsnews}  /> {/* Set startFromBeginning prop to true */}
    </div>
    <AccordionDemoapplication/>
  </div>
  
    );
  }

  export function TypewriterEffectabout() {
    const wordsnes = [
      {
        text: "Texas",
        className: "text-white dark:text-blue-500",
  
      },
      {
        text: "Overseas",
        className: "text-white dark:text-blue-500",
      },
      {
        text: "Education",
        className: "text-white dark:text-blue-500",
      },
      
      {
        text: "FAQ's?",
        className: "text-blue-500 dark:text-violet-500",
      },
    ];
    return (
      <div className="h-[60rem] w-full dark:bg-black bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center overflow-x-hidden">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
    <div className="text-4xl sm:text-7xl -mt-32 relative bg-clip-text font-sans font-bold mb-8">
      <TypewriterEffectSmooth words={wordsnes}  /> {/* Set startFromBeginning prop to true */}
    </div>
    <AccordionDemoabout/>
  </div>
    );
  }