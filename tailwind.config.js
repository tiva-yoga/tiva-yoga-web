module.exports = {
  content: ["./**/*.html", "./**/*.md", "./config.toml"],
  theme: {
    extend: {
      colors: {
        tlgray: {
          200: "#E5E7EB",
          400: "#9CA3AF",
          700: "#374151",
          800: "#1F2937"
        },
        tivagreen: {
          600: "rgb(64,143,145)",
          800: "rgb(6,88,85)",
          900: "rgb(9,78,78)",
        }
      }
    },
    fontFamily: {
      tiva: ["Abel"]
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
