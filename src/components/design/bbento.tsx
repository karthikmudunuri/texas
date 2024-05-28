"use client";
import { cn } from "../../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TextGenerateEffecttt } from "../ui/text-generate-effect";
import { CheckCircle, Users } from "lucide-react";

const words =`High Performance Student Recruitment Solutions through Texas`
export function BentoGridThirdDemo() {
  return (
    <div>
        <div className="mt-20 mb-6 ml-6 mr-6 p-8">
    <TextGenerateEffecttt words={words} />
        </div>
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-black dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    
        
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-white/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] dark:border-white/[0.2] p-2  items-center space-x-2 bg-black dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <p className="text-xs text-neutral-500">
          Thanks to Texas overseas educational consultancies i had completed my education in overseas.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-black dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          I completed my MS Thanks to Texas .
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      {/* <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] dark:border-white/[0.2] p-2 items-center space-x-2 bg-black dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-neutral-900 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div> */}
    </motion.div>
    
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[7rem] dark:bg-dot-white/[0.2] bg-dot-white/[0.2] flex-col space-y-2 mb-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-white/[0.2] dark:border-white/[0.2] p-2  items-center space-x-2 bg-black dark:bg-black w-full h-4 "
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-white/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-white/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-black p-4 dark:bg-black dark:border-white/[0.1] border border-white/[0.1] flex flex-col items-center justify-center"
      >
        <Image
          src="/images/mmainlogo.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
       
        <p className="border border-orange-500 bg-orange-900/20 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
        Diversity
        </p>
      </motion.div>
      <motion.div className="h-full relative  w-1/3 rounded-2xl bg-black p-4 dark:bg-black dark:border-white/[0.1] border border-white/[0.1] flex flex-col items-center justify-center">
        <Image
          src="/images/mmainlogo.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        
        <p className="border border-green-500 bg-green-900/20 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
        Quality
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-black p-4 dark:bg-black dark:border-white/[0.1] border border-white/[0.1] flex flex-col items-center justify-center"
      >
        <Image
          src="/images/mmainlogo.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          
        </p>
        <p className="border border-orange-500 bg-orange-900/20 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
        Retention
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-white/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-white/[0.2] dark:border-white/[0.2] p-2  items-start space-x-2 bg-black"
      >
        <Image
          src="/images/mmainlogo.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          Thanks to Texas overseas educational consultancies i had completed my education in overseas.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-black"
      >
        <p className="text-xs text-neutral-500">Thank you from texas</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Trusted brand",
    description: (
      <span className="text-sm">
        With over 750+ university tie ups, ours is a brand that is tested and trusted by leading universities all over the world.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <CheckCircle className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Marketing Solutions",
    description: (
      <span className="text-sm">
        Reach out to students that are a right fit for your campus through our international student recruitment strategies.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <Users className="h-4 w-4 text-neutral-500 mt-6" />,
  },
  {
    title: "Minimal Effort, Maximum Output",
    description: (
      <span className="text-sm">
        Receive verified and complete applications of eligible students. Allow us to do the heavy lifting of screening and verification of applications and documents, while you focus on what’s important for you.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Student Diversity, Quality & Retention",
    description: (
      <span className="text-sm">
        Enrich your campus with students from varied nationalities meeting your quality standards. Boost retentions and longevity by funnelling students through KC’s diligent academic & financial vetting process and minimize dropouts.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "A Team that Delivers",
    description: (
      <span className="text-sm">
        Work with our seasoned experts who are adept at matching eligible students with your criteria and course offerings and make your student recruitment experience as seamless as you can imagine.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
