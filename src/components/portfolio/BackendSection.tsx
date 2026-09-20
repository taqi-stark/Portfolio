import { motion } from "framer-motion";
import { Server, Database, Layers, Network, Activity, Container, Shield, ArrowDown } from "lucide-react";

export const BackendSection = () => {
  const backendTech = [
    "Python",
    "FastAPI",
    "Django",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Kafka",
    "Docker",
    "Kubernetes",
    "AWS",
    "Terraform",
    "Prometheus"
  ];

  return (
    <section id="backend" className="py-24 max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h3 className="text-sm uppercase tracking-[0.35em] text-slate-500 font-medium">
          B A C K E N D   E N G I N E E R I N G
        </h3>
        <p className="text-xl md:text-2xl font-light text-slate-900 mt-2 max-w-3xl mx-auto">
          &ldquo;Strong AI systems need reliable software underneath them. I build APIs, services, databases, event-driven systems, and infrastructure around intelligent applications.&rdquo;
        </p>
      </motion.div>

      {/* Production Architecture Topology Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-md">
        <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-slate-400 mb-6 text-center">
          HIGH-CONCURRENCY BACKEND TOPOLOGY
        </h4>

        {/* Responsive Diagram Flow */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <div className="w-full md:w-auto flex-1 p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">CLIENT INGRESS</span>
            <span className="font-semibold text-xs md:text-sm text-slate-900">Web / Mobile / IoT</span>
          </div>

          <ArrowDown className="md:-rotate-90 w-4 h-4 text-teal-600 flex-shrink-0" />

          <div className="w-full md:w-auto flex-1 p-3 rounded-2xl bg-teal-50/70 border border-teal-200">
            <span className="text-[10px] uppercase font-mono text-teal-700 block">API GATEWAY</span>
            <span className="font-semibold text-xs md:text-sm text-slate-900">Nginx / Reverse Proxy</span>
          </div>

          <ArrowDown className="md:-rotate-90 w-4 h-4 text-teal-600 flex-shrink-0" />

          <div className="w-full md:w-auto flex-1 p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">SERVICES</span>
            <span className="font-semibold text-xs md:text-sm text-slate-900">FastAPI Async Core</span>
          </div>

          <ArrowDown className="md:-rotate-90 w-4 h-4 text-teal-600 flex-shrink-0" />

          <div className="w-full md:w-auto flex-1 p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">CACHE &amp; DB</span>
            <span className="font-semibold text-xs md:text-sm text-slate-900">PostgreSQL + Redis</span>
          </div>

          <ArrowDown className="md:-rotate-90 w-4 h-4 text-teal-600 flex-shrink-0" />

          <div className="w-full md:w-auto flex-1 p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">EVENT QUEUES</span>
            <span className="font-semibold text-xs md:text-sm text-slate-900">Kafka / RabbitMQ</span>
          </div>

          <ArrowDown className="md:-rotate-90 w-4 h-4 text-teal-600 flex-shrink-0" />

          <div className="w-full md:w-auto flex-1 p-3 rounded-2xl bg-indigo-50/70 border border-indigo-200">
            <span className="text-[10px] uppercase font-mono text-indigo-700 block">AI WORKERS</span>
            <span className="font-semibold text-xs md:text-sm text-slate-900">ML Inference Engines</span>
          </div>
        </div>

        {/* Tech Badges Grid */}
        <div className="mt-8 pt-6 border-t border-slate-200/80">
          <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400 block text-center mb-3">
            PRODUCTION BACKEND STACK
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {backendTech.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1 rounded-full text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
