/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Display"', '"Inter Display Placeholder"', 'sans-serif'],
        mono: ['"DM Sans"', 'sans-serif'],
        lora: ['var(--font-lora)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
