import React from "react";
import { LampDemo} from "@/components/design/contact";
import { SpotlightPreviewcontact } from "@/components/design/usa";
import { BackgroundBeamsusa } from "@/components/design/join";

export default function Home() {
    return(
        <div className="bg-black mt-10 overflow-x-hidden">
        <SpotlightPreviewcontact/>
        <LampDemo/>
        <BackgroundBeamsusa/>
        
      
    </div>
   
    )
}