function CircularGauge({ label, value }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <article className="instrument-panel flex flex-col items-center justify-center">
      <svg viewBox="0 0 120 120" className="h-28 w-28" role="img" aria-label={`${label} gauge`}>
        <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#0072BD"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
        <text x="60" y="64" fill="#18181b" fontSize="20" fontWeight="700" textAnchor="middle">
          {value}
        </text>
      </svg>
      <p className="mono text-[11px] uppercase tracking-[0.14em] text-gray-500">{label}</p>
    </article>
  );
}

export default CircularGauge;
