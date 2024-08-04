/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-top": "#f1f2f4",
        "custom-top-text-and-border": "#6fa2dd",
        "for-stars": "#00b57a",
        "fourth-section": "#f8f9fb",
        active: "#fafcff",
      },
      padding: {
        "for-top": "4px",
      },
      width: {
        "for-top": "114px",
        "for-input-wrapper": "700px",
        "for-input": "530px",
        "for-categories": "1000px",
        "for-category": "220px",
      },
    },
  },
  plugins: [],
};
