import React from "react";
import {  SpotlightPreviewuk } from "../../components/design/usa";
import { Uk} from "@/components/design/usas";
import { ThreeDCarduk} from "@/components/design/threedcard";
import {Tableuk} from "@/components/design/table";
import { TracingBeamDemouk} from "@/components/design/universities";
import {InfiniteMovingCardsDemousa} from "@/components/design/testimonal";
import {TypewriterEffectSmoothuk} from "@/components/design/typewriter";
import {BackgroundBeamsusa} from "@/components/design/join";
export default function Usahome() {
  return (
    <div className="bg-black mt-10 overflow-x-hidden">
        <SpotlightPreviewuk/>
        <Uk />
        <Tableuk />
        <ThreeDCarduk />
        <TracingBeamDemouk />

        <InfiniteMovingCardsDemousa />
        <TypewriterEffectSmoothuk />
        <BackgroundBeamsusa/>
      
    </div>
   
  );
}
