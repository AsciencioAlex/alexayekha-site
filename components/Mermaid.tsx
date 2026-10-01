"use client";

import { useEffect, useId, useRef } from "react";
import mermaid from "mermaid";

export default function Mermaid({ children }: { children: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reactId = useId();

  useEffect(() => {
    let active = true;

    async function renderDiagram() {
      if (!ref.current || !children) return;

      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: isDark ? "dark" : "neutral",
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        themeVariables: { fontSize: "15px" },
      });

      try {
        const id = `mermaid-${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
        const { svg } = await mermaid.render(id, children.trim());
        if (active && ref.current) ref.current.innerHTML = svg;
      } catch (error) {
        console.error("Mermaid render error:", error);
        if (active && ref.current) {
          ref.current.replaceChildren();
          const pre = document.createElement("pre");
          pre.className = "text-xs whitespace-pre-wrap";
          pre.textContent = children;
          ref.current.appendChild(pre);
        }
      }
    }

    renderDiagram();
    return () => {
      active = false;
    };
  }, [children, reactId]);

  return (
    <div className="mermaid-wrap" role="img" aria-label="Architecture diagram">
      <div ref={ref} className="mermaid-canvas" />
    </div>
  );
}
