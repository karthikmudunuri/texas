"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/card3d";
import { motion } from "framer-motion";
import { TextGenerateEffectttt } from "../ui/text-generate-effect";

const words = `One of the most technologically powerful and dynamic countries, USA is the largest & most dominant economy globally. Sectors that empower this world’s most productive economy include Healthcare, Technology, Construction, Retail, Manufacturing, Finance & Insurance and Real Estate. Top jobs with high remuneration prospects for international students include Medicine, Computer & Information Systems Managers, Architectural & Engineering Managers and Marketing & Financial Managers. Standard of living in the USA is among the highest in the world with high per capita income. This nation performs very well in many measures of well-being such as income & wealth, health status, jobs and earnings, education & skills and environmental quality..`;
const uk =`The UK is one of the most globalised economies comprising of England, Scotland, Wales and Northern Ireland and is among the world’s biggest economies. The sectors that dominate UK’s economy include service sector, financial services, higher education, aerospace, pharmaceuticals, manufacturing and production. Best paid jobs in the UK include Information Technology Managers, Engineering Professionals, Business and Financial Management Professionals, Legal Professionals, Aircraft Pilots & Flight Engineers, Higher Education Teaching Professionals and Medical Practitioners.`;
const aus =`Australia, the 12th-largest economy, is one of the wealthiest Asia–Pacific nations. After having enjoyed over two decades of economic expansion, Australia has become internationally competitive in financial and insurance services, technologies, and high-value-added manufactured goods. International students can look forward to high remuneration career prospects such as Medicine & Healthcare, Finance, IT, Mining & other Engineering Trades, Teaching & Social Work. Australian enjoy one of the highest standards of living in the world owing to a robust economy and a high employment rate with good quality of jobs.`;
const can = `Among the wealthiest nations in the world, Canada is a land of opportunities for those who wish to study, live and prosper. Canada’s highly sophisticated economy is fuelled by sectors such as Agriculture, Energy, Technology, Manufacturing & Services. Top careers international students can look forward to include Engineering, Construction, IT, Healthcare, Law and Banking & Finance. This country enjoys a job growth rate well above its population growth rate and offers a high standard of living to all its residents including international students.`;
const ire = `Ireland has made huge strides in economic development in the last few decades and has improved its living conditions better than most of the countries in the world. Ireland has a highly-advanced ‘knowledge economy’ emphasizing on the sectors of agribusiness, life sciences and financial services & technology. This country ranks first for high-value foreign direct investment (FDI) flows and performs better than most countries measure of well-being such as jobs & earnings, health status, education & skills and work-life balance in the Better Life Index. IT Services, Financial Services, Renewable Energy, Business Services, Medical/Health & Pharmaceutical Industry are the top industries for employment opportunities.`;
const newz =`New Zealand is one of the Asia–Pacific region’s most prosperous countries and has been experiencing a rapid economic growth over the past few decades. NZ has the 2nd freest & one of the most globalized economies that depends greatly on international trade. NZ’s economy is primarily driven by sectors of services, mining & manufacturing, forestry, agriculture & dairy, while IT is making big strides to gain a major share. Industries that have excellent employment prospects include Engineering, Business & Finance, Health & Social Services, and IT & Hospitality. Standard of living in NZ is relatively higher but is worth the opportunities and peaceful and high-quality life this country offers.`;

export function ThreeDCardDemo() {
  return (
    <div className="mt-20 flex justify-between">

      <div className="flex gap-12"> {/* Added flex class to the container */}
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
            Careers & Industry Insights
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
          className="w-1/2 ml-24   "
        >
          <CardContainer className="inter-var">
      <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-full rounded-xl p-6 border  ">
     
  <CardItem translateZ="100" className="w-full -mt-12 ml-24 flex justify-between">
    <Image
      src="/images/usaflag.jpeg"
      height="6000"
      width="4000"
      className="h-60 w-1/2 object-cover rounded-xl group-hover/card:shadow-xl"
      alt="thumbnail"
    />
  </CardItem>
  



        
      </CardBody>
    </CardContainer>
         
        </motion.div>
      </div>
    </div>
    
  );
}


