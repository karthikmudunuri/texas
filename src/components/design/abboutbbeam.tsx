"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracking";
import { TextGenerateEffecttt } from "../ui/text-generate-effect";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenCheck, Cable, Cpu, Globe2, GraduationCap, Handshake, Headset, LibraryBig, MonitorDot, Network, Users, Video } from "lucide-react";
import {  CardItem, CardContainer } from "../ui/card3d";

const words = `Our Goals`
export function TracingBeamabout() {
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
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }} // Add a small delay to start the animation after the text
            className="w-1/3 ml-10 "
          >
            {item?.image && (
                <CardContainer>
                <CardItem translateZ="100">
                
              <Image
                src={item.image}
                alt="blog thumbnail"
                height="500"
                width="500"
                className="rounded-lg mb-10 object-cover -mt-12"
              />
              </CardItem>
              </CardContainer>
              
            )}
          </motion.div>
          <div className="w-2/3 ml-32 mt-10">
            <p className="text-2xl mb-1 md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
              {item.title}
            </p>
            <div className="text-lg text-white prose prose-sm dark:prose-invert mb-4 w-full">
              {item.description}
            </div>
          </div>
          
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
    title: "Our Vision",
    description: (
      <>
        <p className="text-sm mt-1 mb-2">
        Our vision is to make a transformative impact on Study Abroad Service Sector through continual innovation in student services by connecting institutions, recruiters, and students across the globe.
        </p>
       
      </>
    ),
    badge: "Our Vision",
    image:
      "/images/1.png",
  },
    {
        title: "Our Mission",
        description: (
        <>
            <p className="text-sm mt-1 mb-2">
            Our mission is to create a global EdTech ecosystem wherein our universities can showcase the best they have to offer and partners and students can choose what suits them the most. We are bringing global education within everyone’s reach and we are accomplishing it in a very unique way – by using our ultra-efficient online platform employing high-end technology, but with a human touch that sets us apart. We are transcending international boundaries everyday and are assisting more and more stakeholders leverage our market reach and expertise to achieve and exceed their business goals.
            </p>
            
        </>
        ),
        badge: "Our Mission",
        image:
        "/images/2.png",
    },
    {
        title: "Our Story",
        description: (
        <>
            <p className="text-sm mt-1 mb-2">
            Texas Overseas Educational Consultants is a one-stop solution for all your international study needs. Established in 2011, the core activity lies in assisting students to make the right choice with regard to pursuing education in overseas educational institutions. Texas provides information regarding higher education in various countries such as UK, USA, Canada, Australia, New Zealand, Ireland, and has a command over the education system worldwide.
            </p>
            
        </>
        ),
        badge: "Our Values",
        image:
        "/images/3.png",
    },
    
    
];
export function TracingBeamcontact() {
    return (
      <div className="bg-black">
      <TextGenerateEffecttt words={words} className="mb-6" />
      
  
      <TracingBeam className="bg-black">
        <div className="max-w-2xl mx-auto  antialiased pt-4 relative">
        <AnimatePresence>
        
          <motion.div
            
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: -50 }}
            className="mb-10 flex"
          >
            <div className="w-1/2 ">
              <p className="text-2xl mb-1 md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                
              </p>
              <div className="text-lg text-white prose prose-sm dark:prose-invert mb-4">
                
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }} // Add a small delay to start the animation after the text
              className="w-1/2 ml-40 "
            >
             
                  {/* <CardContainer>
                  <CardItem translateZ="100">
                  
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121852.14966113305!2d78.4328509369413!3d17.369521917242906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d6dbaaffdb%3A0x3029242ef9f041d0!2sTexas%20Overseas%20Educational%20Consultants!5e0!3m2!1sen!2sin!4v1709365715964!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </CardItem>
                </CardContainer> */}
                
             
            </motion.div>
          </motion.div>
       
      </AnimatePresence>
      </div>
  </TracingBeam>
      </div>
  
  
     
     
      
    );
  }
  