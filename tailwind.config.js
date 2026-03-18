module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0ea5b7",
        primaryDark: "#0b7f8c",
        surface: "#f8fafc",
        surfaceAlt: "#e2e8f0",
        ink: "#0f172a",
        muted: "#475569",
        darkBg: "#0b1220",
        darkCard: "#111827",
        darkSoft: "#1f2937",
        darkBorder: "#334155",
        lightBorder: "#cbd5e1"
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 8, 23, 0.10)"
      }
    }
  }
};