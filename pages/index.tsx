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


    return <div className="bg-gray-100" >
 
                <Head>
                     <title> 狗狗公園  </title>
                </Head>

                <Front_Search_Header placeholder="請輸入搜尋關鍵字" />

                <main className="max-w-8xl mx-auto px-0 md:px-15">

                    { /* Carousel */ }
                    <React_Responsive_Carousel images = { [] } />

                    { /* ProductFeed */ }
                    <Amazon_Products products = { products } />

                    { /* Banner */ } 
                    <Banner_Center_Info img_Url     = "https://shoplineimg.com/5865c87a72fdc0f66d002f94/624119c12274ce001889f69b/1200x.webp?source_format=png"
                                        img_Title   = "本週新增多樣商品"
                                        button_Text = "查看最新活動" />

                    { /* Banner */ } 
                    <Banner_Center_Info img_Url     = "https://cms.cdn.91app.com/images/original/1848/2ca13621-61e2-4a36-a117-976d4e5d6cc4-1573700291-o3df7bs9vn_m_1200x563_800x375_400x188.jpg"
                                        img_Title   = "本週新增多樣商品"
                                        button_Text = "查看最新活動" />

                  
                    { /* Footer */ } 
                    <Front_Common_Footer /> 
    
                </main>

          </div>

}


export const getServerSideProps = async( context ) => {

     // const products  = await fetch( "https://fakestoreapi.com/products" ).then( res => res.json() ) 
     const products  = [] ;

     return { 
              props : {
                        products : products       
                      } 
            }

} ;