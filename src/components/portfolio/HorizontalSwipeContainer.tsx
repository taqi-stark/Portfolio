import React from "react";

interface HorizontalSwipeContainerProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
}

export const HorizontalSwipeContainer: React.FC<HorizontalSwipeContainerProps> = ({
  children,
  className = "",
  itemClassName = "",
}) => {
  return (
    <div
      className={`w-full overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory scrollbar-none overscroll-x-contain ${className}`}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {React.Children.map(children, (child, idx) => {
        if (!child) return null;
        return (
          <div
            key={idx}
            className={`snap-center shrink-0 ${itemClassName}`}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};
