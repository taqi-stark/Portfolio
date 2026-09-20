import React, { useRef, useEffect } from "react";

interface HorizontalSwipeContainerProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  enableWheelScroll?: boolean;
}

export const HorizontalSwipeContainer: React.FC<HorizontalSwipeContainerProps> = ({
  children,
  className = "",
  itemClassName = "",
  enableWheelScroll = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !enableWheelScroll) return;

    // Convert standard vertical wheel ticks into horizontal scrolling
    // while preserving native horizontal trackpad gestures
    const handleWheel = (e: WheelEvent) => {
      // If the event already has significant deltaX (like a trackpad horizontal swipe), let native handle it
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }

      // If standard wheel has deltaY, scroll horizontally
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY * 1.5,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [enableWheelScroll]);

  return (
    <div
      ref={containerRef}
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
