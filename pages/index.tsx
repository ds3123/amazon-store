import Head from "next/head" ;

import { React_Responsive_Carousel , 
         Carousel_With_Gradient ,
         Amazon_Products ,
         Left_Main_Pic ,
         Banner_Right_Image ,
         Banner_Center_Info ,
         Scroll_Card ,
         Small_Card ,
         Large_Card , 
         Bottom_Info_Card  ,
         Front_Search_Header ,
         Front_Common_Footer ,
         Amazon_Header ,
 } from "@layout/index" ;



/*
 
   Amazon 專案練習樣板 ( 2023.01.16 )
   https://www.youtube.com/watch?v=DF68MNDxVwU

*/


export default function Amazon( { products } ){


    return <div className="bg-gray-100 ">
 
                <Head>
                     <title> Amazon 2.0  </title>
                </Head>

                <Amazon_Header placeholder="GG"/>

                <main className="relative max-w-screen-2xl mx-auto">

                    { /* Banner */ }
                    <Carousel_With_Gradient />

                    { /* ProductFeed */ }
                    <Amazon_Products products = { products } />
    
                </main>

          </div>

}


export const getServerSideProps = async( context ) => {

     const products  = await fetch( "https://fakestoreapi.com/products" ).then( res => res.json() )  

     return { 
              props : {
                        products : products       
                      } 
            }

} ;