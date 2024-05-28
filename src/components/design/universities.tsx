"use client"
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PinContainer } from "../ui/3dpin";
import { TextGenerateEffecttt } from "../ui/text-generate-effect";
import { TracingBeam } from "../ui/tracking";

const words = `Popular Universities`;

const dummyContent = [
    {
      title: "University of Connecticut, Connecticut (Public Ivy - Only UG)",
      url: "uconn.edu",
      hurl:"https://uconn.edu/",
      
      image: "/images/usa1.png",
    },
    {
      title: "Johns Hopkins University, Baltimore, Maryland (School of Engineering – Only PG)",
      url: "www.jhu.edu",
      hurl:"https://www.jhu.edu/",
      image: "/images/usa2.png",
    },
  
    {
      title: "Arizona State University, Phoenix, Arizona",
      url: "www.asu.edu",
      hurl:"https://www.asu.edu/",
      image: "/images/usa3.png",
    },
    {
      title: "UMass Amherst (Masters Programs & ECE MS 1+1 Program)",
      url: "www.umass.edu",
      hurl:"https://www.umass.edu/",
      image: "/images/usa4.png",
    },
    {
      title: "University of California, Riverside, California (Graduate Business Programs & College of Engineering and UCR Extension)",
      url: "www.ucr.edu",
      hurl:"https://www.ucr.edu/",
      image: "/images/usa5.png",
    },
    {
      title: "Virginia Tech Language and Culture Institute, Blacksburg, Virginia (Only UG Pathways)",
      url: "lci.vt.edu",
      hurl:"https://lci.vt.edu/",
      image: "/images/usa6.png",
    },
    {
      title: "University of South Florida, Tampa, Florida (Only UG)",
      url: "www.usf.edu",
      hurl:"https://www.usf.edu/",
      image: "/images/usa7.png",
    },
    {
      title: "University of Arizona, Tucson, Arizona",
      url: "www.arizona.edu",
      hurl:"https://www.arizona.edu/",
      image: "/images/usa8.png",
    },
    {
      title: "Drexel University, Philadelphia, Pennsylvania (College of Engineering, UG Gateways and IEP)",
      url: "drexel.edu",
      hurl:"https://drexel.edu/",
      image: "/images/usa9.png",
    },
    {
      title: "University of Delaware, Newark, Delaware (Only UG)",
      url: "www.udel.edu",
      hurl:"https://www.udel.edu/",
      image: "/images/usa10.png",
    },
   
  
  ];
  
  const ukContent = [
    {
      title: "University of Bristol, Bristol, England",
      url: "www.bristol.ac.uk",
      hurl:"https://www.bristol.ac.uk/",
      
      image: "/images/ukk1.svg",
    },
    {
      title: "University of Leeds, Leeds, England",
      url: "www.leeds.ac.uk",
      hurl:"https://www.leeds.ac.uk/",
      image: "/images/ukk2.svg",
    },
  
    {
      title: "University of Glasgow, Glasgow, Scotland",
      url: "www.gla.ac.uk",
      hurl:"https://www.gla.ac.uk/",
      image: "/images/ukk3.svg",
    },
    {
      title: "Durham University, Durham, England",
      url: "www.durham.ac.uk",
      hurl:"https://www.durham.ac.uk/",
      image: "/images/ukk4.svg",
    },
    {
      title: "University of Southampton, Southampton, England",
      url: "www.southampton.ac.uk",
      hurl:"https://www.southampton.ac.uk/",
      image: "/images/ukk5.svg",
    },
    {
        title: "University of Birmingham, Birmingham, England",
        url: "www.birmingham.ac.uk",
        hurl:"https://www.birmingham.ac.uk/",
        
        image: "/images/ukk6.svg",
      },
      {
        title: "University of Nottingham, Nottingham, England",
        url: "www.nottingham.ac.uk",
        hurl:"https://www.nottingham.ac.uk/",
        image: "/images/ukk7.svg",
      },
    
      {
        title: "The University of Sheffield, Sheffield, England",
        url: "www.sheffield.ac.uk",
        hurl:"https://www.sheffield.ac.uk/",
        image: "/images/ukk8.svg",
      },
      {
        title: "Newcastle University, Newcastle upon Tyne, England",
        url: "www.ncl.ac.uk",
        hurl:"https://www.ncl.ac.uk/",
        image: "/images/ukk9.svg",
      },
      {
        title: "Lancaster University, Lancaster, England",
        url: "www.lancaster.ac.uk",
        hurl:"https://www.lancaster.ac.uk/",
        image: "/images/ukk10.svg",
      },
   
  
  ];

  const ausContent = [
    {
      title: "The University of New South Wales, Sydney (CRICOS Code 00098G)",
      url: "www.unswcollege.edu.au",
      hurl:"https://www.unswcollege.edu.au/",
      
      image: "/images/a1.svg",
    },
    {
      title: "Monash University, Melbourne (CRICOS Code 00008C) (Except students from Punjab and Haryana)",
      url: "www.monash.edu",
      hurl:"https://www.monash.edu/",
      image: "/images/a2.svg",
    },
  
    {
      title: "University of Glasgow, Glasgow, Scotland",
      url: "www.uq.edu.au",
      hurl:"https://www.uq.edu.au/",
      image: "/images/a3.svg",
    },
    {
      title: "University of Western Australia, Perth (CRICOS Code: 00126G)",
      url: "www.uwa.edu.au",
      hurl:"https://www.uwa.edu.au/",
      image: "/images/a4.jpeg",
    },
    {
      title: "The University of Adelaide, Adelaide (CRICOS Code 00123M)",
      url: "www.adelaide.edu.au",
      hurl:"https://www.adelaide.edu.au/",
      image: "/images/a5.svg",
    },
    {
        title: "University of Technology Sydney, Sydney (CRICOS Provider No. 00099F)",
        url: "www.uts.edu.au",
        hurl:"https://www.uts.edu.au/",
        
        image: "/images/a6.png",
      },
      {
        title: "Macquarie University, Sydney (CRICOS Code 00002J)",
        url: "www.mq.edu.au",
        hurl:"https://www.mq.edu.au/",
        image: "/images/a7.svg",
      },
    
      {
        title: "RMIT University, Melbourne (CRICOS Code 00122A)",
        url: "www.rmit.edu.au",
        hurl:"https://www.rmit.edu.au/",
        image: "/images/a8.svg",
      },
      {
        title: "University of Wollongong, Wollongong (CRICOS Code 00102E)",
        url: "www.uow.edu.au",
        hurl:"https://www.uow.edu.au/",
        image: "/images/a9.png",
      },
      {
        title: "The University of Newcastle, Newcastle (CRICOS Code 00109J)",
        url: "www.ncl.ac.uk",
        hurl:"https://www.ncl.ac.uk/",
        image: "/images/a10.svg",
      },
   
  
  ];


  const canContent = [
    {
      title: "McGill University’s School of Continuing Studies, Montreal, Quebec",
      url: "www.mcgill.ca",
      hurl:"https://www.mcgill.ca/",
      
      image: "/images/c1.svg",
    },
    {
      title: "Queen's University, Kingston, Ontario (Only UG)",
      url: "www.queensu.ca",
      hurl:"https://www.queensu.ca/",
      image: "/images/c2.png",
    },
  
    {
      title: "Dalhousie University, Halifax, Nova Scotia (UG and M. Engg in Internetworking)",
      url: "www.dal.ca",
      hurl:"https://www.dal.ca/",
      image: "/images/c3.svg",
    },
    {
      title: "University of Victoria in Partnership with Kaplan, Victoria, British Columbia",
      url: "www.uvic.ca",
      hurl:"https://www.uvic.ca/",
      image: "/images/c4.png",
    },
    {
      title: "York University, School of Continuing Education, Toronto, Ontario",
      url: "continue.yorku.ca",
      hurl:"https://continue.yorku.ca/",
      image: "/images/c5.svg",
    },
    {
        title: "University of Guelph, Guelph, Ontario (Only UG)",
        url: "www.uoguelph.ca",
        hurl:"https://www.uoguelph.ca/",
        
        image: "/images/c6.svg",
      },
      {
        title: "University of Waterloo, Waterloo, Ontario",
        url: "uwaterloo.ca",
        hurl:"https://uwaterloo.ca/",
        image: "/images/c7.svg",
      },
    
      {
        title: "University of Calgary Continuing Education, Calgary, Alberta",
        url: "conted.ucalgary.ca",
        hurl:"https://conted.ucalgary.ca/",
        image: "/images/c8.png",
      },
      {
        title: "University of Windsor, Windsor, Ontario",
        url: "www.uwindsor.ca",
        hurl:"https://www.uwindsor.ca/",
        image: "/images/c9.png",
      },
      {
        title: "University of Manitoba, Winnipeg, Manitoba",
        url: "umanitoba.ca",
        hurl:"https://umanitoba.ca/",
        image: "/images/c10.svg",
      },
   
  
  ];


  const ireContent = [
    {
      title: "Trinity College Dublin, Dublin",
      url: "www.tcd.ie",
      hurl:"https://www.tcd.ie/",
      
      image: "/images/i1.png",
    },
    {
      title: "University College Dublin, Dublin",
      url: "www.ucd.ie",
      hurl:"https://www.ucd.ie/",
      image: "/images/i2.png",
    },
  
    {
      title: "University of Galway, Galway",
      url: "www.universityofgalway.ie",
      hurl:"https://www.universityofgalway.ie/",
      image: "/images/i3.jpeg",
    },
    {
      title: "University College Cork, Cork",
      url: "www.ucc.ie",
      hurl:"https://www.ucc.ie/en/",
      image: "/images/i4.svg",
    },
    {
      title: "Dublin City University, Dublin",
      url: "www.dcu.ie",
      hurl:"https://www.dcu.ie/",
      image: "/images/i5.svg",
    },
    {
        title: "University of Limerick, Limerick",
        url: "www.ul.ie",
        hurl:"https://www.ul.ie/",
        
        image: "/images/i6.svg",
      },
      {
        title: "Maynooth University, Maynooth",
        url: "www.maynoothuniversity.ie",
        hurl:"https://www.maynoothuniversity.ie/",
        image: "/images/i7.svg",
      },
    
      {
        title: "Technological University Dublin, Dublin",
        url: "www.tudublin.ie",
        hurl:"https://www.tudublin.ie/",
        image: "/images/i8.png",
      },
      {
        title: "South East Technological University (Waterford and Carlow Campus)",
        url: "www.tuse.ie",
        hurl:"https://www.tuse.ie/",
        image: "/images/i9.jpeg",
      },
      {
        title: "Atlantic Technological University (Galway and Letterkenny Campus)",
        url: "www.atu.ie",
        hurl:"https://www.atu.ie/",
        image: "/images/i10.jpeg",
      },
   
  
  ];

  const newzContent = [
    {
      title: "University of Auckland, Auckland",
      url: "www.auckland.ac.nz",
      hurl:"https://www.auckland.ac.nz/en.html",
      
      image: "/images/n1.jpeg",
    },
    {
      title: "Massey University, Palmerston North",
      url: "www.massey.ac.nz",
      hurl:"https://www.massey.ac.nz/",
      image: "/images/n2.svg",
    },
  
    {
      title: "Victoria University of Wellington, Wellington",
      url: "www.wgtn.ac.nz",
      hurl:"https://www.wgtn.ac.nz/",
      image: "/images/n3.svg",
    },
    {
      title: "University of Waikato, Hamilton, North Island",
      url: "www.waikato.ac.nz",
      hurl:"https://www.waikato.ac.nz/",
      image: "/images/n4.svg",
    },
    {
      title: "University of Canterbury, Christchurch",
      url: "www.canterbury.ac.nz",
      hurl:"https://www.canterbury.ac.nz/",
      image: "/images/n5.svg",
    },
    {
        title: "Lincoln University, Lincoln",
        url: "www.lincoln.edu",
        hurl:"https://www.lincoln.edu/",
        
        image: "/images/n6.svg",
      },
      {
        title: "Auckland University of Technology, Auckland",
        url: "www.aut.ac.nz",
        hurl:"https://www.aut.ac.nz/",
        image: "/images/n7.svg",
      },
    
      {
        title: "Unitec Institute of Technology - Te Pūkenga, Auckland",
        url: "unitec.ac.nz",
        hurl:"https://www.unitec.ac.nz/",
        image: "/images/n8.svg",
      },
      {
        title: "Otago Polytechnic- Te Pūkenga, Dunedin & Auckland",
        url: "www.op.ac.nz",
        hurl:"https://www.op.ac.nz/",
        image: "/images/n9.svg",
      },
      {
        title: "Manukau Institute of Technology - Te Pūkenga, Auckland",
        url: "www.manukau.ac.nz",
        hurl:"https://www.manukau.ac.nz//",
        image: "/images/n10.svg",
      },
   
  
  ];

