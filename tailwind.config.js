/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-background": "#0D1117",
        "base-color": "#9DFFFF",
        shadow: "#13A9D9",
        background: "#1B1E23",
        content: "#95F9F9",
        onsurface: "#E5F2F2",
        "icon-border": "#2A3547",
        bullet: "#3FD0FF",
        subtext: "rgba(147, 170, 170, 1)",
        "border-input": "#E4E4E7",
        "ring-input": "#A1A1AA",
        "input-text": "#09090B",
      },
      fontFamily: {
        sans: ['"Buenos Aires"', ...defaultTheme.fontFamily.sans],
      },
      listStyleType: {
        circle: "circle",
      },
      aspectRatio: {
        "9/20": "9 / 20",
      },
      backgroundImage: {
        "image-1": "url('/src/assets/backgrounds/image 1.svg')",
        "image-2": "url('/src/assets/backgrounds/image 2.svg')",
        "image-3": "url('/src/assets/backgrounds/image 3.svg')",
        "image-4": "url('/src/assets/backgrounds/image 4.svg')",
        "image-5": "url('/src/assets/backgrounds/image 5.svg')",
        "image-6": "url('/src/assets/backgrounds/image 6.svg')",
        "image-7": "url('/src/assets/backgrounds/image 7.svg')",
        "image-8": "url('/src/assets/backgrounds/image 8.svg')",
        "image-9": "url('/src/assets/backgrounds/image 9.svg')",
        "image-10": "url('/src/assets/backgrounds/image 10.svg')",
        "image-11": "url('/src/assets/backgrounds/image 11.svg')",
        "image-12": "url('/src/assets/backgrounds/image 12.svg')",
        "image-13": "url('/src/assets/backgrounds/image 13.svg')",
        "image-14": "url('/src/assets/backgrounds/image 14.svg')",
        "image-15": "url('/src/assets/backgrounds/image 15.svg')",
        "image-16": "url('/src/assets/backgrounds/image 16.svg')",
        "image-17": "url('/src/assets/backgrounds/contact-bg.svg')",
        "image-18": "url('/src/assets/backgrounds/decoration.svg')",
      },
    },
  },
  plugins: [],
};
