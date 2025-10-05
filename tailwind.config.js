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

module.exports = {
  theme: {
    extend: {
      keyframes: {
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1) rotate(45deg)' },
          '50%': { transform: 'scale(1.05) rotate(45deg)' },
        },
      },
      animation: {
        'pulse-scale': 'pulse-scale 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

