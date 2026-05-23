import { useMemo } from "react";
import * as d3 from "d3";

function RadarChart({ metrics, size = 260 }) {
  const chart = useMemo(() => {
    const radius = size / 2 - 32;
    const center = size / 2;
    const levels = 5;
    const angleSlice = (Math.PI * 2) / metrics.length;

    const rings = Array.from({ length: levels }, (_, ringIndex) => {
      const ringR = ((ringIndex + 1) / levels) * radius;
      const points = metrics
        .map((_, i) => {
          const angle = i * angleSlice - Math.PI / 2;
          return [center + Math.cos(angle) * ringR, center + Math.sin(angle) * ringR];
        })
        .join(" ");
      return points;
    });

    const polygonPoints = metrics.map((metric, i) => {
      const angle = i * angleSlice - Math.PI / 2;
      const valueRadius = (metric.value / 100) * radius;
      return [center + Math.cos(angle) * valueRadius, center + Math.sin(angle) * valueRadius];
    });

    const translatedPath = d3.line().curve(d3.curveLinearClosed)(polygonPoints) || "";

    const axes = metrics.map((metric, i) => {
      const angle = i * angleSlice - Math.PI / 2;
      return {
        x2: center + Math.cos(angle) * radius,
        y2: center + Math.sin(angle) * radius,
        lx: center + Math.cos(angle) * (radius + 16),
        ly: center + Math.sin(angle) * (radius + 16),
        label: metric.axis,
      };
    });

    return { rings, axes, translatedPath, center };
  }, [metrics, size]);

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full" role="img" aria-label="Technical capability radar chart">
      {chart.rings.map((points, idx) => (
        <polygon key={idx} points={points} fill="none" stroke="var(--svg-ring)" strokeWidth="1" />
      ))}
      {chart.axes.map((axis) => (
        <g key={axis.label}>
          <line x1={chart.center} y1={chart.center} x2={axis.x2} y2={axis.y2} stroke="var(--svg-axis)" strokeWidth="1" />
          <text x={axis.lx} y={axis.ly} fill="var(--svg-text)" fontSize="9" textAnchor="middle" dominantBaseline="middle">
            {axis.label}
          </text>
        </g>
      ))}
      <path d={chart.translatedPath} fill="var(--svg-radar-fill)" stroke="var(--matlab-blue)" strokeWidth="2" />
    </svg>
  );
}

export default RadarChart;
