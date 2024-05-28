"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../ui/tracking";
import { TextGenerateEffecttt } from "../ui/text-generate-effect";
import { AnimatePresence, motion } from "framer-motion";
import { Book, BookOpenCheck,CalendarDays, FileText,GraduationCap, HandCoins,Headset, Landmark, LibraryBig, MonitorPlay,  NotebookPen, Paperclip,  Plane, PlayCircle, School, Star, Users } from "lucide-react";
import {  CardItem, CardContainer } from "../ui/card3d";
import { DialogDemo } from "./dialog";

const words = `How do we help students?`

export function TracingBeamStudents() {
  return (
    <div className="bg-black">
    <TextGenerateEffecttt words={words} className="mb-6" />
    

    <TracingBeam className="bg-black">
      <div className="max-w-2xl mx-auto  antialiased pt-4 relative">
      <AnimatePresence>
      {dummyContent.map((item, index) => (
        <motion.div
          key={`content-${index}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
          className="mb-10 flex"
        >
          <div className="w-1/2 ">
            <p className="text-2xl mb-1 md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
              {item.title}
            </p>
            <div className="text-lg text-white prose prose-sm dark:prose-invert mb-4">
              {item.description}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }} // Add a small delay to start the animation after the text
            className="w-1/2 ml-40 "
          >
            {item?.image && (
                <CardContainer>
                <CardItem translateZ="100">
                
              <Image
                src={item.image}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="rounded-lg mb-10 object-cover"
              />
              </CardItem>
              </CardContainer>
              
            )}
          </motion.div>
        </motion.div>
      ))}
    </AnimatePresence>
    </div>
</TracingBeam>
    </div>


   
   
    
  );
}

const dummyContent = [
  {
    title: "Counselling",
    description: (
      <>
        <p className="text-sm mt-1 mb-6">
        Our counselling sessions will immensely benefit you in making the best academic decision suiting your career choices.


        </p>
        <h2 className="bg-clip-text  text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-4">
        Offerings
        </h2>
        
        <ul className="space-y-4">
       
        <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <Headset color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        Career-oriented counselling
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <LibraryBig color="#cd7edd" className="mr-2" /> {/* Icon */}
        Emphasis on futuristic courses and careers
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <Users color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        Interactive sessions with university delegates
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap mt-8"> {/* Adding flex container */}
        <DialogDemo/>
      </motion.li>

           
        </ul>
      </>
    ),
    badge: "For Students",
    image:
      "/images/1.png",
  },
  {
    title: "Test Preparation",
    description: (
        <>
          <p className="text-sm mt-1 mb-6">
          Effortlessly reach your highest potential test score with our certified, adept and dedicated tutors who will efficiently prepare you for your desired tests.
  
  
          </p>
          <h2 className="bg-clip-text  text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-4">
          Offerings
          </h2>
          
          <ul className="space-y-4">
         
          <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
          <MonitorPlay color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
          Interactive classrooms & free demo sessions
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
          <LibraryBig color="#cd7edd" className="mr-2" /> {/* Icon */}
          Study material that’s simple yet highly effective
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
          <BookOpenCheck color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
          Score oriented tutorials & mock tests
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap mt-8"> {/* Adding flex container */}
          <DialogDemo/>
        </motion.li>
  
             
          </ul>
        </>
      ),
    badge: "For Students",
    image:
      "/images/2.png",
  },
  {
    title: "Course, Country & University selection",
    description: (
        <>
          <p className="text-sm mt-1 mb-6">
          We help you choose the ideal course, university & country that perfectly match your career, academic and budget preferences.


  
  
          </p>
          <h2 className="bg-clip-text  text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-4">
          Offerings
          </h2>
          
          <ul className="space-y-4">
         
          <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
          <Star color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
          Make precise academic and career decisions
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm "> {/* Adding flex container */}
          <School color="#cd7edd" className="mr-2" /> {/* Icon */}
          University comparison – rankings, courses & scholarships
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm "> {/* Adding flex container */}
          <Book color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
          Course options across 750+ universities in 31 countries
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap mt-8"> {/* Adding flex container */}
          <DialogDemo/>
        </motion.li>
  
             
          </ul>
        </>
      ),
    badge: "For Students",
    image:
      "/images/3.png",
  },
  {
    title: "Application & Admission",
    description: (
        <>
          <p className="text-sm mt-1 mb-6">
          Choose the right intake, apply timely and smartly in courses and universities that are your right fit and receive admits/offers in no time.
  
          </p>
          <h2 className="bg-clip-text  text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-4">
          Offerings
          </h2>
          
          <ul className="space-y-4">
         
          <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
          <Paperclip color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
          Flawless applications - assured admits
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
          <LibraryBig color="#cd7edd" className="mr-2" /> {/* Icon */}
          High quality SOPs, LORs and Resumes
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm "> {/* Adding flex container */}
          <Star color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
          Real time application tracking through with universities
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap mt-8"> {/* Adding flex container */}
          <DialogDemo/>
        </motion.li>
  
             
          </ul>
        </>
      ),
    badge: "For Universities",
    image:
      "/images/4.png",
  },
  {
    title: "Scholarships",
    description: (
      <>
        <p className="text-sm mt-1 mb-6">
        Our global universities have plenty of scholarships on offer and we will help you identify and apply for the ones you deserve the most.


        </p>
        <h2 className="bg-clip-text  text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-4">
        Offerings
        </h2>
        
        <ul className="space-y-4">
       
        <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <GraduationCap color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        Alerts on latest and high value scholarships
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <Headset color="#cd7edd" className="mr-2" /> {/* Icon */}
        Guidance on ‘how’ to apply for scholarships
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
        <NotebookPen color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
        Assistance for scholarship essays
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         className="flex items-center text-sm whitespace-nowrap mt-8"> {/* Adding flex container */}
        <DialogDemo/>
      </motion.li>

           
        </ul>
      </>
    ),
    badge: "For Students",
    image:
      "/images/1.png",
  },
  {
    title: "Internships",
    description: (
        <>
          <p className="text-sm mt-1 mb-6">
          We know how important internships are to your profile and thus our course recommendations are full of options with inbuilt internships.


  
  
          </p>
          <h2 className="bg-clip-text  text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-4">
          Offerings
          </h2>
          
          <ul className="space-y-4">
         
          <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm "> {/* Adding flex container */}
          <Star color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
          Apply for programs offering guaranteed internships
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
          <Headset color="#cd7edd" className="mr-2" /> {/* Icon */}
          Guidance on paid/unpaid internships
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
          <CalendarDays color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
          Know your placement periods and stipends
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap mt-8"> {/* Adding flex container */}
          <DialogDemo/>
        </motion.li>
  
             
          </ul>
        </>
      ),
    badge: "For Students",
    image:
      "/images/2.png",
  },
  {
    title: "Education Loan",
    description: (
        <>
          <p className="text-sm mt-1 mb-6">
          Availing an education loan to study in your dream university has never been easier!


  
  
          </p>
          <h2 className="bg-clip-text  text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-4">
          Offerings
          </h2>
          
          <ul className="space-y-4">
         
          <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm "> {/* Adding flex container */}
          <HandCoins color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
          Study Loans through 17+ leading Banks & NBFCs
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm "> {/* Adding flex container */}
          <Landmark color="#cd7edd" className="mr-2" /> {/* Icon */}
          Financial structuring to suit your university
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm "> {/* Adding flex container */}
          <FileText color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
          Hassle free documentation
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap mt-8"> {/* Adding flex container */}
          <DialogDemo/>
        </motion.li>
  
             
          </ul>
        </>
      ),
    badge: "For Students",
    image:
      "/images/3.png",
  },
  {
    title: "Visa Processing",
    description: (
        <>
          <p className="text-sm mt-1 mb-6">
          Our skilled visa experts will help you prepare and present your visa documents to Embassies and High Commissions to ensure a successful visa outcomes in minimal time.


  
          </p>
          <h2 className="bg-clip-text  text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-4">
          Offerings
          </h2>
          
          <ul className="space-y-4">
         
          <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap"> {/* Adding flex container */}
          <FileText color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
          Impeccable guidance on visa documentation
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm "> {/* Adding flex container */}
          <Plane color="#cd7edd" className="mr-2" /> {/* Icon */}
          Excellent visa success ratio across all countries
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm "> {/* Adding flex container */}
          <PlayCircle color="#cd7edd" className="mr-2" absoluteStrokeWidth /> {/* Icon */}
          Mock visa interviews
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           className="flex items-center text-sm whitespace-nowrap mt-8"> {/* Adding flex container */}
          <DialogDemo/>
        </motion.li>
  
             
          </ul>
        </>
      ),
    badge: "For Universities",
    image:
      "/images/4.png",
  },
  
//  
 
];