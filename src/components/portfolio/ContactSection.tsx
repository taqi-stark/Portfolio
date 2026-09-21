import { useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/content/portfolio";
import { Mail, MapPin, Check, Copy, Send } from "lucide-react";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const copyEmail = async () => {
    await navigator.clipboard.writeText(portfolio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${portfolio.email}?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="min-h-screen h-auto md:h-screen snap-start w-full flex flex-col justify-center items-center relative overflow-visible md:overflow-hidden bg-[#f7f8f9] pt-20 pb-24 md:py-16 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <p className="uppercase text-xs sm:text-[13px] tracking-[0.3em] text-[#9a9fa5] font-medium mb-3">
          GET IN TOUCH
        </p>
        <h3 className="font-display font-bold text-2xl sm:text-[34px] md:text-[36px] text-[#1c1c1c] tracking-tight">
          Let&apos;s build something <span className="underline decoration-[#4d8f8b] decoration-[2px] underline-offset-8">scalable</span>
        </h3>
      </motion.div>

      <div className="w-full max-w-3xl bg-white rounded-3xl border border-[#d8dcdf] shadow-sm p-6 sm:p-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Direct Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-4 text-sm text-[#1c1c1c]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-[#f7f8f9] border border-[#d8dcdf] text-[#4d8f8b]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#9a9fa5] block font-mono">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${portfolio.email}`}
                    className="font-medium text-[#1c1c1c] hover:text-[#4d8f8b] transition-colors"
                  >
                    {portfolio.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-[#f7f8f9] border border-[#d8dcdf] text-[#4d8f8b]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#9a9fa5] block font-mono">
                    LOCATION
                  </span>
                  <span className="font-medium text-[#1c1c1c]">{portfolio.location}</span>
                </div>
              </div>
            </div>

            <button
              onClick={copyEmail}
              className="w-full py-2.5 px-4 rounded-full border border-[#d8dcdf] hover:bg-[#f7f8f9] text-xs font-mono tracking-wider text-[#1c1c1c] flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#4d8f8b]" />
                  <span>COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#9a9fa5]" />
                  <span>COPY EMAIL ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Message Form */}
          <form onSubmit={handleSubmit} className="md:col-span-7 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#f7f8f9] border border-[#d8dcdf] text-xs font-sans text-[#1c1c1c] placeholder:text-[#9a9fa5] focus:outline-none focus:border-[#4d8f8b]"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#f7f8f9] border border-[#d8dcdf] text-xs font-sans text-[#1c1c1c] placeholder:text-[#9a9fa5] focus:outline-none focus:border-[#4d8f8b]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-[#f7f8f9] border border-[#d8dcdf] text-xs font-sans text-[#1c1c1c] placeholder:text-[#9a9fa5] focus:outline-none focus:border-[#4d8f8b]"
            />
            <textarea
              rows={3}
              placeholder="Your Message..."
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-[#f7f8f9] border border-[#d8dcdf] text-xs font-sans text-[#1c1c1c] placeholder:text-[#9a9fa5] focus:outline-none focus:border-[#4d8f8b] resize-none"
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-[#4d8f8b] hover:bg-[#3f7774] text-white text-xs font-mono tracking-widest flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>SEND INQUIRY</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
