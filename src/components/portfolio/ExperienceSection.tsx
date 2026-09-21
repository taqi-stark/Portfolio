import { motion } from "framer-motion";
import { portfolio } from "@/content/portfolio";
import { HorizontalSwipeContainer } from "./HorizontalSwipeContainer";
import {
  TechIcon,
  LimeOxBadge,
  ValuePriceBadge,
  AgritechBadge,
  TensoraBadge,
  KeyThreeDataBadge,
  StudioLabsBadge,
} from "./TechBrandIcons";

export const ExperienceSection = () => {
  const renderLogoBadge = (logoType?: string) => {
    switch (logoType) {
      case "limeox":
        return <LimeOxBadge className="w-20 h-20 md:w-22 md:h-22" />;
      case "valueprice":
        return <ValuePriceBadge className="w-20 h-20 md:w-22 md:h-22" />;
      case "agritech":
        return <AgritechBadge className="w-20 h-20 md:w-22 md:h-22" />;
      case "tensora":
        return <TensoraBadge className="w-20 h-20 md:w-22 md:h-22" />;
      case "keythree":
        return <KeyThreeDataBadge className="w-20 h-20 md:w-22 md:h-22" />;
      case "studiolabs":
        return <StudioLabsBadge className="w-20 h-20 md:w-22 md:h-22" />;
      default:
        return <LimeOxBadge className="w-20 h-20 md:w-22 md:h-22" />;
    }
  };

  return (
    <section
      id="experience"
      className="min-h-screen h-auto md:h-screen snap-start w-full flex flex-col justify-center items-center relative overflow-visible md:overflow-hidden bg-[#f7f8f9] pt-20 pb-24 md:py-12 px-4"
    >
      {/* Centered "EXPERIENCE" Label */}
      <div className="text-center mb-6 sm:mb-8 z-10 shrink-0">
        <h3 className="uppercase text-sm sm:text-[13px] tracking-[0.35em] text-[#1c1c1c]/70 md:text-[#9a9fa5] font-medium">
          EXPERIENCE
        </h3>
      </div>

      {/* Horizontal Two-Finger Swipe / Trackpad Scroll Container */}
      <div className="w-full max-w-[1400px] relative px-2 sm:px-6">
        <HorizontalSwipeContainer
          className="py-4 select-none"
          itemClassName="px-3 sm:px-4"
        >
          {portfolio.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Elevated Card */}
              <div className="w-[320px] xs:w-[380px] sm:w-[520px] md:w-[620px] lg:w-[660px] min-h-[340px] md:min-h-[380px] rounded-[24px] bg-gradient-to-b from-[#ffffff] to-[#f4f6f8] border border-[#e2e6e8] shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-9 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)] hover:scale-[1.01]">
                {/* Top section: Logo, Role, Company, Location */}
                <div className="flex flex-col items-center w-full">
                  <div className="mb-3 sm:mb-4 flex items-center justify-center">
                    {renderLogoBadge(exp.logoType)}
                  </div>

                  <h4 className="font-display font-bold text-xl sm:text-[23px] md:text-[24px] text-[#1c1c1c] tracking-tight">
                    {exp.role}
                  </h4>

                  <p className="font-semibold text-base sm:text-[18px] text-[#4d8f8b] mt-1.5">
                    {exp.company}
                    {exp.location && (
                      <span className="text-xs sm:text-sm font-normal text-[#9a9fa5] block sm:inline sm:ml-2">
                        · {exp.location}
                      </span>
                    )}
                  </p>

                  {/* Tech-Stack Icon Badges */}
                  <div className="flex items-center justify-center gap-3 sm:gap-3.5 mt-4 sm:mt-5 flex-wrap">
                    {exp.tech.map((techName) => (
                      <div
                        key={techName}
                        className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full bg-white border border-[#e2e6e8] shadow-xs flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                        title={techName}
                      >
                        <TechIcon name={techName} className="w-8 h-8 sm:w-[34px] sm:h-[34px]" />
                      </div>
                    ))}
                  </div>

                  {/* One-sentence internship highlight */}
                  {exp.highlight && (
                    <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-[#1c1c1c]/75 font-sans max-w-[480px]">
                      {exp.highlight}
                    </p>
                  )}
                </div>
              </div>

              {/* Date Range sits BELOW the card */}
              <p className="mt-3.5 uppercase text-xs tracking-[0.25em] text-[#9a9fa5] font-mono text-center">
                {exp.period}
              </p>
            </motion.div>
          ))}
        </HorizontalSwipeContainer>
      </div>
    </section>
  );
};
