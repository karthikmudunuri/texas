'use client'
import { motion } from "framer-motion";
import React from "react";
import { TextGenerateEffecttt, TextGenerateEffectttt } from "../ui/text-generate-effect";
import { AnimatedPinDemonew1, AnimatedPinDemopartners, AnimatedPinDemousa } from "./3dcards";
import { CheckCircle } from "lucide-react";

const words = `Your Business is our Top Priority`

export function Spartners() {
  return (
    <div>
        <div className="mb-20 mt-10">
    <TextGenerateEffecttt words={words} />
        </div>
    <div className="flex gap-6"> {/* Added flex class to the container */}



<motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-1/2 ml-8 -mt-40"
  >
    <AnimatedPinDemopartners/>
   
  </motion.div>
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-1/2 mr-20"
  >
    <motion.h1
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6  ml-40 font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
    >
      Commissions
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6  ml-40 font-bold text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
    >
     Get faster and higher commissions & experience complete transparency in commissions with our streamlined and efficient payments system.


    </motion.p>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-white ml-40 w-full"
    >
     <ul className="space-y-2 w-full">
       
     <motion.li
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="flex items-center text-sm whitespace-nowrap"
> {/* Adding flex container */}
  <CheckCircle color="#cd7edd" className="mr-2 -mt-4" absoluteStrokeWidth /> {/* Icon */}
  <div>
    <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Swift Commissions</h1>
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6  text-xs text-white"
    >
      Swift sharing of commission as soon as they are paid by universities
    </motion.p>
  </div>



     </motion.li>
     <motion.li
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="flex items-center text-sm whitespace-nowrap"
> {/* Adding flex container */}
  <CheckCircle color="#cd7edd" className="mr-2 -mt-4" absoluteStrokeWidth /> {/* Icon */}
  <div>
    <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Lucrative Promotions</h1>
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6  text-xs text-white"
    >
      Promotions for bonus payments, application fee waivers, high commissions & more
    </motion.p>
  </div>



     </motion.li>
     <motion.li
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="flex items-center text-sm whitespace-nowrap"
> {/* Adding flex container */}
  <CheckCircle color="#cd7edd" className="mr-2 -mt-4" absoluteStrokeWidth /> {/* Icon */}
  <div>
    <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Payments Support</h1>
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6  text-xs text-white"
    >
     A proficient team for a quick response to your commission queries
    </motion.p>
  </div>



     </motion.li>
     

          
       </ul>
    </motion.div>
  </motion.div>

  
</div>
</div>
  );
}