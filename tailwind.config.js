/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx,html}',
    './components/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        // Tema claro (por defecto)
        fondoclaro: "var(--bg)",
        textoclaro: "var(--text)",
        rojoclaro: "var(--color1)",
        verdeclaro: 'var(--color2)',
        azulclaro: 'var(--color3)',
        violetaclaro: 'var(--color4)',

        // Tema oscuro
        fondooscuro: 'var(--bgd)',
        'surface-oscuro': '#121212',
        textooscuro: 'var(--textd)',
        'texto-dim-oscuro': 'var(--color-1)',
        rojooscuro: 'var(--color-2)',
        verdeoscuro: '#00FF85',
        azuloscuro: '#00CFFF',
        violetaoscuro: '#9D00FF'
      },
      boxShadow: {
        neon: '0 0 12px rgba(255, 0, 60, 0.6), 0 0 24px rgba(157, 0, 255, 0.4)'
      }
    }
  },
  plugins: []
};
