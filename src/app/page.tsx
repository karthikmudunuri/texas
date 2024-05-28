'use client'
import Image from "next/image";
import {ImagesSliderDemo} from "../components/design/slider";
import { AnimatePresence } from 'framer-motion';
import { Counter } from "@/components/design/counter";
import {TracingBeamDemo} from "@/components/design/nextc";
import {InfiniteMovingCardsDemo} from "@/components/design/testimonal";
import { BackgroundBeamsDemo, BackgroundBeamsusa } from "@/components/design/join";
import { useEffect, useState } from "react";


export default function Home() {

  

  
  
  return (

    
   
      
    <div className="mt-16 bg-black">

    


      
      
      <ImagesSliderDemo />
      <Counter />
      <TracingBeamDemo />
      <InfiniteMovingCardsDemo />
      <BackgroundBeamsusa /> 

    </div>

   
   
  );
}
