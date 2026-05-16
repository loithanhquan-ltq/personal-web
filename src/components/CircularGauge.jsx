function CircularGauge({ label, value }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <article className="instrument-panel flex flex-col items-center justify-center">
      <svg viewBox="0 0 120 120" className="h-28 w-28" role="img" aria-label={`${label} gauge`}>
        <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(65,217,255,0.2)" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#41d9ff"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
        <text x="60" y="64" fill="#d6ebff" fontSize="20" fontWeight="700" textAnchor="middle">
          {value}
        </text>
      </svg>
      <p className="mono text-[11px] uppercase tracking-[0.14em] text-slate-300">{label}</p>
    </article>
  );
}

export default CircularGauge;
