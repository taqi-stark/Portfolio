import { useEffect, useState } from "react";

export const ScrollIndicator = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const percent = Math.min(1, Math.max(0, window.scrollY / scrollHeight));
        setScrollPercent(percent);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-40 h-[220px] w-1 flex items-center justify-center pointer-events-none"
    >
      {/* Background Subtle Track */}
      <div className="w-[2px] h-full bg-[#d8dcdf]/60 rounded-full relative">
        {/* Floating Teal Indicator Bar (~4px wide, ~70px tall) */}
        <div
          className="absolute -left-[1px] w-[4px] h-[70px] bg-[#4d8f8b] rounded-full shadow-sm transition-all duration-150 ease-out"
          style={{
            top: `${scrollPercent * (220 - 70)}px`,
          }}
        />
      </div>
    </div>
  );
};
