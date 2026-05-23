/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slategrid: "#f0f0f4",
        steel: {
          980: "#ffffff",
          950: "#fafafa",
          900: "#f4f4f5",
          860: "#e4e4e7",
          800: "#d4d4d8",
          700: "#a1a1aa"
        },
        matlab: {
          blue: "#0072BD",
          orange: "#E87722",
          green: "#77AC30",
          red: "#D95319",
          yellow: "#EDB120",
          cyan: "#4DBEEE",
          purple: "#7E2F8E"
        }
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 114, 189, 0.15)",
        card: "0 2px 8px rgba(0, 0, 0, 0.06)",
        hud: "inset 0 0 0 1px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.07)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)",
        blueprint: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseLine: {
          "0%": { strokeDashoffset: "280" },
          "100%": { strokeDashoffset: "0" }
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" }
        },
        telemetry: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(220%)" }
        },
        flicker: {
          "0%, 18%, 22%, 62%, 64%, 100%": { opacity: "1" },
          "20%, 60%": { opacity: ".65" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(0, 114, 189, 0)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 114, 189, 0.2)" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" }
        }
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        pulseLine: "pulseLine 5s linear infinite",
        glowPulse: "glowPulse 2.8s ease-in-out infinite",
        telemetry: "telemetry 4.8s linear infinite",
        flicker: "flicker 5s linear infinite",
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
        scan: "scan 3.5s linear infinite"
      }
    }
  },
  plugins: []
};
