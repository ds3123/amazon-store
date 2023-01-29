/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Currency from "react-currency-formatter" ;
import { useSession } from "next-auth/react" ; 
import { useRouter } from "next/router";

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

import { useSelector } from "react-redux" ;
import { loadStripe } from "@stripe/stripe-js" ;

import axios from "axios" ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faMoneyBill1Wave , faHome } from "@fortawesome/free-solid-svg-icons";


// Stripe ： 利用 Stripe 公鑰取得聯繫的 Promise
const stripePromise = loadStripe( process.env.stripe_public_key ) ;


// @ 結帳頁面
const Checkout = () => {


    // 取得 _ Google 授權登入的使用者資訊
    const { data : session } = useSession() ;

     
    // 加入購物車的產品項目
    const selected_Items = useSelector( ( state : any ) => state.basket.items ) ; 

    // 加入項目 : 總計金額
    const selected_Total = selected_Items.reduce( ( total , item ) => total + item.price , 0 ) ;


    // 建立 _ Stripe checkout session
    const createCheckoutSession = async() => {
    
        // 聯繫 Stripe
        const stripe = await stripePromise ;

        // 傳送購物車資料給 Stripe ( 呼叫後端 API，建立 checkout session )
        const checkoutSession = await axios.post( "/api/create-checkout-session" , {
                                                                                      items : selected_Items ,
                                                                                      email : session.user.email  
                                                                                    }) ;   
        // 重導向使用者至 Stripe 的 checkout 介面
        const result = await stripe.redirectToCheckout( { sessionId : checkoutSession.data.id } ) ;

        // 異常處理 
        if( result.error ) alert( result.error.message ) ; 
        
    } ;


    const router = useRouter()

    return <div className="bg-gray-100">

             <Front_Search_Header placeholder="請輸入搜尋關鍵字" />
                  
             <main className="lg:flex max-w-7xl mx-auto mt-10 mb-20">
 
               { /* Left */ }
               <div className="flex-grow m-5 shadow-sm"> 
                    
                    { /* Banner */ }     
                    <img loading = "lazy" src="https://espetsso-media.s3-accelerate.amazonaws.com/img/cms/blog-images/promotions/2019/espetsso_blog_promotion_petExpo_header.jpg" alt="" />

                    { /* Shopping List */ }
                    <div className="flex flex-col p-5 space-y-10 bg-white mt-5">
                         
                         <h1 className="text-2xl border-b pb-3"> 
                         
                           { 
                               selected_Items.length === 0 ? 

                                       <p className = "text-red-500" > 

                                            <span className = "mr-3"> 購物車無任何商品 </span>
                                            
                                            <span className = "cursor-pointer rounded-lg inline-block px-3 py-1 bg-red-400 hover:bg-red-800 text-white text-md"
                                                  onClick   = { () => router.push( "/" ) } > 
                                               <FontAwesomeIcon className="h-16 mr-1" icon = { faHome } /> 回首頁繼續挑選 
                                            </span>

                                        </p> :  

                                       <p className = "text-blue-500"> 
                                       
                                           <span className = "mr-3"> 購物車商品清單 </span> 

                                           <span className = "cursor-pointer rounded-lg inline-block px-3 py-1 bg-blue-400 hover:bg-blue-800 text-white text-md"
                                                  onClick   = { () => router.push( "/" ) } > 
                                               <FontAwesomeIcon className="h-16 mr-1" icon = { faHome } /> 回首頁繼續挑選 
                                            </span>
                                       
                                       
                                       
                                       </p> 
                           }

                         </h1>

                         { selected_Items.map( ( item , index ) => <Checkout_Product key = { index } { ...item } /> ) }

                    </div>

               </div>

               { /* Right */ }
               { selected_Items.length > 0 &&

                    <div className="flex flex-col bg-white p-10 shadow-md">
                         
                              <>

                                   <h2 className="whitespace-nowrap mb-3"> 

                                        小 計 ( 商品數 : { selected_Items.length } ) &nbsp;

                                        <span className="font-bold text-red-500 text-lg">
                                             <Currency quantity = { selected_Total } currency = "TWD" />
                                        </span>

                                   </h2>

                                   <button role      = "link"  
                                             disabled  = { !session } 
                                             onClick   = { createCheckoutSession }
                                             className = { `amazon-button mt-2 text-lg
                                                            ${ !session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed' }` } >

                                        <FontAwesomeIcon className="h-16 mr-2" icon = { faMoneyBill1Wave } />

                                        { !session ? '請先登入帳號' : '開始結帳' }

                                   </button>
                              
                              </>   
                         
                    </div>

              }
                
             </main>  
    
             <Front_Common_Footer /> 

           </div>

} ;

export default Checkout
       