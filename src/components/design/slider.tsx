'use client'
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { TextGenerateEffect, TextGenerateEffectt } from "../ui/text-generate-effect";
import { DialogDemo } from "./dialog";

const words = ` We are bringing overseas 
education for everyone`;

const wordss = ` Our Tech-enabled solutions help international students and 
recruitment partners choose the best global universities`;

export function ImagesSliderDemo() {
  const images = [
    "./images/001.png",
    "./images/0.png",
    "./images/008.png",
    "./images/009.png",
  ];

  return (
    <div className="h-[40rem] relative">
      <ImagesSlider className="h-full" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-start  absolute inset-0"
        >
          <motion.div className="text-left mb-8 ml-2"> {/* Align text to left */}
            <motion.div className="-mt-8 mb-4 ml-4">
               
              <TextGenerateEffect words={words} />
             
            </motion.div>
            <motion.div className="mt-10 ml-4">
            
            <TextGenerateEffectt className="text-sm" words={wordss} />
            </motion.div>
          </motion.div>
          <motion.div className="ml-10">
          
          <DialogDemo  /> 
          </motion.div>
        </motion.div>
      </ImagesSlider>
    </div>
  );
}
