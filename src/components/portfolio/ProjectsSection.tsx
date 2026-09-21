import { portfolio } from "@/content/portfolio";
import { TechIcon } from "./TechBrandIcons";
import { HorizontalSwipeContainer } from "./HorizontalSwipeContainer";
import { Github, ExternalLink, Activity, Database, Stethoscope, Languages, Globe } from "lucide-react";

export const ProjectsSection = () => {
  const showcaseProjects = portfolio.projects.slice(0, 4);

  const getProjectPreviewContent = (index: number) => {
    switch (index) {
      case 0: // EEG Seizure Detection
        return (
          <div className="w-full h-full bg-[#0f172a] text-slate-200 p-4 font-mono text-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-teal-400 font-bold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                EEG_SIGNAL_INFERENCE.PY
              </span>
              <span className="bg-teal-950 text-teal-300 px-2 py-0.5 rounded text-[10px]">
                LATENCY: 24ms
              </span>
            </div>
            <div className="space-y-1.5 py-2 text-[11px] text-slate-300">
              <div className="text-slate-400">// Multi-lead continuous filtering</div>
              <div className="text-teal-300">&gt; bandpass_filter(0.5, 45.0, order=4)</div>
              <div className="text-slate-400">&gt; wavelet_transform(morlet, channels=23)</div>
              <div className="text-green-400">&gt; inference_bilstm_cnn(batch_size=1) -&gt; 94.2% conf</div>
            </div>
            <div className="h-14 bg-slate-950/80 rounded border border-slate-800 p-2 flex items-end gap-1">
              {[40, 25, 60, 90, 85, 45, 30, 70, 95, 80, 50, 65, 30, 45, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-teal-500/70 rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        );
      case 1: // Smart Healthcare Ecosystem
        return (
          <div className="w-full h-full bg-[#0f172a] text-slate-200 p-4 font-mono text-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-teal-400 font-bold flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5" />
                MEDINOVA_HEALTH_SERVICE
              </span>
              <span className="bg-teal-950 text-teal-300 px-2 py-0.5 rounded text-[10px]">
                ROLE: RBAC_ACTIVE
              </span>
            </div>
            <div className="space-y-1.5 py-2 text-[11px]">
              <div className="text-slate-400">// Full-stack clinical appointments & blood bank</div>
              <div className="text-teal-300">&gt; doctor_booking_api: verified (Patient, Doctor, Admin)</div>
              <div className="text-slate-300">&gt; ocr_report_parser: parameter_extraction -&gt; 98.6% match</div>
              <div className="text-green-400">&gt; ai_triage_chatbot: active_session (fast response)</div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="bg-slate-900 p-2 rounded border border-slate-800">
                <span className="text-slate-400 block">Blood Bank Queue:</span>
                <span className="text-teal-300">O- / A+ Matched (Instant)</span>
              </div>
              <div className="bg-slate-900 p-2 rounded border border-slate-800">
                <span className="text-slate-400 block">OCR Diagnostics:</span>
                <span className="text-green-400">Parsed & Structured</span>
              </div>
            </div>
          </div>
        );
      case 2: // LinguaBridge — AI Language Learning Platform
        return (
          <div className="w-full h-full bg-[#0f172a] text-slate-200 p-4 font-mono text-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-teal-400 font-bold flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5" />
                LINGUABRIDGE_AI_CORE
              </span>
              <span className="bg-teal-950 text-teal-300 px-2 py-0.5 rounded text-[10px]">
                MULTIMODAL AI
              </span>
            </div>
            <div className="space-y-1.5 py-2 text-[11px]">
              <div className="text-slate-400">// Conversational roleplay & OCR document pipeline</div>
              <div className="text-teal-300">&gt; gemini_llm_stream: conversational_turn (latency: 38ms)</div>
              <div className="text-slate-300">&gt; deepl_translation_fallback: nuanced_idioms -&gt; applied</div>
              <div className="text-green-400">&gt; ocr_flashcard_generator: 12 new terms ingested</div>
            </div>
            <div className="h-14 bg-slate-950/80 rounded border border-slate-800 p-2 flex items-center justify-between text-[10px]">
              <span className="text-slate-400">ADAPTIVE WORKFLOW:</span>
              <span className="text-teal-300 font-bold">SPACED_REPETITION_SYNCED</span>
            </div>
          </div>
        );
      case 3: // Business Portfolio & Digital Solutions Website
      default:
        return (
          <div className="w-full h-full bg-[#0f172a] text-slate-200 p-4 font-mono text-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-teal-400 font-bold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                DIGITAL_SOLUTIONS_PLATFORM
              </span>
              <span className="bg-teal-950 text-teal-300 px-2 py-0.5 rounded text-[10px]">
                PERFORMANCE: 100/100
              </span>
            </div>
            <div className="space-y-1.5 py-2 text-[11px]">
              <div className="text-slate-400">// Business solutions, backend APIs & AI integration</div>
              <div className="text-teal-300">&gt; nextjs_edge_delivery: sub-second first contentful paint</div>
              <div className="text-slate-300">&gt; service_catalog: backend, APIs, automation, AI solutions</div>
              <div className="text-green-400">&gt; client_inquiry_pipeline: active & verified</div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="bg-slate-900 p-2 rounded border border-slate-800">
                <span className="text-slate-400 block">Architecture:</span>
                <span className="text-teal-300">Next.js + Tailwind</span>
              </div>
              <div className="bg-slate-900 p-2 rounded border border-slate-800">
                <span className="text-slate-400 block">Status:</span>
                <span className="text-green-400 font-bold">PRODUCTION_DEPLOYED</span>
              </div>
            </div>
          </div>
        );
    }
  };

  const getPhonePreviewContent = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="w-full h-full bg-[#1c1c1c] text-white p-3 font-mono text-[9px] flex flex-col justify-between">
            <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-2" />
            <div className="space-y-1 text-slate-300">
              <div className="text-teal-400 font-bold">MOBILE METRICS</div>
              <div className="text-[8px] text-slate-400">STATUS: ONLINE</div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800 mt-2">
                <div className="text-slate-400">P99 LATENCY</div>
                <div className="text-teal-300 font-bold text-xs">&lt;30 ms</div>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                <div className="text-slate-400">ACCURACY</div>
                <div className="text-green-400 font-bold text-xs">94.2%</div>
              </div>
            </div>
            <div className="text-center text-[7px] text-slate-500">SECURE API V2</div>
          </div>
        );
      case 1:
        return (
          <div className="w-full h-full bg-[#1c1c1c] text-white p-3 font-mono text-[9px] flex flex-col justify-between">
            <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-2" />
            <div className="space-y-1 text-slate-300">
              <div className="text-teal-400 font-bold">MEDINOVA APP</div>
              <div className="text-[8px] text-slate-400">DOCTOR BOOKING</div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800 mt-2">
                <div className="text-slate-400">APPOINTMENT</div>
                <div className="text-teal-300 font-bold text-xs">CONFIRMED</div>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                <div className="text-slate-400">BLOOD BANK</div>
                <div className="text-green-400 font-bold text-xs">MATCH FOUND</div>
              </div>
            </div>
            <div className="text-center text-[7px] text-slate-500">MEDINOVA V1</div>
          </div>
        );
      case 2:
        return (
          <div className="w-full h-full bg-[#1c1c1c] text-white p-3 font-mono text-[9px] flex flex-col justify-between">
            <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-2" />
            <div className="space-y-1 text-slate-300">
              <div className="text-teal-400 font-bold">LINGUABRIDGE</div>
              <div className="text-[8px] text-slate-400">AI ROLEPLAY</div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800 mt-2">
                <div className="text-slate-400">TRANSLATION</div>
                <div className="text-teal-300 font-bold text-xs">99.1% ACC</div>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                <div className="text-slate-400">OCR SCAN</div>
                <div className="text-green-400 font-bold text-xs">SAVED (12)</div>
              </div>
            </div>
            <div className="text-center text-[7px] text-slate-500">VOICE + OCR AI</div>
          </div>
        );
      case 3:
      default:
        return (
          <div className="w-full h-full bg-[#1c1c1c] text-white p-3 font-mono text-[9px] flex flex-col justify-between">
            <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-2" />
            <div className="space-y-1 text-slate-300">
              <div className="text-teal-400 font-bold">DIGITAL PORTFOLIO</div>
              <div className="text-[8px] text-slate-400">BUSINESS SOLUTIONS</div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800 mt-2">
                <div className="text-slate-400">SERVICES</div>
                <div className="text-teal-300 font-bold text-xs">ACTIVE</div>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                <div className="text-slate-400">LOAD TIME</div>
                <div className="text-green-400 font-bold text-xs">&lt;0.8s</div>
              </div>
            </div>
            <div className="text-center text-[7px] text-slate-500">ALITAQIBUIS</div>
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen h-auto md:h-screen snap-start w-full relative overflow-visible md:overflow-hidden diagonal-split-bg flex flex-col justify-center items-center py-12 md:py-0"
    >
      {/* Decorative Behind Watermark "PROJECTS" Label in Wide Letter-Spacing */}
      <div
        aria-hidden="true"
        className="absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl md:text-9xl font-display font-extrabold text-[#9a9fa5]/20 uppercase tracking-[0.32em] select-none pointer-events-none z-0 whitespace-nowrap"
      >
        PROJECTS
      </div>

      {/* Horizontal Two-Finger Swipe / Trackpad Scroll Container */}
      <HorizontalSwipeContainer
        className="w-full min-h-[70vh] md:h-full select-none relative z-10"
        itemClassName="w-screen min-w-full min-h-[70vh] md:h-full flex flex-col justify-center items-center px-4 py-8 sm:py-12"
      >
        {showcaseProjects.map((project, index) => (
          <div
            key={project.id}
            className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center my-auto"
          >
            {/* Top Mockup Area: Browser Window Mockup + Overlapping Phone Frame */}
            <div className="relative mb-6 sm:mb-8 w-full max-w-[560px] sm:max-w-[620px]">
              {/* Browser Window Mockup */}
              <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-2xl bg-white shadow-xl border border-[#d8dcdf] overflow-hidden flex flex-col">
                {/* Browser Top Bar & Address Bar */}
                <div className="h-9 bg-[#f0f4f7] border-b border-[#d8dcdf] px-4 flex items-center justify-between shrink-0">
                  {/* Traffic Light Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>

                  {/* Centered Address Pill */}
                  <div className="w-48 sm:w-64 h-5 bg-white border border-[#d8dcdf] rounded-full text-[10px] text-[#7a7f85] font-mono flex items-center justify-center truncate px-2">
                    {project.live && project.live.startsWith("http")
                      ? project.live.replace(/^https?:\/\//, "")
                      : `https://alitaqi.dev/${project.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  </div>

                  <div className="w-8" />
                </div>

                {/* Browser Screen Content */}
                <div className="flex-1 w-full overflow-hidden">
                  {getProjectPreviewContent(index)}
                </div>
              </div>

              {/* Overlapping Phone Frame Mockup (on the right) */}
              <div className="absolute -right-2 -bottom-4 sm:-right-6 sm:-bottom-6 w-[110px] sm:w-[135px] h-[190px] sm:h-[230px] rounded-[22px] sm:rounded-[24px] bg-[#1c1c1c] p-2 shadow-2xl border-2 border-[#1c1c1c] z-20 hidden xs:block">
                <div className="w-full h-full rounded-[16px] sm:rounded-[18px] overflow-hidden">
                  {getPhonePreviewContent(index)}
                </div>
              </div>
            </div>

            {/* Project Heading: "Project N: Name" with "Project N:" bold + underlined */}
            <h3 className="font-display text-xl sm:text-[26px] md:text-[30px] text-[#1c1c1c] text-center tracking-tight mb-2 sm:mb-3">
              <span className="font-bold underline decoration-[#4d8f8b] decoration-[2px] underline-offset-8 mr-2">
                Project {index + 1}:
              </span>
              <span className="font-bold">{project.name}</span>
            </h3>

            {/* Row of Small Tech-Stack Icon Circles */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-3 sm:mb-4 flex-wrap max-w-xl">
              {project.tech.map((techName) => (
                <div
                  key={techName}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#d8dcdf] shadow-xs flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                  title={techName}
                >
                  <TechIcon name={techName} className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              ))}
            </div>

            {/* Description Paragraph */}
            <p className="max-w-[760px] text-[#1c1c1c]/85 text-xs sm:text-sm md:text-[15px] leading-[1.6] sm:leading-[1.7] text-center font-sans px-4">
              {project.summary}
            </p>

            {/* Project Action Links: GITHUB REPO or VIEW PROJECT */}
            <div className="mt-4 sm:mt-5 flex items-center justify-center gap-4">
              {project.repo && project.repo.length > 0 && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#d8dcdf] bg-white hover:bg-slate-50 text-[#1c1c1c] text-xs font-mono tracking-wider transition-colors shadow-xs hover:border-[#4d8f8b]"
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
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#4d8f8b] hover:bg-[#3f7774] text-white text-xs font-mono tracking-wider transition-colors shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>VIEW PROJECT</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </HorizontalSwipeContainer>
    </section>
  );
};

