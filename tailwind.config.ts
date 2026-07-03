import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-alt": "var(--background-alt)",
        "primary-blue": "var(--primary-blue)",
        "primary-blue-light": "var(--primary-blue-light)",
        "text-heading": "var(--text-heading)",
        "text-body": "var(--text-body)",
        "border-custom": "var(--border-custom)",
      },
    },
  },
  plugins: [],
} satisfies Config;
