"use client"
import React, { useState, useEffect } from "react";
import { SparklesCore } from "../ui/sparkles";
import { CardBody, CardContainer, CardItem } from "../ui/card3d";
import { TextGenerateEffecttt } from "../ui/text-generate-effect";
import Image from "next/image";
import { Ear, Headset, Map, Users } from "lucide-react";

const words = `Our Core Strengths`
const student = `Why Texas?`
export function Counter() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber1(prevNumber => Math.min(prevNumber + 5, 750)); // Increase by 10 until it reaches 1000
            setNumber2(prevNumber => Math.min(prevNumber + 1, 75)); // Increase by 7.5 until it reaches 750
            setNumber3(prevNumber => Math.min(prevNumber + 1, 25)); // Increase by 5 until it reaches 500
        }, 1);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-black">
            <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.0}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="mt-20">
        <TextGenerateEffecttt words={words} />
            </div>
            
        <div className="flex justify-between gap-8 ">

            <div className="ml-10 font-bold">
            <CardContainer className="inter-var text-center ">
      <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        
        {/* <CardItem translateZ="100" className="w-full mb-4 ">
          <Image
            src="/images/uni.png"
            height="500"
            width="500"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem> */}
        <CardItem
          translateZ="50"
          className="text-5xl text-center  ml-32 font-bold text-orange-300 dark:text-white"
        >
          {number1}+
        </CardItem>
        <CardItem
          
          translateZ="50"
          className="text-xl ml-12 font-bold text-neutral-600 dark:text-white"
        >
          Global universities tie-ups
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         Our students aren’t just pursuing their higher education,
                    but their dreams and ambitions in eminent universities across the globe
        </CardItem>
        
       
      </CardBody>
    </CardContainer>
                
            </div>
            <div className="font-bold">
            <CardContainer className="inter-var text-center">
      <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        
        {/* <CardItem translateZ="100" className="w-full ">
          <Image
            src="/images/globbe.png"
            height="500"
            width="500"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem> */}
        <CardItem
          translateZ="50"
          className="text-5xl text-center  ml-40 font-bold text-amber-300 dark:text-white"
        >
          {number2}+
        </CardItem>
        <CardItem
          
          translateZ="50"
          className="text-xl ml-16 font-bold text-neutral-600 dark:text-white"
        >
          Offices across the Globe
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         Our students aren’t just pursuing their higher education,
                    but their dreams and ambitions in eminent universities across the globe
        </CardItem>
        
       
      </CardBody>
    </CardContainer>
                </div>
            <div className="mr-10 text-center font-bold">
            <CardContainer className="inter-var text-center">
      <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        
        {/* <CardItem translateZ="100" className="w-full ">
          <Image
            src="/images/globbe.png"
            height="500"
            width="500"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem> */}
        <CardItem
          translateZ="50"
          className="text-5xl text-center  ml-40 font-bold text-violet-400 dark:text-white"
        >
          {number3}
        </CardItem>
        <CardItem
          
          translateZ="50"
          className="text-xl ml-20 font-bold text-neutral-600 dark:text-white"
        >
          Years of Experience
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         Our students aren’t just pursuing their higher education,
                    but their dreams and ambitions in eminent universities across the globe
        </CardItem>
        
       
      </CardBody>
    </CardContainer>
                </div>
        </div>
        </div>
      
    </div>
            
        
    );
}

export function Students(){

  return (
    <div className="bg-black">
        <div className="h-[30rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
  <div className="w-full absolute inset-0 h-screen">
    <SparklesCore
      id="tsparticlesfullpage"
      background="transparent"
      minSize={0.6}
      maxSize={1.0}
      particleDensity={100}
      className="w-full h-full"
      particleColor="#FFFFFF"
    />
  </div>
  <div className="mt-20">
    <TextGenerateEffecttt words={student} />
        </div>
        
    <div className="flex justify-between gap-8 ">

        <div className="ml-10 font-bold">
        <CardContainer className="inter-var text-center ">
  <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
    
    {/* <CardItem translateZ="100" className="w-full mb-4 ">
      <Image
        src="/images/uni.png"
        height="500"
        width="500"
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem> */}
    <CardItem
      translateZ="50"
      className="text-5xl text-center  ml-40 font-bold text-orange-300 dark:text-white"
    >
      <div>
      <Map size={50} color="#cd7edd" />
      </div>
    </CardItem>
    <CardItem
      
      translateZ="50"
      className="text-xl ml-6 mt-4 font-bold text-neutral-600 dark:text-white"
    >
      31 Countries & 750+ University Tie-ups
    </CardItem>
    <CardItem
      as="p"
      translateZ="60"
      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
    >
    The choices are endless and we are there to suggest you what suits you the most.
    </CardItem>
    
   
  </CardBody>
</CardContainer>
            
        </div>
        <div className="font-bold">
        <CardContainer className="inter-var text-center">
  <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
    
    {/* <CardItem translateZ="100" className="w-full ">
      <Image
        src="/images/globbe.png"
        height="500"
        width="500"
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem> */}
    <CardItem
      translateZ="50"
      className="text-5xl text-center  ml-40 font-bold text-orange-300 dark:text-white"
    >
      <div>
      <Headset size={50} color="#cd7edd" />
      </div>
    </CardItem>
    <CardItem
      
      translateZ="50"
      className="text-xl ml-16 mt-4 font-bold text-neutral-600 dark:text-white"
    >
      Supporting you all the way

    </CardItem>
    <CardItem
      as="p"
      translateZ="60"
      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
    >
     From the day you consult us till the day you land in your dream university. we will support you all the way and by all means!
    </CardItem>
    
   
  </CardBody>
</CardContainer>
            </div>
        <div className="mr-10 text-center font-bold">
        <CardContainer className="inter-var text-center">
  <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
    
    {/* <CardItem translateZ="100" className="w-full ">
      <Image
        src="/images/globbe.png"
        height="500"
        width="500"
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem> */}
     <CardItem
      translateZ="50"
      className="text-5xl text-center  ml-40 font-bold text-orange-300 dark:text-white"
    >
      <div>
      <Users size={50} color="#cd7edd" />
      </div>
    </CardItem>
    <CardItem
      
      translateZ="50"
      className="text-xl ml-12 mt-4 font-bold text-neutral-600 dark:text-white"
    >
      Our numbers speak volumes
    </CardItem>
    <CardItem
      as="p"
      translateZ="60"
      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
    >
     The year 2020 saw 5000 of our students enrolling in their dream universities.
    </CardItem>
    
   
  </CardBody>
</CardContainer>
            </div>
    </div>
    </div>
  
</div>
        
    
);

}