"use client"
import { motion } from "framer-motion";
import React from "react";
import {AnimatedPinDemo, AnimatedPinDemoau1, AnimatedPinDemoaus2, AnimatedPinDemocan1, AnimatedPinDemocan2, AnimatedPinDemoire1, AnimatedPinDemoire2, AnimatedPinDemonew1, AnimatedPinDemonew2, AnimatedPinDemouk1, AnimatedPinDemouk2, AnimatedPinDemousa} from "../design/3dcards";
import {TextGenerateEffectttt } from "../ui/text-generate-effect";  
import { CheckCircle } from "lucide-react";
const words = ` Study in one of the most prestigious higher education systems globally and access some high-end technology and cutting-edge research for an immersive, engaging & 
collaborative study experience. Choose from an extensive range of schools, 
numerous study disciplines and niche qualifications that are difficult to find by in 
other parts of the world and experience a uniquely flexible education system 
allowing you to apply to a variety of programs suiting your academic & career goals. 
Graduate with a truly global outlook and real-world skills for the future.`

const uk =`Learn from some of the world's best academics and experts in some of world’s most prestigious universities and benefit from their exceptional academic support. Study alongside some of the finest and brilliant minds and hone your skills using state-of-the-art technology. Avail placements, internships and volunteering positions that are your right fit through strong industry links of UK universities and apply your knowledge and skills in a real-world professional environment. Graduate with skills and expertise that are in high demand around the world and get hired by your dream employers.`;

const canada = `Study in a country that has tripled its international student population over the past decade, thanks to its globally recognized universities offering a world class education, highly practical programs with hands-on learning and some of the most affordable tuition fees among English-speaking countries. Enjoy top quality life in the ‘most liveable cities’ of Vancouver and Toronto and advance your career in one of the very resource rich, industrialized and stable economies.`

const australia =`Study in a country that has produced over 2.5 million global graduates and has set exceptional standards for global education. Pursue high-quality & globally recognized qualifications from world class institutions. Enhance your career prospects by gaining hands-on industry experience through placements and internships, make connections with global employers, and succeed in the global workforce. Feel welcomed & inspired in some of the most liveable cities that are rich with people from diverse nationalities and cultures from all over the world.`;

const ireland = `Home to 9 of 10 global ICT companies, 8 of the 10 global pharmaceutical companies, a global financial services powerhouse and a centre of international banking excellence, Ireland is the European hub to over 1,000 leading multinational corporations across multiple sectors. Potential career opportunities in a host of global giants including Microsoft, Google, PayPal, Apple, Twitter, Microsoft, LinkedIn, Pfizer, GSK and Genzyme make studying in Ireland a very lucrative opportunity. High academic standards of Irish universities are enabling their graduates to make an impact on academia, research and the global business world.`;

const newz = `Study in a high-quality education system closely monitored and regulated by the NZ government. Experience practical teaching style and hands-on learning to inculcate real-world skills that will open doors of global opportunities. Gain impeccable English language abilities to be effective in multicultural and challenging work environments. Stay ahead in the competition with NZ qualifications that are highly sought after in the international job market.`;

export function Usa() {
  return (
    <div>
    <div className="flex justify-between">

      <div className="flex gap-6"> {/* Added flex class to the container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-1/2 ml-20 mt-8"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          >
            Why study in the USA?
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white"
          >
           <TextGenerateEffectttt words={words} />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-1/2 ml-8 -mt-40 "
        >
          <AnimatedPinDemo/>
         
        </motion.div>
      </div>
    </div>

<div className="flex justify-between">

<div className="flex gap-6"> {/* Added flex class to the container */}

<motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-1/2 ml-8 -mt-40"
  >
    <AnimatedPinDemousa/>
   
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
      className="mb-6  ml-40 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
    >
      Quick facts
    </motion.h1>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-white ml-40 w-full"
    >
     <ul className="space-y-4 w-full">
       
       <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
       <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
       USA hosts more than a million international students
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Over 25% of world’s top 100 universities are in the USA
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Post-study stay back visas (OPT) up to 3 years for STEM programs
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Internships (CPT) up to 12 months while studying
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Merit Based & Need Based Scholarships
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Over 4500 accredited universities & institutions to choose from
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      12 of the best student cities in the world (QS Best Student Cities 2023)
     </motion.li>

          
       </ul>
    </motion.div>
  </motion.div>

  
</div>
</div>
</div>
  );
}

