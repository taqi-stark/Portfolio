import { portfolio } from "@/content/portfolio";
import { TechIcon } from "./TechBrandIcons";
import { HorizontalSwipeContainer } from "./HorizontalSwipeContainer";
import { Github, ExternalLink } from "lucide-react";

type Project = (typeof portfolio.projects)[number] & {
  images?: string[];
};

/** Fanned overlapping screenshot cards — left tilted, center elevated, right tilted */
const ProjectFanGallery = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [left, center, right] = [
    images[0],
    images[1] ?? images[0],
    images[2] ?? images[0],
  ];

  const cardBase =
    "absolute overflow-hidden rounded-[18px] sm:rounded-[22px] bg-white border border-[#e8ecee] shadow-[0_12px_40px_rgba(0,0,0,0.12)]";

  return (
    <div className="relative w-full max-w-[520px] sm:max-w-[640px] h-[220px] sm:h-[300px] md:h-[320px] mx-auto shrink-0">
      {/* Left card */}
      <div
        className={`${cardBase} w-[58%] h-[88%] left-[2%] top-[10%] z-[1] -rotate-[7deg]`}
      >
        <img
          src={left}
          alt={`${title} screenshot 1`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>

      {/* Right card */}
      <div
        className={`${cardBase} w-[58%] h-[88%] right-[2%] top-[10%] z-[1] rotate-[7deg]`}
      >
        <img
          src={right}
          alt={`${title} screenshot 3`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>

      {/* Center card — elevated */}
      <div
        className={`${cardBase} w-[62%] h-[94%] left-1/2 -translate-x-1/2 top-0 z-[2] shadow-[0_18px_48px_rgba(0,0,0,0.16)]`}
      >
        <img
          src={center}
          alt={`${title} screenshot 2`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
    </div>
  );
};

/** Placeholder fan when screenshots aren’t provided yet */
const ProjectFanPlaceholder = ({ label }: { label: string }) => (
  <div className="relative w-full max-w-[520px] sm:max-w-[640px] h-[220px] sm:h-[300px] md:h-[320px] mx-auto shrink-0">
    {[
      { cls: "w-[58%] h-[88%] left-[2%] top-[10%] z-[1] -rotate-[7deg]", tone: "from-slate-100 to-slate-200" },
      { cls: "w-[58%] h-[88%] right-[2%] top-[10%] z-[1] rotate-[7deg]", tone: "from-slate-100 to-slate-200" },
      { cls: "w-[62%] h-[94%] left-1/2 -translate-x-1/2 top-0 z-[2]", tone: "from-white to-slate-100" },
    ].map((card, i) => (
      <div
        key={i}
        className={`absolute overflow-hidden rounded-[18px] sm:rounded-[22px] border border-[#e8ecee] shadow-[0_12px_40px_rgba(0,0,0,0.10)] bg-gradient-to-br ${card.tone} ${card.cls} flex items-center justify-center`}
      >
        {i === 2 && (
          <p className="text-[11px] sm:text-xs font-mono tracking-wider text-[#9a9fa5] uppercase px-4 text-center">
            {label}
          </p>
        )}
      </div>
    ))}
  </div>
);

export const ProjectsSection = () => {
  const showcaseProjects = portfolio.projects.slice(0, 4) as Project[];

  return (
    <section
      id="projects"
      className="h-auto md:h-screen md:min-h-screen snap-start w-full relative overflow-x-hidden md:overflow-hidden diagonal-split-bg flex flex-col justify-center items-center py-8 md:py-0"
    >
      <div
        aria-hidden="true"
        className="absolute top-6 sm:top-12 left-1/2 -translate-x-1/2 text-5xl sm:text-8xl md:text-9xl font-display font-extrabold text-[#9a9fa5]/20 uppercase tracking-[0.32em] select-none pointer-events-none z-0 whitespace-nowrap"
      >
        PROJECTS
      </div>

      <HorizontalSwipeContainer
        className="w-full select-none relative z-10 items-stretch"
        itemClassName="w-[100vw] max-w-[100vw] flex justify-center items-center px-4 sm:px-6 py-2"
      >
        {showcaseProjects.map((project, index) => {
          const images = project.images?.filter(Boolean) ?? [];

          return (
            <div
              key={project.id}
              className="w-full max-w-[360px] sm:max-w-[640px] md:max-w-3xl mx-auto flex flex-col items-center justify-start h-auto min-h-[520px] sm:min-h-[580px] md:min-h-0 md:justify-center py-2"
            >
              {images.length > 0 ? (
                <ProjectFanGallery images={images} title={project.name} />
              ) : (
                <ProjectFanPlaceholder label="Screenshots coming soon" />
              )}

              <h3 className="mt-6 sm:mt-8 font-display text-base sm:text-[26px] md:text-[30px] text-black text-center tracking-tight mb-2 sm:mb-3 px-1">
                <span className="font-bold underline decoration-[#4d8f8b] decoration-[2px] underline-offset-4 sm:underline-offset-8 mr-1.5">
                  Project {index + 1}:
                </span>
                <span className="font-bold">{project.name}</span>
              </h3>

              <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-3 sm:mb-4 flex-wrap max-w-xl">
                {project.tech.slice(0, 8).map((techName) => (
                  <div
                    key={techName}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#d8dcdf] shadow-xs flex items-center justify-center"
                    title={techName}
                  >
                    <TechIcon name={techName} className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                ))}
              </div>

              <p className="max-w-[720px] text-black/85 text-xs sm:text-sm md:text-[15px] leading-[1.6] sm:leading-[1.7] text-center font-sans px-2 line-clamp-4">
                {project.summary}
              </p>

              <div className="mt-4 sm:mt-5 flex items-center justify-center gap-3 sm:gap-4">
                {project.repo && project.repo.length > 0 && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full border border-[#d8dcdf] bg-white hover:bg-slate-50 text-black text-xs font-mono tracking-wider transition-colors shadow-xs hover:border-[#4d8f8b]"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GITHUB REPO</span>
                  </a>
                )}

                {project.live && project.live.length > 0 && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#4d8f8b] hover:bg-[#3f7774] text-white text-xs font-mono tracking-wider transition-colors shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>VIEW PROJECT</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </HorizontalSwipeContainer>
    </section>
  );
};
