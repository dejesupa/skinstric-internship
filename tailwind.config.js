// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        spinSlower: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" }, // opposite direction
        },
      },
      animation: {
        "spin-slow": "spinSlow 20s linear infinite",
        "spin-slower": "spinSlower 35s linear infinite",
      },
    },
  },
  plugins: [],
};
