/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        'screen-sm': '640px',
        'screen-md': '768px',
      },
      fontSize: {
        base: ['1.125rem', '1.75rem'], // 18px com linha confortável
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  darkMode: 'media', // alterna automaticamente com base no SO do usuário
  plugins: [],
}
