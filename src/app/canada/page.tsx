import React from "react";
import { SpotlightPreviewcanada} from "../../components/design/usa";
import { Canada} from "@/components/design/usas";
import {ThreeDCardcan} from "@/components/design/threedcard";
import {Tablecanada} from "@/components/design/table";
import {TracingBeamDemocan} from "@/components/design/universities";
import {InfiniteMovingCardsDemousa} from "@/components/design/testimonal";
import { TypewriterEffectSmoothcan} from "@/components/design/typewriter";
import {BackgroundBeamsusa} from "@/components/design/join";
export default function Home() {
  return (
    <div className="bg-black mt-10 overflow-x-hidden">
        <SpotlightPreviewcanada/>
        <Canada />
        <Tablecanada />
        <ThreeDCardcan />
        <TracingBeamDemocan />
        <InfiniteMovingCardsDemousa />
        <TypewriterEffectSmoothcan />
        <BackgroundBeamsusa/>
      
    </div>
   
  );
}
