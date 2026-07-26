"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mrgvdkpv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatusMessage("MESSAGE SENT SUCCESSFULLY");
        form.reset();
      } else {
        const data = await response.json();
        setStatusMessage(
          `ERROR: ${response.status} — ${
            data.errors ? data.errors.map((err: any) => err.message).join(", ") : "PLEASE TRY AGAIN"
          }`
        );
      }
    } catch (err) {
      setStatusMessage("ERROR: SECURE CONNECTION BUSY. PLEASE TRY AGAIN.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border border-white/[0.08] bg-black/40 p-6 md:p-12 relative overflow-hidden rounded-xl">
      {/* Visual coordinates lines */}
      <div className="absolute top-0 right-0 p-4 font-mono text-[9px] tracking-widest text-[#a0a0b0]/55 select-none">
        PORTAL // CONTACT_UPLINK
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-3">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#00FFCC] block uppercase">
            SECURE TERMINAL // COMMUNICATIONS
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-widest text-white uppercase leading-none">
            Get In Touch
          </h3>
          <p className="font-mono text-xs md:text-sm leading-relaxed text-[#a0a0b0]/80">
            Submit the form below to send an encrypted transmission directly to Nived Krishna. I will respond to your reply address as soon as the coordinate packet is decoded.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] md:text-xs tracking-widest text-white font-bold uppercase block">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="E.G. JOHN MARTIN"
                className="w-full bg-transparent border-b border-white/20 focus:border-[#f97316] text-sm md:text-base text-white font-mono py-2.5 transition-all duration-300 outline-none placeholder:text-[#a0a0b0]/35"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] md:text-xs tracking-widest text-white font-bold uppercase block">
                Your Email Address
              </label>
              <input
                type="email"
                name="_replyto"
                required
                placeholder="E.G. RECRUITER@ENTERPRISE.COM"
                className="w-full bg-transparent border-b border-white/20 focus:border-[#f97316] text-sm md:text-base text-white font-mono py-2.5 transition-all duration-300 outline-none placeholder:text-[#a0a0b0]/35"
              />
            </div>
          </div>

          {/* Subject Input */}
          <div className="space-y-2">
            <label className="font-mono text-[10px] md:text-xs tracking-widest text-white font-bold uppercase block">
              Message Subject
            </label>
            <input
              type="text"
              name="Subject"
              required
              placeholder="E.G. DEPLOYMENT AND RESEARCH QUERY"
              className="w-full bg-transparent border-b border-white/20 focus:border-[#f97316] text-sm md:text-base text-white font-mono py-2.5 transition-all duration-300 outline-none placeholder:text-[#a0a0b0]/35"
            />
          </div>

          {/* Message Textarea */}
          <div className="space-y-2">
            <label className="font-mono text-[10px] md:text-xs tracking-widest text-white font-bold uppercase block">
              Message Payload Body
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="ENTER WORK DETAILS, COGNITIVE INTEGRATIONS, OR FEEDBACK PARAMS HERE..."
              className="w-full bg-transparent border-b border-white/20 focus:border-[#f97316] text-sm md:text-base text-white font-mono py-2.5 transition-all duration-300 outline-none resize-none placeholder:text-[#a0a0b0]/35"
            />
          </div>

          {/* Response Status Notification Indicator */}
          {statusMessage && (
            <div className="border border-white/[0.08] bg-white/[0.02] p-4 text-center rounded-lg">
              <span className="font-mono text-xs tracking-widest text-[#00FFCC] animate-pulse">
                {statusMessage}
              </span>
            </div>
          )}

          {/* Submission CTA Star Button */}
          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="font-mono text-xs tracking-widest uppercase border border-white hover:bg-white hover:text-black px-8 py-4 bg-transparent text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer font-bold w-full sm:w-auto"
            >
              {isSubmitting ? "DISPATCHING TRANS..." : "SEND ENCRYPTED MESSAGE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
