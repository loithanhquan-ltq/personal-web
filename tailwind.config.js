/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slategrid: "#101a32",
        steel: {
          980: "#020510",
          950: "#05070d",
          900: "#0b1020",
          860: "#0d1630",
          800: "#121a31",
          700: "#1d2c4d"
        },
        neon: {
          cyan: "#41d9ff",
          mint: "#2cf7c7",
          amber: "#ffd166",
          blue: "#2e8dff",
          warning: "#ff7c3d"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(65, 217, 255, 0.25)",
        card: "0 12px 36px rgba(0, 0, 0, 0.22)",
        hud: "inset 0 0 0 1px rgba(65, 217, 255, 0.25), 0 14px 30px rgba(1, 9, 27, 0.75)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 10% 20%, rgba(65, 217, 255, 0.18), transparent 35%), radial-gradient(circle at 90% 0%, rgba(44, 247, 199, 0.14), transparent 30%), linear-gradient(135deg, #0b1020 0%, #05070d 100%)",
        blueprint: "linear-gradient(rgba(46, 141, 255, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 141, 255, 0.12) 1px, transparent 1px), radial-gradient(circle at 20% 0%, rgba(65, 217, 255, 0.12), transparent 48%)"
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
          "0%, 100%": { boxShadow: "0 0 0 rgba(65, 217, 255, 0)" },
          "50%": { boxShadow: "0 0 30px rgba(65, 217, 255, 0.35)" }
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
