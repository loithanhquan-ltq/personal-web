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
        eyebrow="Visualizations"
        title="Signal plots, heatmaps, and motion diagrams"
        description="Scientific visualizations representing signal processing, system load monitoring, and kinematic chain analysis."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="hud-card rounded-2xl p-4 lg:col-span-2">
          <p className="mono text-xs uppercase tracking-[0.2em] text-blue-600">Oscilloscope — Channel A</p>
          <div className="relative mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white p-3">
            <svg viewBox="0 0 340 110" className="h-44 w-full">
              <g stroke="rgba(0,0,0,0.07)">
                {Array.from({ length: 12 }, (_, i) => (
                  <line key={`h-${i}`} x1="0" y1={i * 10} x2="340" y2={i * 10} />
                ))}
                {Array.from({ length: 18 }, (_, i) => (
                  <line key={`v-${i}`} x1={i * 20} y1="0" x2={i * 20} y2="110" />
                ))}
              </g>
              <polyline
                fill="none"
                stroke="#0072BD"
                strokeWidth="2"
                points={telemetrySeries
                  .map((v, i) => `${(i / (telemetrySeries.length - 1)) * 340},${100 - (v / max) * 90}`)
                  .join(" ")}
              />
            </svg>
          </div>
        </article>

        <article className="hud-card rounded-2xl p-4">
          <p className="mono text-xs uppercase tracking-[0.2em] text-blue-600">System Load Heatmap</p>
          <svg viewBox="0 0 340 110" className="mt-4 h-44 w-full">
            {bars.map((bar, idx) => (
              <rect
                key={idx}
                x={bar.x}
                y={bar.y}
                width="12"
                height={bar.h}
                rx="2"
                fill={bar.h > 65 ? "#E87722" : "#0072BD"}
                opacity={0.35 + idx * 0.03}
              />
            ))}
          </svg>
        </article>

        <article className="hud-card rounded-2xl p-4">
          <p className="mono text-xs uppercase tracking-[0.2em] text-blue-600">Signal Processing</p>
          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="space-y-3">
              <div>
                <div className="mono mb-1 flex justify-between text-[10px] uppercase text-gray-500">
                  <span>Channel A</span><span>92%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-blue-500 to-blue-300" />
                </div>
              </div>
              <div>
                <div className="mono mb-1 flex justify-between text-[10px] uppercase text-gray-500">
                  <span>Channel B</span><span>81%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-[81%] rounded-full bg-gradient-to-r from-matlab-orange to-yellow-400" />
                </div>
              </div>
              <div>
                <div className="mono mb-1 flex justify-between text-[10px] uppercase text-gray-500">
                  <span>Channel C</span><span>67%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-[67%] rounded-full bg-gradient-to-r from-green-500 to-green-300" />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="hud-card rounded-2xl p-4 lg:col-span-2">
          <p className="mono text-xs uppercase tracking-[0.2em] text-blue-600">Mechanical Motion Diagram</p>
          <svg viewBox="0 0 620 180" className="mt-3 h-44 w-full">
            <circle cx="120" cy="90" r="34" fill="none" stroke="#0072BD" strokeWidth="2" />
            <circle cx="120" cy="90" r="6" fill="#E87722" />
            <line x1="120" y1="90" x2="260" y2="70" stroke="#0072BD" strokeWidth="4" />
            <circle cx="260" cy="70" r="10" fill="#0072BD" />
            <line x1="260" y1="70" x2="420" y2="100" stroke="#E87722" strokeWidth="4" />
            <rect x="420" y="80" width="120" height="40" rx="4" fill="none" stroke="#0072BD" strokeWidth="2" />
            <text x="440" y="104" fill="#18181b" fontSize="13">ACTUATOR</text>
          </svg>
        </article>
      </div>
    </section>
  );
}

export default EngineeringVisualizations;
