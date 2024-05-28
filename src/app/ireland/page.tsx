import React from "react";
import { SpotlightPreviewireland } from "../../components/design/usa";
import { Ireland } from "@/components/design/usas";
import { ThreeDCardire} from "@/components/design/threedcard";
import { Tableire} from "@/components/design/table";
import {  TracingBeamDemoire } from "@/components/design/universities";
import {InfiniteMovingCardsDemousa} from "@/components/design/testimonal";
import { TypewriterEffectSmoothire} from "@/components/design/typewriter";
import {BackgroundBeamsusa} from "@/components/design/join";
export default function Home() {
  return (
    <div className="bg-black mt-10 overflow-x-hidden">
        <SpotlightPreviewireland/>
        <Ireland />
        <Tableire />
        <ThreeDCardire />
        <TracingBeamDemoire />
        <InfiniteMovingCardsDemousa />
        <TypewriterEffectSmoothire />
        <BackgroundBeamsusa/>
      
    </div>
   
  );
}
