"use client";
import { useEffect } from "react";
import { animate, motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black  opacity-0 whitespace-pre-line font-dancing-script"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-6xl font-dancing-script ">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export const TextGenerateEffectt = ({
    words,
    className,
  }: {
    words: string;
    className?: string;
  }) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }, [scope.current]);
  
    const renderWords = () => {
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className="dark:text-white text-black  opacity-0 whitespace-pre-line"
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      );
    };
  
    return (
      <div className={cn("font-bold", className)}>
        <div className="mt-4">
          <div className=" dark:text-white text-black text-lg leading-snug tracking-wide">
            {renderWords()}
          </div>
        </div>
      </div>
    );
  };

  export const TextGenerateEffecttt = ({
    words,
    className,
  }: {
    words: string;
    className?: string;
  }) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }, [scope.current]);
  
    const renderWords = () => {
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className="text-3xl opacity-0  mb-1 md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      );
    };
  
    return (
      <div className={cn("font-bold", className)}>
        <div className="mt-4">
          <div className=" text-3xl   mb-1 md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold leading-snug tracking-wide">
            {renderWords()}
          </div>
        </div>
      </div>
    );
  };
  export const TextGenerateEffectttt = ({
    words,
    className,
  }: {
    words: string;
    className?: string;
  }) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }, [scope.current]);
  
    const renderWords = () => {
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className="dark:text-white text-white  opacity-0 whitespace-normal"
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      );
    };
  
    return (
      <div className={cn("font-bold", className)}>
        <div className="mt-4">
          <div className=" dark:text-white text-white font-sans font-normal text-sm leading-snug tracking-wide">
            {renderWords()}
          </div>
        </div>
      </div>
    );
  };