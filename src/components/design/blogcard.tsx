'use client'
import { FC } from 'react';
import { motion } from 'framer-motion';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Image from 'next/image';

interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  about: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  const { title, image, description, about} = blog;

 
    return (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-md shadow-md p-4"
        >
          <Image src={image} alt={title}  className="w-full h-[15rem] object-cover mb-4 rounded-md " />
          <h2 className="text-lg font-bold mb-2 text-center">{title}</h2>
          
          
          {/* Assuming HoverCard, HoverCardTrigger, HoverCardContent, and Separator are custom components */}
          <HoverCard>
            <HoverCardTrigger>
              <p className="text-sky-800 text-center hover:underline cursor-pointer">
                Know more
              </p>
            </HoverCardTrigger>
            <HoverCardContent>
              <span className="text-sky-800">About: </span> {about}
            </HoverCardContent>
          </HoverCard>
          <Separator className='mb-3 mt-4' />
          
         <Button  className='items-center justify-center  ml-[9rem]' >
            Open
         </Button>
        </motion.div>
  );
};

export default BlogCard;
