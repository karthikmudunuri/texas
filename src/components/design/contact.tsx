"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import MapComponent from "./map";
import { TextGenerateEffecttt } from "../ui/text-generate-effect";

const words = `Our Offices`
export function LampDemo() {
  return (
    < div className="bg-black">
    <MapComponent/>
    
    </div>
  );
}

export function LampDemoabout() {
  return (
    < div className="bg-black">
      
      <div className="mt-6 mb-10">
        <TextGenerateEffecttt words={words} />
            </div>
    <div>
      
    <MapComponent/>
    </div>
    
    </div>
  );
}