export function ThreeDCarduk() {
    return (
      <div className="mt-20 flex justify-between">
  
        <div className="flex gap-12"> {/* Added flex class to the container */}
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
              Careers & Industry Insights
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
            className="w-1/2 ml-24   "
          >
            <CardContainer className="inter-var">
        <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-full rounded-xl p-6 border  ">
       
    <CardItem translateZ="100" className="w-full -mt-12 ml-24 flex justify-between">
      <Image
        src="/images/uk3.jpeg"
        height="6000"
        width="4000"
        className="h-60 w-1/2 object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    
  
  
  
          
        </CardBody>
      </CardContainer>
           
          </motion.div>
        </div>
      </div>
      
    );
  }
  


export function ThreeDCardaus() {
    return (
      <div className="mt-20 flex justify-between">
  
        <div className="flex gap-12"> {/* Added flex class to the container */}
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
              Careers & Industry Insights
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white"
            >
             <TextGenerateEffectttt words={aus} />
            </motion.div>
          </motion.div>
  
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-1/2 ml-24   "
          >
            <CardContainer className="inter-var">
        <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-full rounded-xl p-6 border  ">
       
    <CardItem translateZ="100" className="w-full -mt-12 ml-24 flex justify-between">
      <Image
        src="/images/aus3.jpeg"
        height="6000"
        width="4000"
        className="h-60 w-1/2 object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    
  
  
  
          
        </CardBody>
      </CardContainer>
           
          </motion.div>
        </div>
      </div>
      
    );
  }
  


export function ThreeDCardcan() {
    return (
      <div className="mt-20 flex justify-between">
  
        <div className="flex gap-12"> {/* Added flex class to the container */}
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
              Careers & Industry Insights
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white"
            >
             <TextGenerateEffectttt words={can} />
            </motion.div>
          </motion.div>
  
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-1/2 ml-24   "
          >
            <CardContainer className="inter-var">
        <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-full rounded-xl p-6 border  ">
       
    <CardItem translateZ="100" className="w-full -mt-12 ml-24 flex justify-between">
      <Image
        src="/images/can3.jpeg"
        height="6000"
        width="4000"
        className="h-60 w-1/2 object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    
  
  
  
          
        </CardBody>
      </CardContainer>
           
          </motion.div>
        </div>
      </div>
      
    );
  }


export function ThreeDCardire() {
    return (
      <div className="mt-20 flex justify-between">
  
        <div className="flex gap-12"> {/* Added flex class to the container */}
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
              Careers & Industry Insights
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white"
            >
             <TextGenerateEffectttt words={ire} />
            </motion.div>
          </motion.div>
  
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-1/2 ml-24   "
          >
            <CardContainer className="inter-var">
        <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-full rounded-xl p-6 border  ">
       
    <CardItem translateZ="100" className="w-full -mt-12 ml-24 flex justify-between">
      <Image
        src="/images/ire3.jpeg"
        height="6000"
        width="4000"
        className="h-60 w-1/2 object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    
  
  
  
          
        </CardBody>
      </CardContainer>
           
          </motion.div>
        </div>
      </div>
      
    );
  }


  export function ThreeDCardnewz() {
    return (
      <div className="mt-20 flex justify-between">
  
        <div className="flex gap-12"> {/* Added flex class to the container */}
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
              Careers & Industry Insights
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
            className="w-1/2 ml-24   "
          >
            <CardContainer className="inter-var">
        <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-full rounded-xl p-6 border  ">
       
    <CardItem translateZ="100" className="w-full -mt-12 ml-24 flex justify-between">
      <Image
        src="/images/new3.jpeg"
        height="6000"
        width="4000"
        className="h-60 w-1/2 object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    
  
  
  
          
        </CardBody>
      </CardContainer>
           
          </motion.div>
        </div>
      </div>
      
    );
  }
  