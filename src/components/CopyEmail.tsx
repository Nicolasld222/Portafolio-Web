"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      return;
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] text-slate-300 transition duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2 text-emerald-300"
          >
            <span aria-hidden>✓</span> Copiado
          </motion.span>
        ) : (
          <motion.span
            key="email"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {email}
          </motion.span>
        )}
      </AnimatePresence>
      {!copied && (
        <span aria-hidden className="text-[11px] text-slate-600 transition-colors duration-300 group-hover:text-slate-400">
          ⧉
        </span>
      )}
    </button>
  );
}
