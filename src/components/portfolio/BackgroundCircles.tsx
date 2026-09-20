import { motion } from "framer-motion";

export const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center -z-10"
    >
      <div className="absolute border border-slate-300/40 rounded-full h-[200px] w-[200px] animate-ping mt-52" />
      <div className="absolute border border-slate-300/30 rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-slate-300/30 rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border border-[#4a7c8e]/40 rounded-full opacity-30 h-[650px] w-[650px] animate-pulse mt-52" />
      <div className="absolute border border-slate-300/20 rounded-full h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
};
