'use client'
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenCheck, GraduationCap, Mail, MapPinned, MonitorDot, PhoneCall, Timer } from "lucide-react";
import React from "react";

const MapComponent = () => {
    return (
      <div className="flex w-full h-[40rem]  bg-black">
          <AnimatePresence>
         <motion.div
            
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: -50 }}
            className=" w-1/2 h-[37rem] mt-12 ml-4 mr-4 mb-4"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Head Office
          </h1>
            
          <ul className=" p-12 space-y-8 text-lg text-white prose prose-sm dark:prose-invert mb-4">
       
       <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm w-full whitespace-normal "> {/* Adding flex container */}
        
       <MapPinned color="#cd7edd" size={50} className="mr-4"  /> {/* Icon */}
       16-2-741/C/4/1 4th Floor, Above Royal Enfield Showroom TV Tower, x road, Moosarambagh, Malakpet, Telangana 500036
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm "> {/* Adding flex container */}
       <PhoneCall color="#cd7edd" className="mr-4" /> {/* Icon */}
       +91 89778 94645
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm "> {/* Adding flex container */}
       <Mail color="#cd7edd" className="mr-4" absoluteStrokeWidth /> {/* Icon */}
       Overseastexas@gmail.com
     </motion.li>
     <motion.li
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center text-sm "> {/* Adding flex container */}
       <Timer color="#cd7edd" className="mr-4" absoluteStrokeWidth /> {/* Icon */}
       Monday to Saturday : 10:00 AM to 6:30 PM, Sunday : Closed
     </motion.li>


          
       </ul>
          </motion.div>
       
        {/* Left half containing the map */}
        
        <motion.div
            
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: -50 }}
            className=" w-1/2 h-[37rem] mt-4 ml-8 mr-4 mb-4 p-12"
          >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.8792198526985!2d78.51267777517697!3d17.369543903318828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d6dbaaffdb%3A0x3029242ef9f041d0!2sTexas%20Overseas%20Educational%20Consultants!5e0!3m2!1sen!2sin!4v1709531328561!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </motion.div>
        {/* Right half containing the <ul> */}
        </AnimatePresence>
      </div>
    );
  };
  
  export default MapComponent;
  
  