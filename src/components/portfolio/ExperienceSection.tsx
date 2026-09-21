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
        return <LimeOxBadge className="w-16 h-16 sm:w-20 sm:h-20" />;
      case "valueprice":
        return <ValuePriceBadge className="w-16 h-16 sm:w-20 sm:h-20" />;
      case "agritech":
        return <AgritechBadge className="w-16 h-16 sm:w-20 sm:h-20" />;
      case "tensora":
        return <TensoraBadge className="w-16 h-16 sm:w-20 sm:h-20" />;
      case "keythree":
        return <KeyThreeDataBadge className="w-16 h-16 sm:w-20 sm:h-20" />;
      case "studiolabs":
        return <StudioLabsBadge className="w-16 h-16 sm:w-20 sm:h-20" />;
      default:
        return <LimeOxBadge className="w-16 h-16 sm:w-20 sm:h-20" />;
    }
  };

  return (
    <section
      id="experience"
      className="h-auto md:h-screen md:min-h-screen snap-start w-full flex flex-col justify-center items-center relative overflow-x-hidden md:overflow-hidden bg-white py-8 md:py-12"
    >
      <div className="text-center mb-4 sm:mb-6 z-10 shrink-0 px-4">
        <h3 className="uppercase text-sm sm:text-[13px] tracking-[0.35em] text-black/70 md:text-[#9a9fa5] font-medium">
          EXPERIENCE
        </h3>
      </div>

      <div className="w-full relative">
        <HorizontalSwipeContainer
          className="select-none items-stretch"
          itemClassName="w-[100vw] max-w-[100vw] flex justify-center items-center px-5 sm:px-8"
        >
          {portfolio.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex flex-col items-center w-full max-w-[340px] sm:max-w-[520px] md:max-w-[620px]"
            >
              {/* Fixed equal card size on all breakpoints */}
              <div className="w-full h-[360px] sm:h-[390px] md:h-[400px] rounded-[24px] bg-white border border-[#e2e6e8] shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-5 sm:p-8 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)]">
                <div className="mb-3 flex items-center justify-center shrink-0">
                  {renderLogoBadge(exp.logoType)}
                </div>

                <h4 className="font-display font-bold text-lg sm:text-[23px] md:text-[24px] text-black tracking-tight leading-snug min-h-[28px] sm:min-h-[32px] line-clamp-1">
                  {exp.role}
                </h4>

                <p className="font-semibold text-sm sm:text-[18px] text-[#4d8f8b] mt-1.5 min-h-[40px] sm:min-h-[48px] flex flex-col sm:block justify-center">
                  <span className="line-clamp-1">{exp.company}</span>
                  {exp.location && (
                    <span className="text-[11px] sm:text-sm font-normal text-[#9a9fa5] block sm:inline sm:ml-2 line-clamp-1">
                      · {exp.location}
                    </span>
                  )}
                </p>

                {/* Fixed-height tech row so icon count doesn't change card height */}
                <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mt-3 sm:mt-4 h-12 sm:h-[50px] shrink-0">
                  {exp.tech.slice(0, 5).map((techName) => (
                    <div
                      key={techName}
                      className="w-11 h-11 sm:w-[50px] sm:h-[50px] rounded-full bg-white border border-[#e2e6e8] shadow-xs flex items-center justify-center"
                      title={techName}
                    >
                      <TechIcon name={techName} className="w-7 h-7 sm:w-[34px] sm:h-[34px]" />
                    </div>
                  ))}
                </div>

                {exp.highlight && (
                  <p className="mt-auto pt-4 text-[13px] sm:text-[15px] leading-relaxed text-black/75 font-sans line-clamp-3">
                    {exp.highlight}
                  </p>
                )}
              </div>

              <p className="mt-3 uppercase text-[10px] sm:text-xs tracking-[0.25em] text-[#9a9fa5] font-mono text-center shrink-0">
                {exp.period}
              </p>
            </motion.div>
          ))}
        </HorizontalSwipeContainer>
      </div>
    </section>
  );
};
