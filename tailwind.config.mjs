/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
    "./src/pages/**/*.{astro,html}",
    "./src/layouts/**/*.{astro,html}",
    "./src/components/**/*.{astro,html}"  // 如果你有 components，加这个
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gemini-gradient': 'linear-gradient(135deg, #1e0533 0%, #0f172a 50%, #1e3a5f 100%)',
      },
    },
  },
  plugins: [],
}
