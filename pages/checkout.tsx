/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import Currency from "react-currency-formatter" ;
import { useSession } from "next-auth/react" ; 


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
    Checkout_Product ,
    Front_Search_Header ,
    Front_Common_Footer ,
    Amazon_Header ,
} from "@layout/index" ;

import { useSelector } from "react-redux";




// @ 結帳頁面
const Checkout = () => {



    // 取得 _ Google 授權登入的使用者資訊
    const { data : session } = useSession() ;

     

    // 加入購物車的產品項目
    const selected_Items = useSelector( ( state : any ) => state.basket.items ) ; 

    // 加入項目 : 總計金額
    const selected_Total = selected_Items.reduce( ( total , item ) => total + item.price , 0 ) ;


    return <div className="bg-gray-200">

             <Amazon_Header placeholder = "SS" />
                  
             <main className="lg:flex max-w-screen-2xl mx-auto">
 
               { /* Left */ }
               <div className="flex-grow m-5 shadow-sm"> 
                    
                    { /* Banner */ }               
                    <Image src = "https://links.papareact.com/ikj" width = { 1020 } height = { 250 } objectFit = "contain"  />

                    { /* Shopping List */ }
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                         
                         <h1 className="text-2xl border-b pb-3"> 
                         
                           { selected_Items.length === 0 ? "購物車無任何商品" : "目前所點選購物清單" }

                         </h1>

                         { selected_Items.map( ( item , index ) => <Checkout_Product key = { index } { ...item } /> ) }

                    </div>

               </div>

               { /* Right */ }
               <div className="flex flex-col bg-white p-10 shadow-md">
                    
                    { selected_Items.length > 0 &&
                    
                         <>

                             <h2 className="whitespace-nowrap"> 

                                  Subtotal ( { selected_Items.length } items ) :&nbsp;

                                  <span className="font-bold">
                                      <Currency quantity = { selected_Total } currency = "GBP" />
                                  </span>

                             </h2>

                             <button disabled = { !session } className = { `amazon-button mt-2 
                                                                            ${ !session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed' }` } >

                                { !session ? 'Sign In To Checkout' : 'Proceed To Checkout' }

                             </button>
                          
                          </>   
                    
                    }

               </div>
                
             </main>  
    
           </div>

} ;

export default Checkout
       