
/* eslint-disable @next/next/no-img-element */

import "react-responsive-carousel/lib/styles/carousel.min.css" ; // requires a loader
import { Carousel } from "react-responsive-carousel" ; 




const Carousel_With_Gradient = () => {


    return <div className="realtive">


            { /* 灰色漸變 ( gradient ) */ } 
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />   



            <Carousel autoPlay           
                      infiniteLoop                            
                      showStatus     = { false } 
                      showIndicators = { false } 
                      showThumbs     = { false }
                      interval       = { 5000 } >

                        { /* loading = "lazy" -> 有助於下載速度 */ }

                        <div>
                            <img loading = "lazy" src = "https://links.papareact.com/gi1" alt="" />
                        </div>

                        <div>
                            <img loading = "lazy" src = "https://links.papareact.com/6ff" alt="" />
                        </div>   
                        
                        <div>
                            <img loading = "lazy" src = "https://links.papareact.com/7ma" alt="" />
                        </div>   

            </Carousel>          



         
           </div> 




} ;

export default Carousel_With_Gradient
       