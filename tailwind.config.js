/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#006aff",
        "custom-header-bg": "#292929",
        "custom-text": "#DCDCDC",
        "custom-border": "#555555",
        "custom-bg": "#121212",
        "custom-toggle": "#E5E7EB",
        body: "#f5f5f5",
        "body-dark": "#121212",
        menu: "#ffffff",
        "menu-dark": "#1f1f1f",
        "menu-active": "#d1f3ff",
        "menu-active-dark": "#1a1a1a",
        "menu-hover": "#d1f3ff",
        "menu-hover-dark": "#1f1f1f",
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [
    'flowbite/plugin'
  ],
  darkMode: "class",
};


