import React from "react";
import { SpotlightPreview } from "../../components/design/usa";
import { Usa } from "@/components/design/usas";
import {ThreeDCardDemo} from "@/components/design/threedcard";
import {TableDemo} from "@/components/design/table";
import { TracingBeamDemousa } from "@/components/design/universities";
import {InfiniteMovingCardsDemousa} from "@/components/design/testimonal";
import {TypewriterEffectSmoothDemo} from "@/components/design/typewriter";
import {BackgroundBeamsusa} from "@/components/design/join";

export default function Home() {
  return (
    <div className="bg-black mt-10 overflow-x-hidden">
        <SpotlightPreview/>
        <Usa />
        <TableDemo />
        <ThreeDCardDemo />
        <TracingBeamDemousa />

        <InfiniteMovingCardsDemousa />
        <TypewriterEffectSmoothDemo />
        <BackgroundBeamsusa/>
      
    </div>
   
  );
}