export function TracingBeamDemousa() {
  return (
    <div className="bg-black">
    <TracingBeam className="bg-black">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <AnimatePresence>
          <TextGenerateEffecttt words={words} className="-mb-16" />
          {dummyContent.map((item, index) => (
            <motion.div
              key={index} // Use index as the key
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: -50 }}
              className="h-[10rem] w-full flex items-start ml-32 -mt-6 justify-start" // Removed items-center
            >
              <PinContainer title={item.url} href={item.hurl}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[50rem] h-[5rem]">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full items-center flex"
                  >
                    {item?.image && (
                      <Image
                        src={item.image}
                        alt="blog thumbnail"
                        height="40"
                        width="40"
                        className="mr-4 object-cover"
                      />
                    )}
                    <motion.p className="text-2xl whitespace-normal mb-1 md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                      {item.title}
                    </motion.p>
                  </motion.div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </TracingBeam>
  </div>
  ) }

  export function TracingBeamDemouk() {
    return (
      <div className="bg-black">
      <TracingBeam className="bg-black">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <AnimatePresence>
            <TextGenerateEffecttt words={words} className="-mb-16" />
            {ukContent.map((item, index) => (
              <motion.div
                key={index} // Use index as the key
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, x: -50 }}
                className="h-[10rem] w-full flex items-start ml-32 -mt-6 justify-start" // Removed items-center
              >
                <PinContainer title={item.url} href={item.hurl}>
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[50rem] h-[5rem]">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="w-full items-center flex"
                    >
                      {item?.image && (
                        <Image
                          src={item.image}
                          alt="blog thumbnail"
                          height="40"
                          width="40"
                          className="mr-4 object-cover"
                        />
                      )}
                      <motion.p className="text-2xl whitespace-normal mb-1 md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                        {item.title}
                      </motion.p>
                    </motion.div>
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </TracingBeam>
    </div>
    )
 } 
 
 export function TracingBeamDemoaus() {
    return (
      <div className="bg-black">
      <TracingBeam className="bg-black">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <AnimatePresence>
            <TextGenerateEffecttt words={words} className="-mb-16" />
            {ausContent.map((item, index) => (
              <motion.div
                key={index} // Use index as the key
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, x: -50 }}
                className="h-[10rem] w-full flex items-start ml-32 -mt-6 justify-start" // Removed items-center
              >
                <PinContainer title={item.url} href={item.hurl}>
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[50rem] h-[5rem]">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="w-full items-center flex"
                    >
                      {item?.image && (
                        <Image
                          src={item.image}
                          alt="blog thumbnail"
                          height="40"
                          width="40"
                          className="mr-4 object-cover"
                        />
                      )}
                      <motion.p className="text-2xl whitespace-normal mb-1 md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                        {item.title}
                      </motion.p>
                    </motion.div>
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </TracingBeam>
    </div>
    )
 }   

 export function TracingBeamDemocan() {
    return (
      <div className="bg-black">
      <TracingBeam className="bg-black">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <AnimatePresence>
            <TextGenerateEffecttt words={words} className="-mb-16" />
            {canContent.map((item, index) => (
              <motion.div
                key={index} // Use index as the key
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, x: -50 }}
                className="h-[10rem] w-full flex items-start ml-32 -mt-6 justify-start" // Removed items-center
              >
                <PinContainer title={item.url} href={item.hurl}>
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[50rem] h-[5rem]">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="w-full items-center flex"
                    >
                      {item?.image && (
                        <Image
                          src={item.image}
                          alt="blog thumbnail"
                          height="40"
                          width="40"
                          className="mr-4 object-cover"
                        />
                      )}
                      <motion.p className="text-2xl whitespace-normal mb-1 md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                        {item.title}
                      </motion.p>
                    </motion.div>
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </TracingBeam>
    </div>
    )
 } 
 
 export function TracingBeamDemoire() {
    return (
      <div className="bg-black">
      <TracingBeam className="bg-black">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <AnimatePresence>
            <TextGenerateEffecttt words={words} className="-mb-16" />
            {ireContent.map((item, index) => (
              <motion.div
                key={index} // Use index as the key
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, x: -50 }}
                className="h-[10rem] w-full flex items-start ml-32 -mt-6 justify-start" // Removed items-center
              >
                <PinContainer title={item.url} href={item.hurl}>
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[50rem] h-[5rem]">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="w-full items-center flex"
                    >
                      {item?.image && (
                        <Image
                          src={item.image}
                          alt="blog thumbnail"
                          height="40"
                          width="40"
                          className="mr-4 object-cover"
                        />
                      )}
                      <motion.p className="text-2xl whitespace-normal mb-1 md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                        {item.title}
                      </motion.p>
                    </motion.div>
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </TracingBeam>
    </div>
    )
 } 


 export function TracingBeamDemonewz() {
    return (
      <div className="bg-black">
      <TracingBeam className="bg-black">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <AnimatePresence>
            <TextGenerateEffecttt words={words} className="-mb-16" />
            {newzContent.map((item, index) => (
              <motion.div
                key={index} // Use index as the key
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, x: -50 }}
                className="h-[10rem] w-full flex items-start ml-32 -mt-6 justify-start" // Removed items-center
              >
                <PinContainer title={item.url} href={item.hurl}>
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[50rem] h-[5rem]">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="w-full items-center flex"
                    >
                      {item?.image && (
                        <Image
                          src={item.image}
                          alt="blog thumbnail"
                          height="40"
                          width="40"
                          className="mr-4 object-cover"
                        />
                      )}
                      <motion.p className="text-2xl whitespace-normal mb-1 md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                        {item.title}
                      </motion.p>
                    </motion.div>
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </TracingBeam>
    </div>
    )
 } 