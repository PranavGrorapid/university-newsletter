/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    screens:{

      xs:'320px',
      sm:'375px',
      lm:'425px',
      md:'768px',
      btb:'820px',
      lg:'1024px',
      nxl:'1200px',
      xl:'1440px',
 
     },

     fontFamily:{
 
      nunitoSans:['var(--font-nunito)'],
      workSans:['var(--font-work)'],

   },

   colors:{
       
    ///background

      PrimaryBlue: "#2B63E1",
      PrimaryBlueHover:'#153EA8',
      BlackAccent:'#111E2C',  
      WhiteAccent:'#FFFFFF',
      primaryBackground:'#F5F8FF',

      BackgroundSkollege:'#F7F9FE',
      lightBlue:' #F5F8FF',
      

      PrimaryGreen:'#00BC4B',
      PrimaryGreenHover:'#00AD42',
      PrimaryGreenDisabled:'#C3EBCA',

      PrimaryRed:'#FF3C31',
      PrimaryRedHover:'#F03031',
      PrimaryRedDisabled:'#F69999',

      AccentMirage :'#111E2C',

      PrimaryOrange:'#F7BF17',
      PrimaryOrangeHover:'#F7B110',
      PrimaryOrangeDisabled:'#FADF83',


      /// text

      TitleText:'#111E2C',
      PrimaryText:'#4A545F',
      Caption:'#2B63E1',
      Placeholder:'#ECEDEE',

      ///general

      icon:'#111E2C',
      iconDisable:'#ECEDEE',
      Border:'#E0E0E0',
      Divider:'#E0E0E0',
      TableHeader:'#F9FAFC',
      Background:'#F5F8FF',
      OtherBlue:'#EAF0FC'


   },
     
     
    
  


  },
  plugins: [],
}
