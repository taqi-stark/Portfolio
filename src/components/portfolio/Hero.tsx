import { useEffect, useState } from "react";
import { portfolio } from "@/content/portfolio";

export const Hero = () => {
  const phrases = [
    "I am Ali_Taqi",
    "I like building scalable backends ⚡",
    "I like crafting ML pipelines 🧠",
    "I like solving complex problems 💡"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-screen snap-start flex flex-col items-center justify-center text-center overflow-hidden bg-[#f7f8f9] px-4"
    >
      {/* Large Decorative Circle Outline (~620px diameter, 1px #d8dcdf) */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] sm:w-[620px] sm:h-[620px] rounded-full border border-[#d8dcdf] pointer-events-none -z-0"
      />

      {/* Content Stack inside the Circle */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        {/* Circular Grayscale Profile Photo (~145px diameter) with water ripple */}
        <div className="relative w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] mb-6 flex-shrink-0 flex items-center justify-center">
          <span className="profile-ripple" aria-hidden="true" />
          <span className="profile-ripple" aria-hidden="true" />
          <span className="profile-ripple" aria-hidden="true" />
          <div className="relative z-10 w-full h-full rounded-full overflow-hidden border border-[#d8dcdf] bg-white shadow-sm">
            <img
              src="/profile.jpg"
              alt={portfolio.name}
              className="w-full h-full object-cover object-top filter grayscale"
            />
          </div>
        </div>

        {/* Uppercase Role Label */}
        <p className="uppercase text-xs sm:text-[13px] tracking-[0.3em] text-[#9a9fa5] font-medium mb-3">
          SOFTWARE ENGINEER
        </p>

        {/* Display Headline with Typewriter Loop & Blinking Teal Cursor */}
        <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-[54px] text-[#1c1c1c] tracking-tight min-h-[56px] sm:min-h-[72px] flex items-center justify-center px-4">
          <span>{currentText}</span>
          <span className="typewriter-cursor" />
        </h1>

        {/* Horizontal Nav Row: ABOUT · EXPERIENCE · SKILLS · PROJECTS */}
        <nav
          aria-label="Section navigation"
          className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12"
        >
          {portfolio.quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="uppercase text-xs sm:text-[13px] tracking-[0.28em] text-[#9a9fa5] hover:text-[#1c1c1c] font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};
