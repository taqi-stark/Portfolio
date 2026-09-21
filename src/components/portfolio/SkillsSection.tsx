import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/content/portfolio";
import { TechIcon } from "./TechBrandIcons";

const SM_BREAKPOINT = 640; // Tailwind `sm`
const COLS_MOBILE = 3;
const COLS_DESKTOP = 5;

export const SkillsSection = () => {
  const [cols, setCols] = useState(COLS_DESKTOP);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${SM_BREAKPOINT}px)`);
    const update = () => setCols(mq.matches ? COLS_DESKTOP : COLS_MOBILE);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const totalRows = Math.ceil(portfolio.skills.length / cols);
  const topHalfRows = Math.floor(totalRows / 2);

  return (
    <section
      id="skills"
      className="min-h-screen h-auto md:h-screen snap-start w-full flex flex-col items-center justify-center relative overflow-visible md:overflow-hidden bg-[#f7f8f9] pt-20 pb-24 md:py-16 px-4"
    >
      {/* Centered Instruction Label */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12 z-10"
      >
        <p className="uppercase text-xs sm:text-[13px] tracking-[0.28em] text-[#9a9fa5] font-medium">
          HOVER OVER A SKILL FOR CURRENT PROFICIENCY
        </p>
      </motion.div>

      {/* Evenly Spaced Grid: 5 columns × 3 rows on desktop / 3 cols on mobile */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-6 sm:gap-y-8 gap-x-5 sm:gap-x-8 md:gap-x-10 max-w-[420px] sm:max-w-[620px] md:max-w-[700px] mx-auto items-center justify-items-center">
        {portfolio.skills.map((skill, idx) => {
          const row = Math.floor(idx / cols);
          const isTopHalf = row < topHalfRows;
          const fromX = isTopHalf ? -40 : 40;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: fromX }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: "easeOut" }}
              className="group relative w-[76px] h-[76px] sm:w-[84px] sm:h-[84px] rounded-full bg-white border border-[#d5dadd] shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.08] hover:shadow-[0_8px_20px_rgba(0,0,0,0.14)]"
              title={`${skill.name} - ${skill.proficiency}%`}
            >
              {/* Front: Brand-colored Logo Icon centered inside (70-75% diameter, 100% saturation & opacity) */}
              <div className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-75 select-none opacity-100 filter-none">
                <TechIcon name={skill.icon} className="w-full h-full object-contain" />
              </div>

              {/* Hover State: Icon replaced by proficiency percentage in bold text */}
              <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white select-none px-1 text-center">
                <span className="font-display font-bold text-base sm:text-[19px] text-[#1c1c1c]">
                  {skill.proficiency}%
                </span>
                <span className="text-[9px] font-mono text-[#4d8f8b] truncate max-w-[64px] block">
                  {skill.name.split(" ")[0]}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
