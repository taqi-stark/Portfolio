import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Instagram, Mail } from "lucide-react";
import { portfolio } from "@/content/portfolio";

export const Header = () => {
  return (
    <>
      {/* 5px Solid Black Bar fixed to the very top edge */}
      <div className="fixed top-0 left-0 right-0 h-[5px] bg-[#000000] z-50 pointer-events-none" />

      {/* Global Fixed Top Navigation Chrome */}
      <header className="fixed top-[5px] left-0 right-0 z-40 pointer-events-none">
        <div className="w-full flex items-center justify-between px-6 sm:px-8 md:px-10 py-5">
          {/* Top-Left: 4 outline-style social icons (~20px each, #7a7f85, ~16px gap) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 text-[#7a7f85] pointer-events-auto"
          >
            <a
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#7a7f85] hover:text-[#000000] transition-colors p-1"
            >
              <Linkedin className="w-5 h-5 stroke-[1.75]" />
            </a>
            <a
              href={portfolio.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-[#7a7f85] hover:text-[#000000] transition-colors p-1"
            >
              <Twitter className="w-5 h-5 stroke-[1.75]" />
            </a>
            <a
              href={portfolio.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#7a7f85] hover:text-[#000000] transition-colors p-1"
            >
              <Github className="w-5 h-5 stroke-[1.75]" />
            </a>
            <a
              href={portfolio.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#7a7f85] hover:text-[#000000] transition-colors p-1"
            >
              <Instagram className="w-5 h-5 stroke-[1.75]" />
            </a>
          </motion.div>

          {/* Top-Right: Mail outline icon + "GET IN TOUCH" label in uppercase small caps */}
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            href={portfolio.socials.email}
            className="flex items-center gap-2 text-[#7a7f85] hover:text-[#000000] transition-colors pointer-events-auto uppercase text-xs tracking-[0.28em] font-medium"
          >
            <Mail className="w-4 h-4 stroke-[1.75]" />
            <span>GET IN TOUCH</span>
          </motion.a>
        </div>
      </header>
    </>
  );
};
