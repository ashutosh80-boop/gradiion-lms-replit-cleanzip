import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#090806",
        carbon: "#12100d",
        bronze: "#9b7437",
        bronzeDim: "#5a4326",
        amber: "#c99b4f",
        ivory: "#eee4d2",
        sandstone: "#d9c8ab",
        ink: "#19140f",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        chamber: "0 28px 80px rgba(0, 0, 0, 0.42)",
      },
    },
  },
  plugins: [],
};

export default config;
