"use client";

import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:<>?[]\\;',./";

export function ScrambleText({
  text,
  className = "",
  delay = 0,
  duration = 1500,
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  // Initialize with the real text to prevent SSR hydration mismatch.
  // We will immediately scramble it on the client after mount.
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const startScramble = () => {
      let iteration = 0;
      // How many steps total (updating every 30ms)
      const totalSteps = duration / 30;
      // How many letters to reveal per step to finish on time
      const lettersPerStep = Math.max(text.length / totalSteps, 0.5);

      // Immediately scramble the text on mount before the delay finishes
      setDisplayText(
        text.split("").map(c => c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]).join("")
      );

      intervalId = setInterval(() => {
        setDisplayText(() =>
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return letter;
              }
              if (letter === " ") return " ";
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        iteration += lettersPerStep;

        if (iteration >= text.length) {
          clearInterval(intervalId);
          setDisplayText(text);
        }
      }, 30);
    };

    // Scramble it immediately on mount so it's ready when the splash screen fades
    setDisplayText(
      text.split("").map(c => c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]).join("")
    );

    timeoutId = setTimeout(startScramble, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay, duration]);

  return <span className={className}>{displayText}</span>;
}
