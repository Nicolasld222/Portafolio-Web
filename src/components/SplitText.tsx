"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ElementType } from "react";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  mode?: "mount" | "view";
  once?: boolean;
  drift?: boolean;
  as?: ElementType;
};

/**
 * Title / heading reveal: every word rises from behind a mask with a blur fade.
 * With `drift` the words also separate vertically while the page scrolls.
 */
export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.055,
  mode = "view",
  once = true,
  drift = false,
  as: Tag = "span",
}: SplitTextProps) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const driftNear = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -60]);
  const driftMid = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -120]);
  const driftFar = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -185]);
  const words = text.split(" ");
  const visible = { y: "0%", opacity: 1, filter: "blur(0px)" };
  const hidden = reduce ? { y: "0%", opacity: 1, filter: "blur(0px)" } : { y: "112%", opacity: 0, filter: "blur(10px)" };

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          style={drift ? { y: index % 3 === 0 ? driftNear : index % 3 === 1 ? driftMid : driftFar } : undefined}
        >
          <span className="inline-block overflow-hidden align-bottom pb-[0.16em] -mb-[0.16em]">
            <motion.span
              className="inline-block will-change-transform"
              initial={hidden}
              animate={mode === "mount" ? visible : undefined}
              whileInView={mode === "view" ? visible : undefined}
              viewport={mode === "view" ? { once, margin: "-90px" } : undefined}
              transition={{ duration: 0.85, delay: delay + index * stagger, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
              {index < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        </motion.span>
      ))}
    </Tag>
  );
}
