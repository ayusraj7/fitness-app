/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    
    extend: {
      colors:{
        white:'#fff',
        black:'#000',
        transparent:'#ffffff00',
        violet:{
          login:"rgb(125,42,232)"
        },
        green:{
          light:"#62b187",
          medium:"#427462"
        },
        slate:{
          light:"#94a3b8",
          medium:"#334155",
          dark:"#111827"
        },
        bgcolor:{
          people:"#313131",
          peoplelight:"#57534e",
          peoplecard:"#1d262f"
        },
        font:{
          white:"#f1f5f9",
          50:"#6b7280",
          100:"#374151"
        }
      },
      
      
    },
  },
  plugins: [],
}