export function Uk() {
  return (
    <div>
    <div className="flex justify-between">

      <div className="flex gap-6"> {/* Added flex class to the container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-1/2 ml-20 mt-8"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          >
            Why study in the UK?
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white"
          >
           <TextGenerateEffectttt words={uk} />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-1/2 ml-8 -mt-40 "
        >
          <AnimatedPinDemouk1/>
         
        </motion.div>
      </div>
    </div>

<div className="flex justify-between">

<div className="flex gap-6"> {/* Added flex class to the container */}

<motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-1/2 ml-8 -mt-40"
  >
    <AnimatedPinDemouk2/>
   
  </motion.div>
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-1/2 mr-60"
  >
    <motion.h1
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6  ml-40 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
    >
      Quick facts
    </motion.h1>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-white ml-32 w-full"
    >
     <ul className="space-y-4 w-full">
       
       <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-normal"> {/* Adding flex container */}
       <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
       The UK undertakes world’s scientific research and produces 14% of the world’s most frequently cited papers
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      UK welcomes over 400,000 students every year
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Post study work visa of 2 years
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      12 of world’s top 100 universities are in The UK (QS World Rankings 2023)
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      14 of the best student cities in the world are in The UK (QS Best Student Cities 2023)
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      UK offers 131 universities of international repute to study from
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Admission without IELTS possible
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Masters courses with 1 year work placements are available
     </motion.li>

          
       </ul>
    </motion.div>
  </motion.div>

  
</div>
</div>
</div>
  );
}

export function Australia() {
  return (
    <div>
    <div className="flex justify-between">

      <div className="flex gap-6"> {/* Added flex class to the container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-1/2 ml-20 mt-8"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          >
            Why study in the Australia?
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white"
          >
           <TextGenerateEffectttt words={australia} />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-1/2 ml-8 -mt-40 "
        >
          <AnimatedPinDemoau1/>
         
        </motion.div>
      </div>
    </div>

<div className="flex justify-between">

<div className="flex gap-6"> {/* Added flex class to the container */}

<motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-1/2 ml-8 -mt-40"
  >
    <AnimatedPinDemoaus2/>
   
  </motion.div>
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-1/2 mr-60"
  >
    <motion.h1
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6  ml-40 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
    >
      Quick facts
    </motion.h1>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-white ml-32 w-full"
    >
     <ul className="space-y-4 w-full">
       
       <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-normal"> {/* Adding flex container */}
       <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
       9 of World’s Top 100 Universities
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Choose from over 22,000 Courses across 1,100 Institutions
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      7 of the Best Student Cities in the World (QS Best Student Cities 2023)
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      More than A$300 Million Invested in Scholarships for International Students
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      14 of the best student cities in the world are in The UK (QS Best Student Cities 2023)
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Australian Universities have Produced 15 Nobel Laureates
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      More than Half a Million International Students from 192 Countries
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Post Study Work Visa up to 6 years*
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Good Permanent Residency Prospects
     </motion.li>

          
       </ul>
    </motion.div>
  </motion.div>

  
</div>
</div>
</div>
  );
}


