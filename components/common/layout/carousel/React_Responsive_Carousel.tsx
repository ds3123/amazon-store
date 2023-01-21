/* eslint-disable @next/next/no-img-element */


/*

  輪播套件 : < React Responsive Carousel >

   https://www.npmjs.com/package/react-responsive-carousel

*/

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';




const React_Responsive_Carousel = ( { images } : { images:string[] } ) => {

    return <Carousel  autoPlay      = {true} 
                      infiniteLoop  = {true} 
                      dynamicHeight = {true} 
                      showThumbs    = {false}	>

                <div>
                    <img loading = "lazy" src="https://links.papareact.com/4cj" alt="image1"/>
                    {/* <p className="legend">Image 1</p> */}
                </div>

                <div>
                    <img loading = "lazy" src="https://links.papareact.com/4cj" alt="image2" />
                    {/* <p className="legend">Image 2</p> */}
                </div>

                <div>
                    <img loading = "lazy" src="https://links.papareact.com/0fm" alt="image3"/>
                    {/* <p className="legend">Image 3</p> */}
                </div>

           </Carousel>

             




} ;


export default React_Responsive_Carousel
       