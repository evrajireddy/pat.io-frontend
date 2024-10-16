export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    themes: [
      {
        mytheme: {
          
"primary": "#1b5e1fe",
          
"secondary": "#d9f99d",
          
"accent": "#00ffff",
          
"neutral": "#ff00ff",
          
"base-100": "#ffffff",
          
"info": "#0000ff",
          
"success": "#00ff00",
          
"warning": "#00ff00",
          
"error": "#ff0000",
          },
        },
      ],
  },
        
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["emerald",],  // Customize DaisyUI themes here
  },
};