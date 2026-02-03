import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

const contents = ["Fullstack developer", "Advertiser", "Freelancer"];

function useTypewriterCycle({
  texts = [],
  typeSpeed = 60,
  deleteSpeed = 40,
  delay = 1500,
  loop = true
}) {
  const [output, setOutput] = useState("");
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const modeRef = useRef("type"); // type | pause | delete
  const lastRef = useRef(0);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!texts.length) return;

    const tick = (time) => {
      if (modeRef.current === "pause") {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const speed = modeRef.current === "type" ? typeSpeed : deleteSpeed;

      if (time - lastRef.current >= speed) {
        const current = texts[indexRef.current];

        if (modeRef.current === "type") {
          charRef.current++;
          setOutput(current.slice(0, charRef.current));

          if (charRef.current === current.length) {
            modeRef.current = "pause";
            timeoutRef.current = setTimeout(() => {
              modeRef.current = "delete";
            }, delay);
          }
        } else if (modeRef.current === "delete") {
          charRef.current--;
          setOutput(current.slice(0, charRef.current));

          if (charRef.current === 0) {
            indexRef.current = (indexRef.current + 1) % texts.length;
            modeRef.current = loop ? "type" : "pause";
            if (!loop) {
              // stop if not looping
              cancelAnimationFrame(rafRef.current);
              return;
            }
          }
        }

        lastRef.current = time;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [texts, typeSpeed, deleteSpeed, delay, loop]);

  return output;
}

function TypeWriter({ className }) {
  const text = useTypewriterCycle({ texts: contents });
  return (
    <div
      className={clsx(className, "typewriter-wrapper")}
      style={{ height: "20px" }}
    >
      {text}
    </div>
  );
}

export default TypeWriter;
