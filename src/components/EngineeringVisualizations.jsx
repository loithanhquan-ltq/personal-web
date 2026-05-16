import { useMemo } from "react";
import SectionHeading from "./SectionHeading";
import { telemetrySeries } from "../data/content";

function EngineeringVisualizations() {
  const max = Math.max(...telemetrySeries);
  const bars = useMemo(
    () => telemetrySeries.map((value, index) => ({ x: index * 18 + 8, y: 96 - (value / max) * 82, h: (value / max) * 82 })),
    [max]
  );

  return (
    <section id="visualizations" className="section-container">
      <SectionHeading
        eyebrow="Engineering Visualizations"
        title="Telemetry, oscilloscope, and digital twin inspired diagnostics"
        description="Interactive scientific visuals representing signal processing, machine state monitoring, and cyber-physical feedback channels."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="hud-card rounded-2xl p-4 lg:col-span-2">
          <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-200">Oscilloscope Channel A</p>
          <div className="relative mt-4 overflow-hidden rounded-xl border border-cyan-300/20 bg-steel-950/80 p-3">
            <svg viewBox="0 0 340 110" className="h-44 w-full">
              <g stroke="rgba(65,217,255,0.15)">
                {Array.from({ length: 12 }, (_, i) => (
                  <line key={`h-${i}`} x1="0" y1={i * 10} x2="340" y2={i * 10} />
                ))}
                {Array.from({ length: 18 }, (_, i) => (
                  <line key={`v-${i}`} x1={i * 20} y1="0" x2={i * 20} y2="110" />
                ))}
              </g>
              <polyline
                fill="none"
                stroke="#2cf7c7"
                strokeWidth="2"
                points={telemetrySeries
                  .map((v, i) => `${(i / (telemetrySeries.length - 1)) * 340},${100 - (v / max) * 90}`)
                  .join(" ")}
              />
            </svg>
            <span className="scanline" />
          </div>
        </article>

        <article className="hud-card rounded-2xl p-4">
          <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-200">System Load Heatmap</p>
          <svg viewBox="0 0 340 110" className="mt-4 h-44 w-full">
            {bars.map((bar, idx) => (
              <rect
                key={idx}
                x={bar.x}
                y={bar.y}
                width="12"
                height={bar.h}
                rx="2"
                fill={bar.h > 65 ? "#ff7c3d" : "#41d9ff"}
                opacity={0.35 + idx * 0.03}
              />
            ))}
          </svg>
        </article>

        <article className="hud-card rounded-2xl p-4">
          <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-200">Signal Processing</p>
          <div className="mt-4 rounded-xl border border-cyan-300/20 bg-steel-950/80 p-4">
            <div className="space-y-3">
              <div className="h-2 rounded-full bg-steel-800">
                <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-teal-300" />
              </div>
              <div className="h-2 rounded-full bg-steel-800">
                <div className="h-2 w-[81%] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
              </div>
              <div className="h-2 rounded-full bg-steel-800">
                <div className="h-2 w-[67%] rounded-full bg-gradient-to-r from-cyan-400 to-orange-300" />
              </div>
            </div>
          </div>
        </article>

        <article className="hud-card rounded-2xl p-4 lg:col-span-2">
          <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-200">Mechanical Motion Diagram</p>
          <svg viewBox="0 0 620 180" className="mt-3 h-44 w-full">
            <circle cx="120" cy="90" r="34" fill="none" stroke="#41d9ff" strokeWidth="2" />
            <circle cx="120" cy="90" r="6" fill="#2cf7c7" />
            <line x1="120" y1="90" x2="260" y2="70" stroke="#41d9ff" strokeWidth="4" />
            <circle cx="260" cy="70" r="10" fill="#41d9ff" />
            <line x1="260" y1="70" x2="420" y2="100" stroke="#2cf7c7" strokeWidth="4" />
            <rect x="420" y="80" width="120" height="40" rx="4" fill="none" stroke="#2e8dff" strokeWidth="2" />
            <text x="440" y="104" fill="#d6ebff" fontSize="13">ACTUATOR</text>
          </svg>
        </article>
      </div>
    </section>
  );
}

export default EngineeringVisualizations;
