/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,html}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        13: "3.55rem",
        810: "810px",
        22: "7.1rem",
        59: "14.75rem",
      },
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
        mainlightblue: "var(--mainlightblue)",
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
        "bold-40px": "var(--bold-40px-font-family)",
        "regular-12px": "var(--regular-12px-font-family)",
        "regular-16px": "var(--regular-16px-font-family)",
        "semibold-16px": "var(--semibold-16px-font-family)",
      },
      boxShadow: {
        "button-accent-default": "var(--button-accent-default)",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
      },
      minHeight: {
        590: "590px",
      },
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
    },
  },
  plugins: [],
};
