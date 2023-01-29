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
                    <img loading = "lazy" src="https://shoplineimg.com/5865c87a72fdc0f66d002f94/620d9e938d278f00231499af/1200x.webp?source_format=jpg" alt="image3"/>
                    {/* <p className="legend">Image 3</p> */}
                </div>

                <div>
                    <img loading = "lazy" src="https://static.accupass.com/eventbanner/2301090652555771672400.jpg" alt="image2" />
                    {/* <p className="legend">Image 2</p> */}
                </div>

                <div>
                    <img loading = "lazy" src="https://shoplineimg.com/5865c87a72fdc0f66d002f94/5cb3e9e5c6163211fbf62011/1200x.webp?source_format=jpg" alt="image3"/>
                    {/* <p className="legend">Image 3</p> */}
                </div>

           </Carousel>

} ;


export default React_Responsive_Carousel
       