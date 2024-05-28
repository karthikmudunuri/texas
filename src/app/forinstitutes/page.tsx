import React from "react";
import { SpotlightPreviewinstitues} from "@/components/design/usa";
import { Students } from "@/components/design/counter";
import { InfiniteMovingCardsDemousa } from "@/components/design/testimonal";
import { BackgroundBeamsusa } from "@/components/design/join";
import { BentoGridThirdDemo } from "@/components/design/bbento";
export default function Home() {
    return(
        <div className="bg-black mt-10 overflow-x-hidden">
        <SpotlightPreviewinstitues/>
        <Students/>
        <BentoGridThirdDemo/>       
        <InfiniteMovingCardsDemousa />
        <BackgroundBeamsusa/>
        
        
      
    </div>
   
    )
}