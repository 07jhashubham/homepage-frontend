/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".w-70": {
          width: "70%",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

