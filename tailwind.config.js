/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Raleway', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      text: ['Lato', 'sans-serif'],
    },
    fontSize: {
      x7: '42pt',
      x6: '32pt',
      x5: '26pt',
      x4: '18pt',
      x3: '16pt',
      x2: '14pt',
      x1: '12pt',
    },
    extend: {
      colors: {
        white: '#fff',
        roxo74: '#410033',
        roxo65: '#672557',
        roxo20: '#cbacc2',
        rosa20: '#eac0cb',
      },
      lineHeight: {
        x5: '64pt',
        x4: '48pt',
        x3: '32pt',
        x2: '24pt',
        'x1.5': '19px',
        x1: '16pt',
      },
      height: {
        4.8: '19px',
        5.5: '22px',
        18: '72px',
        22: '84pX',
      },
      padding: {
        2.5: '10px',
      },
      spacing: {
        '200px': '200px',
      },
    },
  },
  plugins: [],
};
