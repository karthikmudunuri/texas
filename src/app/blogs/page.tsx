import React from "react";
import BlogsPage from "@/components/design/blogdemo";
import { BackgroundBeamsusa } from "@/components/design/join";


export default function Home() {
    return(
        <div className="bg-black mt-10 overflow-x-hidden">
        
        <BlogsPage/>
        <BackgroundBeamsusa/>
      
    </div>
   
    )
}