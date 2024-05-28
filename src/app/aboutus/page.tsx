import React from "react";
import { LampDemoabout} from "@/components/design/contact";
import { BackgroundBeamsusa } from "@/components/design/join";
import { LayoutGridDemo } from "@/components/design/about";
import { TracingBeamabout } from "@/components/design/abboutbbeam";
import { InfiniteMovingCardsDemousa } from "@/components/design/testimonal";
import { TypewriterEffectabout } from "@/components/design/typewriter";
import { Students } from "@/components/design/counter";

export default function Home() {
    return(
        <div className="bg-black mt-10 overflow-x-hidden">
        <LayoutGridDemo/>
        <TracingBeamabout/>
        <InfiniteMovingCardsDemousa />
        <Students/>
        <LampDemoabout/>
        <TypewriterEffectabout/>
        <BackgroundBeamsusa/>
        
      
    </div>
   
    )
}