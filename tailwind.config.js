/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "shadow-s": "var(--shadow-s)",
        "shadow-m": "var(--shadow-m)",
        "shadow-l": "var(--shadow-l)",
      },
      colors: {
        "white-label-primary": "var(--white-label-primary)",
        "brand-color-blue": "var(--brand-color-blue)",
        "brand-color-black": "var(--brand-color-black)",
        "transparent-00": "var(--transparent-00)",
        "graygray-00": "var(--graygray-00)",
        "graygray-05": "var(--graygray-05)",
        "graygray-10": "var(--graygray-10)",
        "graygray-20": "var(--graygray-20)",
        "graygray-30": "var(--graygray-30)",
        "graygray-40": "var(--graygray-40)",
        "graygray-50": "var(--graygray-50)",
        "graygray-60": "var(--graygray-60)",
        "graygray-70": "var(--graygray-70)",
        "graygray-80": "var(--graygray-80)",
        "graygray-90": "var(--graygray-90)",
        "supportsupport-01": "var(--supportsupport-01)",
        "supportsupport-03": "var(--supportsupport-03)",
        "supportsupport-05": "var(--supportsupport-05)",
        "light-black": "var(--light-black)",
        "light-green": "var(--light-green)",
      },
    },
  },
  plugins: [],
};
