import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, Database, Network, Sliders, CheckCircle2 } from "lucide-react";

export const AiMlSection = () => {
  const pipelineSteps = [
    { name: "DATA", desc: "Raw Signals / Telemetry" },
    { name: "PREPROCESSING", desc: "Filtering & Artifact Cleaning" },
    { name: "FEATURE ENG", desc: "Wavelets & Spectral Powers" },
    { name: "MODEL", desc: "PyTorch / Scikit-Learn" },
    { name: "EVALUATION", desc: "Cross-Val & ROC-AUC" },
    { name: "DEPLOYMENT", desc: "FastAPI & Docker (<30ms)" },
  ];

  return (
    <section id="aiml" className="py-24 max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h3 className="text-sm uppercase tracking-[0.35em] text-slate-500 font-medium">
          A I / M L   E N G I N E E R I N G
        </h3>
        <p className="text-xl md:text-2xl font-light text-slate-900 mt-2 max-w-3xl mx-auto">
          &ldquo;I build machine-learning systems with an emphasis on practical data pipelines, model integration, evaluation, and deployment.&rdquo;
        </p>
      </motion.div>

      {/* Visual Progression Pipeline */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-md mb-12">
        <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-slate-400 mb-6 text-center">
          SYSTEMATIC MACHINE LEARNING LIFECYCLE
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {pipelineSteps.map((step, idx) => (
            <div
              key={step.name}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-center relative"
            >
              <span className="text-[10px] font-mono text-teal-700 font-bold mb-1">0{idx + 1}</span>
              <span className="font-semibold text-xs md:text-sm text-slate-900">{step.name}</span>
              <span className="text-[10px] text-slate-500 mt-1 leading-tight">{step.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Three Capability Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Machine Learning */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
            <Sliders className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-semibold text-slate-900 mb-2">Machine Learning</h4>
          <p className="text-xs text-slate-500 mb-4">
            Rigorous statistical models with cross-validation and feature optimization.
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>Supervised Classification &amp; Regression</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>Anomaly Detection (Isolation Forest)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>Semantic Search &amp; Recommendations</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>Biomedical Signal Processing (EEG)</span>
            </li>
          </ul>
        </div>

        {/* Deep Learning */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
            <Network className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-semibold text-slate-900 mb-2">Deep Learning</h4>
          <p className="text-xs text-slate-500 mb-4">
            Neural architectures designed for temporal, spatial, and sequence data.
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span>Convolutional Neural Networks (CNN)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span>LSTM &amp; Bidirectional LSTM (BiLSTM)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span>Dense Vector Embeddings &amp; Cosine Metric</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span>PyTorch &amp; TensorFlow Frameworks</span>
            </li>
          </ul>
        </div>

        {/* ML Engineering & Deployment */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4">
            <Cpu className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-semibold text-slate-900 mb-2">ML Engineering</h4>
          <p className="text-xs text-slate-500 mb-4">
            Bridging model weights with resilient software and production APIs.
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
              <span>Preprocessing &amp; Signal Filtering Pipelines</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
              <span>Sub-30ms Inference Microservices</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
              <span>FastAPI &amp; Docker Production Containers</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
              <span>Systematic Evaluation &amp; Benchmarking</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
