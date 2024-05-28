import React from "react";
import { SpotlightPreviewstudents } from "@/components/design/usa";
import { Students } from "@/components/design/counter";
import { TracingBeamStudents } from "@/components/design/studentsnext";
import { TabsDemo } from "@/components/design/tabbs";
import { InfiniteMovingCardsDemousa } from "@/components/design/testimonal";
import { BackgroundBeamsusa } from "@/components/design/join";
export default function Home() {
    return(
        <div className="bg-black mt-10 overflow-x-hidden">
        <SpotlightPreviewstudents/>
        <Students/>
        <TracingBeamStudents/>
        <TabsDemo/>
        <InfiniteMovingCardsDemousa />
        <BackgroundBeamsusa/>
        
        
      
    </div>
   
    )
}