import { useState, useEffect } from "react";
import { Home } from "lucide-react";

export const HomeButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isScrolled) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={handleClick}
        aria-label="Home anchor"
        className="w-[50px] h-[50px] rounded-full bg-[#4d8f8b] hover:bg-[#3f7774] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        <Home className="w-5 h-5 stroke-[2] transition-transform group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
};
