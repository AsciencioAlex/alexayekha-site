"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({ 
  startOnLoad: false, 
  theme: "neutral",
  themeVariables: {
    fontSize: '16px',
  }
});

export default function Mermaid({ children }: { children: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && children) {
      const renderDiagram = async () => {
        try {
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          const { svg } = await mermaid.render(id, children.trim());
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
        } catch (error) {
          console.error("Mermaid render error:", error);
          if (ref.current) {
            ref.current.innerHTML = `<pre class="bg-red-50 p-4 rounded text-xs">${children}</pre>`;
          }
        }
      };
      renderDiagram();
    }
  }, [children]);

  return (
    <div className="my-8 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
      <div ref={ref} className="flex justify-center" />
    </div>
  );
}
