

// for Material Tailwind
const withMT = require("@material-tailwind/react/utils/withMT") ;

module.exports = withMT( {

    purge     : [ 
                   './pages/**/*.{js,ts,jsx,tsx}' , 
                   './components/**/*.{js,ts,jsx,tsx}' 
                ]  ,

    darkMode  : 'media' , // or 'media' or 'class'

    theme     : {

                 extend : {

                    // Amazon 樣板採用 2023.01.16 
                    colors: {
                        amazon_blue: {
                                        light   : "#232F3E",
                                        DEFAULT : "#131921",
                                      } ,
                    },


                 } , 

                } ,

    variants  : {
                  extend : {} , 
                 } ,

    plugins   : [ 
                  require('@tailwindcss/line-clamp'), // 縮減字串
                ] ,

                
} ) ;