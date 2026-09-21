import { portfolio } from "@/content/portfolio";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative h-auto md:h-screen min-h-0 md:min-h-screen snap-start w-full flex flex-col md:flex-row items-stretch overflow-visible md:overflow-hidden bg-[#f7f8f9] pt-16 pb-10 md:pt-0 md:pb-0"
    >
      {/* Left Column: Circular avatar on mobile, inset rounded photo on desktop */}
      <div className="w-full md:w-1/2 flex items-center justify-center pt-4 pb-4 md:py-10 md:h-full shrink-0 px-6">
        <img
          src="/profile.jpg"
          alt={portfolio.name}
          className="w-[120px] h-[120px] aspect-square rounded-full object-cover object-center filter grayscale brightness-95 contrast-105 block shadow-[0_12px_32px_rgba(0,0,0,0.12)] md:w-[80%] md:max-w-[420px] md:h-auto md:aspect-[3/4] md:rounded-[24px]"
        />
      </div>

      {/* Right Column: Padded Content Block */}
      <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 py-6 md:py-12 text-left overflow-visible md:overflow-y-auto">
        <div className="max-w-[550px] w-full my-auto flex flex-col justify-center">
          <p className="uppercase text-xs sm:text-[13px] tracking-[0.3em] text-[#9a9fa5] font-medium mb-3">
            ABOUT
          </p>

          <h2 className="font-display font-bold text-2xl sm:text-[34px] md:text-[36px] text-[#1c1c1c] tracking-tight mb-6">
            Here is a{" "}
            <span className="underline decoration-[#4d8f8b] decoration-[2px] underline-offset-8">
              little
            </span>{" "}
            background
          </h2>

          <div className="space-y-4 text-[#1c1c1c]/85 text-sm leading-[1.65] sm:text-base sm:leading-[1.8] sm:text-[17px] font-sans">
            <p>
              Hey there 👋 My name is Ali Taqi, an AI/ML and Backend Engineer obsessed with building intelligent systems that run reliably at production scale.
            </p>
            <p className="hidden md:block">
              {portfolio.bio}
            </p>
            <p className="hidden md:block">
              I architect end-to-end pipelines: from low-latency ML inference endpoints (&lt;30ms) to resilient microservices using FastAPI, Redis, Docker, and Kafka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
