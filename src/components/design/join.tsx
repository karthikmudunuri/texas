'use client'
import React from "react";
import { BackgroundBeams } from "../ui/beams";
import { Button } from "../ui/button";
import { DialogDemo, DialogDemousa } from "../../components/design/dialog";
export function BackgroundBeamsDemo() {
  return (
    <div className="h-[30rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Stay updated with us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          welcome to Texas overseas education, we are here to help you with your goals
        </p>
        <div className="flex justify-center items-center mt-4">
          <input
            type="email"
            placeholder="              Enter your mail here"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-[20rem] h-[2rem] bg-neutral-950 placeholder:text-neutral-700"
          />
          <div className="ml-4 z-10">
            <Button
              variant={'outline'}
              
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export function BackgroundBeamsusa() {
    return (
      <div className="h-[30rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Need guidance?
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Let us help you.
          </p>
          <div className="flex justify-center items-center mt-4 z-10">
            <DialogDemousa />
          </div>
        </div>
        <BackgroundBeams />
      </div>
    );
  }
  