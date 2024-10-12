module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        appearFromTop: "appearFromTop 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)", // Adjust easing here
      },
      keyframes: {
        appearFromTop: {
          "0%": { transform: "translateY(-20px)", opacity: 0 }, // Start from above
          "100%": { transform: "translateY(0)", opacity: 1 }, // End at original position
        },
      },
      fontFamily: {
        sans: ["Work sans", "sans-serif"],
        realsans: ["Work sans", "sans-serif"],
      },
      colors: {
        "prof-blue": "#3661EB",
        "hulk-green": "#hehehdeh",
        "fail-text": "#F4546F",
        "fail-bg": "#FEECEF",
      },
    },
  },
  plugins: [],
};
