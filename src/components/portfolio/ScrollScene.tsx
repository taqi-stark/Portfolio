import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Code2, Database, Server, Terminal as TerminalIcon, Boxes, Braces, Cloud, Container } from "lucide-react";
import { Laptop3D } from "./Laptop3D";

/**
 * Animated, scroll-reactive background:
 *  - Smoothly shifts the page background color across sections.
 *  - Two large color blobs drift with parallax.
 *  - Floating tech glyphs move + rotate as you scroll.
 */
export const ScrollScene = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.4 });

  // Background color per section (Midnight Indigo → deep violet → ink → teal-ink → indigo).
  const background = useTransform(
    progress,
    [0, 0.18, 0.4, 0.6, 0.8, 1],
    [
      "hsl(0 0% 100%)",
      "hsl(258 60% 60%)",
      "hsl(330 70% 35%)",
      "hsl(180 80% 25%)",
      "hsl(240 60% 10%)",
      "hsl(0 0% 0%)",
    ]
  );

  // Two parallax glow blobs.
  const blobAY = useTransform(progress, [0, 1], ["0%", "120%"]);
  const blobAX = useTransform(progress, [0, 1], ["0%", "20%"]);
  const blobBY = useTransform(progress, [0, 1], ["0%", "-80%"]);
  const blobBX = useTransform(progress, [0, 1], ["0%", "-15%"]);
  const blobHue = useTransform(progress, [0, 1], [243, 190]);

  return (
    <>
      {/* Animated base color */}
      <motion.div
        className="pointer-events-none fixed inset-0 -z-30"
        style={{ backgroundColor: background }}
      />

      {/* Drifting glow blobs */}
      <motion.div
        className="pointer-events-none fixed -z-20 h-[60vmax] w-[60vmax] rounded-full blur-3xl"
        style={{
          top: "-20vmax",
          left: "-10vmax",
          x: blobAX,
          y: blobAY,
          background: useTransform(blobHue, (h) => `radial-gradient(circle, hsl(${h} 90% 55% / 0.35), transparent 60%)`),
        }}
      />
      <motion.div
        className="pointer-events-none fixed -z-20 h-[55vmax] w-[55vmax] rounded-full blur-3xl"
        style={{
          bottom: "-15vmax",
          right: "-10vmax",
          x: blobBX,
          y: blobBY,
          background: useTransform(blobHue, (h) => `radial-gradient(circle, hsl(${(h + 60) % 360} 85% 55% / 0.28), transparent 60%)`),
        }}
      />

      {/* Subtle dotted grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-50" />

      {/* 3D laptop that rotates with scroll */}
      <Laptop3D progress={progress} />

      {/* Floating tech glyphs with parallax */}
      <FloatingGlyphs progress={progress} />
    </>
  );
};

const glyphs = [
  { Icon: Braces,    top: "12%", left: "6%",  size: 72,  range: [-80, 140],  rot: [-12, 18] },
  { Icon: Code2,     top: "28%", left: "88%", size: 56,  range: [60, -180],  rot: [10, -22] },
  { Icon: Database,  top: "48%", left: "4%",  size: 64,  range: [-40, 220],  rot: [-6, 24] },
  { Icon: Server,    top: "62%", left: "92%", size: 60,  range: [120, -160], rot: [8, -18] },
  { Icon: Cloud,     top: "78%", left: "10%", size: 80,  range: [-60, 180],  rot: [-10, 16] },
  { Icon: Container, top: "88%", left: "82%", size: 58,  range: [40, -140],  rot: [12, -20] },
  { Icon: TerminalIcon, top: "8%",  left: "70%", size: 48, range: [-30, 200], rot: [-8, 22] },
  { Icon: Boxes,     top: "40%", left: "78%", size: 52,  range: [80, -200],  rot: [14, -24] },
];

const FloatingGlyphs = ({ progress }: { progress: ReturnType<typeof useSpring> }) => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    {glyphs.map(({ Icon, top, left, size, range, rot }, i) => (
      <Glyph
        key={i}
        Icon={Icon}
        top={top}
        left={left}
        size={size}
        progress={progress}
        range={range as [number, number]}
        rot={rot as [number, number]}
      />
    ))}
  </div>
);

const Glyph = ({
  Icon, top, left, size, progress, range, rot,
}: {
  Icon: typeof Code2;
  top: string;
  left: string;
  size: number;
  progress: ReturnType<typeof useSpring>;
  range: [number, number];
  rot: [number, number];
}) => {
  const y = useTransform(progress, [0, 1], range);
  const rotate = useTransform(progress, [0, 1], rot);
  const opacity = useTransform(progress, [0, 0.05, 0.95, 1], [0, 0.18, 0.18, 0]);
  return (
    <motion.div
      className="absolute"
      style={{ top, left, y, rotate, opacity }}
    >
      <Icon size={size} className="text-primary-glow" strokeWidth={1.1} />
    </motion.div>
  );
};