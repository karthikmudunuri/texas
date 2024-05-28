import React from "react";
import {  SpotlightPreviewpartners} from "@/components/design/usa";
import { Students } from "@/components/design/counter";
import { InfiniteMovingCardsDemousa } from "@/components/design/testimonal";
import { BackgroundBeamsusa } from "@/components/design/join";
import { Spartners } from "@/components/design/partners";
import { CardStackDemo } from "@/components/design/cardstack";
export default function Home() {
    return(
        <div className="bg-black mt-10 overflow-x-hidden">
        <SpotlightPreviewpartners/>
        <Students/>
        <Spartners/>
        <InfiniteMovingCardsDemousa />
        <CardStackDemo/>       
        <BackgroundBeamsusa/>
        
        
      
        </div>
   
    )
}