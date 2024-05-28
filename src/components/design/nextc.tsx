"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracking";
import { TextGenerateEffecttt } from "../ui/text-generate-effect";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenCheck, Cable, Cpu, Globe2, GraduationCap, Handshake, Headset, LibraryBig, MonitorDot, Network, Users, Video } from "lucide-react";
import {  CardItem, CardContainer } from "../ui/card3d";

const words = `Our Services & Offerings`
export function TracingBeamDemo() {
  return (
    <div className="bg-black">
    <TextGenerateEffecttt words={words} className="mb-6" />
    

    <TracingBeam className="bg-black">
      <div className="max-w-2xl mx-auto  antialiased pt-4 relative">
      <AnimatePresence>
      {dummyContent.map((item, index) => (
        <motion.div
          key={`content-${index}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
          className="mb-10 flex"
        >
          <div className="w-1/2 ">
            <p className="text-2xl mb-1 md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
              {item.title}
            </p>
            <div className="text-lg text-white prose prose-sm dark:prose-invert mb-4">
              {item.description}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }} // Add a small delay to start the animation after the text
            className="w-1/2 ml-40 "
          >
            {item?.image && (
                <CardContainer>
                <CardItem translateZ="100">
                
              <Image
                src={item.image}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="rounded-lg mb-10 object-cover"
              />
              </CardItem>
              </CardContainer>
              
            )}
          </motion.div>
        </motion.div>
      ))}
    </AnimatePresence>
    </div>
</TracingBeam>
    </div>


   
   
    
  );
}

const dummyContent = [
  {
    title: "For Students",
    description: (
      <>
        <p className="text-sm mt-1 mb-2">
        With a keen ear for your choices and preferences, our counselling experience is so seamless that you will land in your dream university!
        </p>
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-2">
        Offerings
        </h2>
        <ul className="space-y-2">
       
        <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <MonitorDot color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        Virtual Coaching and Counselling
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <BookOpenCheck color="#cd7edd" className="mr-2" /> {/* Icon */}
        Applications, Admissions & Visas
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <GraduationCap color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        High Value Scholarships and Study Loans
      </motion.li>

           
        </ul>
      </>
    ),
    badge: "For Students",
    image:
      "/images/1.png",
  },
  {
    title: "For Partners",
    description: (
      <>
        <p className="text-sm mt-1 mb-2">
        Work with our team and state-of-the-art technology and experience how they can be a game changer for your business
        </p>
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-2">
        Offerings
        </h2>
        <ul className="space-y-2">
       
        <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <Cpu color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        Innovative technology for your business
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <Video color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        Webinars by University and Texas Experts
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <Users color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        Unparalleled end-to-end support
      </motion.li>

           
        </ul>
      </>
    ),
    badge: "For Students",
    image:
      "/images/2.png",
  },
  {
    title: "For Franchisees",
    description: (
      <>
        <p className="text-sm mt-1 mb-2">
        Kickstart your business by joining the fastest growing and most trusted EdTech brand in the overseas education industry
        </p>
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-2">
        Offerings
        </h2>
        <ul className="space-y-2">
       
        <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <Handshake color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        Business solutions tailor made for your market
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <Headset color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        Support for Operations, Events and Marketing
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap mb-4"> {/* Adding flex container */}
        <LibraryBig color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        Access to Texas rich Knowledge Repository
      </motion.li>

           
        </ul>
      </>
    ),
    badge: "For Students",
    image:
      "/images/3.png",
  },
  {
    title: "For Universities",
    description: (
      <>
        <p className="text-sm mt-1 mb-2">
        Maximize your reach across geographies and exceed your student recruitment goals without compromising on quality.
        </p>
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-2">
        Offerings
        </h2>
        <ul className="space-y-2">
       
        <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <Globe2 color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        Recruit students from diverse nationalities
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <Network color="#cd7edd" className="mr-2" absoluteStrokeWidth />{/* Icon */}
        Access to Texas recruitment network
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <Cable color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        Enhance brand visibility
      </motion.li>

           
        </ul>
      </>
    ),
    badge: "For Universities",
    image:
      "/images/4.png",
  },
//   {
//     title: "For Students",
//     description: (
//       <>
//         <p className="text-sm mt-1 mb-2">
//         With a keen ear for your choices and preferences, our counselling experience is so seamless that you will land in your dream university!
//         </p>
//         <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-2">
//         Offerings
//         </h2>
//         <ul className="space-y-2">
       
//         <motion.li
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//          className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
//         <MonitorDot color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
//         Virtual Coaching and Counselling
//       </motion.li>
//       <motion.li
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//          className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
//         <BookOpenCheck color="#cd7edd" className="mr-2" /> {/* Icon */}
//         Applications, Admissions & Visas
//       </motion.li>
//       <motion.li
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//          className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
//         <GraduationCap color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
//         High Value Scholarships and Study Loans
//       </motion.li>

           
//         </ul>
//       </>
//     ),
//     badge: "For Students",
//     image:
//       "/images/5.png",
//   },
 
];