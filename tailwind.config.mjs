/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              semibold: 600,
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
            },
            h2: {
              semibold: 600,
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
            },
            p: {
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
            },
            li: {
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
            },
          },
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
