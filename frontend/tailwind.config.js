/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,html}"],
  theme: {
    extend: {
      colors: {
        "accent-default": "var(--accent-default)",
        "grayscale-black": "var(--grayscale-black)",
        "grayscale-divider": "var(--grayscale-divider)",
        "grayscale-extra-light": "var(--grayscale-extra-light)",
        "grayscale-gray": "var(--grayscale-gray)",
        "grayscale-gray-dark": "var(--grayscale-gray-dark)",
        "grayscale-gray-lightest": "var(--grayscale-gray-lightest)",
        "grayscale-white": "var(--grayscale-white)",
        mainblue: "var(--mainblue)",
        "sidebar-bg": "var(--sidebar-bg)",
        "sidebar-gray": "var(--sidebar-gray)",
      },
      fontFamily: {
        "bold-12-0-3-px-CAPS": "var(--bold-12-0-3-px-CAPS-font-family)",
        "bold-12px": "var(--bold-12px-font-family)",
        "bold-19px": "var(--bold-19px-font-family)",
        "bold-24px": "var(--bold-24px-font-family)",
        "reg-14-0-3-px": "var(--reg-14-0-3-px-font-family)",
        "regular-14px": "var(--regular-14px-font-family)",
        "semibold-14-0-2-px": "var(--semibold-14-0-2-px-font-family)",
        "semibold-14px": "var(--semibold-14px-font-family)",
      },
      boxShadow: {
        "button-accent-default": "var(--button-accent-default)",
      },
    },
  },
  plugins: [],
};
