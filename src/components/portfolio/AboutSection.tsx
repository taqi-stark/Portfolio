import { portfolio } from "@/content/portfolio";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative h-screen min-h-screen snap-start w-full flex flex-col md:flex-row items-stretch overflow-hidden bg-[#f7f8f9]"
    >
      {/* Left Column: Full-Bleed Grayscale Photograph (Edge-to-Edge, Full Viewport Height) */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-slate-200 shrink-0">
        <img
          src="/profile.jpg"
          alt={portfolio.name}
          className="w-full h-full object-cover object-center filter grayscale brightness-95 contrast-105 block"
        />
      </div>

      {/* Right Column: Padded Content Block (60-80px padding, vertically centered) */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 py-12 text-left overflow-y-auto">
        <div className="max-w-[550px] w-full my-auto flex flex-col justify-center">
          {/* Standard Spec Label */}
          <p className="uppercase text-xs sm:text-[13px] tracking-[0.3em] text-[#9a9fa5] font-medium mb-3">
            ABOUT
          </p>

          {/* Heading with Underlined "little" */}
          <h2 className="font-display font-bold text-2xl sm:text-[34px] md:text-[36px] text-[#1c1c1c] tracking-tight mb-6">
            Here is a{" "}
            <span className="underline decoration-[#4d8f8b] decoration-[2px] underline-offset-8">
              little
            </span>{" "}
            background
          </h2>

          {/* Body Paragraphs with Inline Emojis */}
          <div className="space-y-4 text-[#1c1c1c]/85 text-base sm:text-[17px] leading-[1.8] font-sans">
            <p>
              Hey there 👋 I&apos;m Ali, an AI/ML and Backend Engineer obsessed with building intelligent systems that run reliably at production scale.
            </p>
            <p>
              {portfolio.bio}
            </p>
            <p>
              I architect end-to-end pipelines: from low-latency ML inference endpoints (&lt;30ms) to resilient microservices using FastAPI, Redis, Docker, and Kafka. Outside of engineering, you will find me cycling around the city or exploring nature 🚲 ⛰️.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

