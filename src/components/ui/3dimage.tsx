import React, { createContext, useState, useContext, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";
// Create the context
const MouseEnterContext = createContext<boolean | undefined>(undefined);

// Provider component to wrap around the components that need access to the mouse enter state
export const MouseEnterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    return (
        <MouseEnterContext.Provider value={isMouseEntered}>
            {children}
        </MouseEnterContext.Provider>
    );
};

// Custom hook to use the mouse enter state
export const useMouseEnter = (): boolean => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

// CardContainer component
export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "py-20 flex items-center justify-center",
        containerClassName
      )}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className={cn(
          "flex items-center justify-center relative transition-all duration-200 ease-linear",
          className
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
};

// CardItem component
export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  rotateX = 0,
  rotateY = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  rotateX?: number | string;
  rotateY?: number | string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMouseEntered = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    } else {
      ref.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};
