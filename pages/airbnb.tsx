

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


import { I_Scroll_Card } from "@type/basic_Types" ;
import { I_Small_Card } from "@type/basic_Types" ;


type Props = {

    small_Card_Data  : [ I_Small_Card ] ;
    scroll_Card_Data : [ I_Scroll_Card ] ; 
  
}



 const Airbnb = ( { small_Card_Data , scroll_Card_Data } : Props ) => {



  return <div>


            <Front_Search_Header placeholder="請輸入搜尋關鍵字"/>  

            <React_Responsive_Carousel images = { [] } />
         
            <main className="max-w-7xl mx-auto px-8 sm:px-16">

                {/* <Small_Card section_Title  = "本週特惠" card_Data={ small_Card_Data  } />

                <Bottom_Info_Card card_Data = { scroll_Card_Data } />
                <Bottom_Info_Card card_Data = { scroll_Card_Data } />
                <Bottom_Info_Card card_Data = { scroll_Card_Data } />

                <Scroll_Card section_Title = "精選商品" card_Data={ scroll_Card_Data } />   */}

                <Large_Card img_Title    = "The Greatest Outdoors" 
                            img_Subtitle = "Whishlists curated by airbnb" 
                            img_Url      = "https://links.papareact.com/4cj"
                            button_Text  = "Get Inspired"  />   

                <Left_Main_Pic images    = { [] } />

            </main>

            <Banner_Center_Info img_Url     = "https://links.papareact.com/0fm"
                                img_Title   = "本週新增多樣商品"
                                button_Text = "查看最新活動" />

            <Banner_Right_Image img_Title    = "Medium is a place to write, red, and connect." 
                                img_Subtitle = "It's easy and free to post your thinking on any topic and connect with millions of readers." 
                                img_Url      = "https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" />   
            
            <Front_Common_Footer /> 

         </div>  
            
     
  


} ;

export default Airbnb



// Home.Layout = Layout 
// Home.getLayout = function getLayout( page ){

//   return <Layout> 
    
//            { page }  

//          </Layout>


// }


// 以下 url 取得資料，會有錯誤 2023.01.10
// export async function getStaticProps(){

//   const small_Card_Data  = await fetch( "https://links.papareact.com/pyp"  )
//                                  .then( res => res.json() ) ;
                  
//   const scroll_Card_Data = await fetch( "https://links.papareact.com/zp1" )
//                                  .then( res => res.json() ) ;      
  
 
//   return {
//            props :{
//                     small_Card_Data , 
//                     scroll_Card_Data     
//                   }

//          }

// }