export function Canada() {
  return (
    <div>
    <div className="flex justify-between">

      <div className="flex gap-6"> {/* Added flex class to the container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-1/2 ml-20 mt-8"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          >
            Why study in the Canada?
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white"
          >
           <TextGenerateEffectttt words={canada} />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-1/2 ml-8 -mt-40 "
        >
          <AnimatedPinDemocan1/>
         
        </motion.div>
      </div>
    </div>

<div className="flex justify-between">

<div className="flex gap-6"> {/* Added flex class to the container */}

<motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-1/2 ml-8 -mt-40"
  >
    <AnimatedPinDemocan2/>
   
  </motion.div>
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-1/2 mr-60"
  >
    <motion.h1
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6  ml-40 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
    >
      Quick facts
    </motion.h1>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-white ml-32 w-full"
    >
     <ul className="space-y-4 w-full">
       
       <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-normal"> {/* Adding flex container */}
       <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
       Among the Safest Countries Globally
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Hands-on learning
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Paid Internships Available
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Post Study Work Visa up to 3 Years
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Excellent Immigration Opportunities
     </motion.li>
     

          
       </ul>
    </motion.div>
  </motion.div>

  
</div>
</div>
</div>
  );
}

export function Ireland() {
  return (
    <div>
    <div className="flex justify-between">

      <div className="flex gap-6"> {/* Added flex class to the container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-1/2 ml-20 mt-8"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          >
            Why study in the Ireland?
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white"
          >
           <TextGenerateEffectttt words={ireland} />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-1/2 ml-8 -mt-40 "
        >
          <AnimatedPinDemoire1/>
         
        </motion.div>
      </div>
    </div>

<div className="flex justify-between">

<div className="flex gap-6"> {/* Added flex class to the container */}

<motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-1/2 ml-8 -mt-40"
  >
    <AnimatedPinDemoire2/>
   
  </motion.div>
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-1/2 mr-60"
  >
    <motion.h1
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6  ml-40 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
    >
      Quick facts
    </motion.h1>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-white ml-32 w-full"
    >
     <ul className="space-y-4 w-full">
       
       <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-normal"> {/* Adding flex container */}
       <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
       Europe’s fastest growing economy
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Ranked #10 Globally for High-Quality Scientific Research
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Post Study Work Visa up to 2 Years
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      All Universities Globally Ranked among top 5%
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Ranked as the 13th most peaceful place on Earth
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-normal"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Qualifications quality assured by Quality & Qualifications Ireland, an Irish State Agency
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Among the top 20 education systems worldwide
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Ireland is ranked 11th in the 2018 Global Innovation Index
     </motion.li>
     

          
       </ul>
    </motion.div>
  </motion.div>

  
</div>
</div>
</div>
  );
}


export function New() {
  return (
    <div>
    <div className="flex justify-between">

      <div className="flex gap-6"> {/* Added flex class to the container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-1/2 ml-20 mt-8"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          >
            Why study in the New Zealand?
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white"
          >
           <TextGenerateEffectttt words={newz} />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-1/2 ml-8 -mt-40 "
        >
          <AnimatedPinDemonew1/>
         
        </motion.div>
      </div>
    </div>

<div className="flex justify-between">

<div className="flex gap-6"> {/* Added flex class to the container */}

<motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-1/2 ml-8 -mt-40"
  >
    <AnimatedPinDemonew2/>
   
  </motion.div>
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-1/2 mr-60"
  >
    <motion.h1
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6  ml-40 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
    >
      Quick facts
    </motion.h1>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-white ml-32 w-full"
    >
     <ul className="space-y-4 w-full">
       
       <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-normal"> {/* Adding flex container */}
       <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
       New Zealand universities are ranked in the top 3% in the world
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-normal"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Only country in the world to have all its universities in the global top 500
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-normal"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Over 20,000 international students from 160 countries
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-normal w-full"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      8 state-funded universities, 16 Institutes of Technology and Polytechnics
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-normal"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Post-study work visa up to three years and good permanent residency prospects
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-normal"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Ranked as the top English-speaking country at preparing students for the future
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-normal"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      A member of the Lisbon Qualification Recognition Convention – NZ qualifications
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm whitespace-normal"> {/* Adding flex container */}
      <CheckCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth />
      Lower tuition fee with plenty of scholarships on offer
     </motion.li>
     

          
       </ul>
    </motion.div>
  </motion.div>

  
</div>
</div>
</div>
  );
}
