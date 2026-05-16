/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        steel: {
          950: "#05070d",
          900: "#0b1020",
          800: "#121a31",
          700: "#1d2c4d"
        },
        neon: {
          cyan: "#41d9ff",
          mint: "#2cf7c7",
          amber: "#ffd166"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(65, 217, 255, 0.25)",
        card: "0 12px 36px rgba(0, 0, 0, 0.22)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 10% 20%, rgba(65, 217, 255, 0.18), transparent 35%), radial-gradient(circle at 90% 0%, rgba(44, 247, 199, 0.14), transparent 30%), linear-gradient(135deg, #0b1020 0%, #05070d 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
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
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
        scan: "scan 3.5s linear infinite"
      }
    }
  },
  plugins: []
};
