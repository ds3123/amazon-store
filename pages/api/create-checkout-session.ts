/* eslint-disable import/no-anonymous-default-export */



/*
     
    @ Next API 接口 ： "/api/create-checkout-session"
     
*/  

// 匯入 Stripe 模組，並從環境變數設定檔案，輸入 _ 私鑰 ( STRIPE_SECRET_KEY )
const stripe = require( "stripe" )( process.env.STRIPE_SECRET_KEY ) ;

export default async( req , res ) => {

   // 取得 _ 前端傳送過來的資料 
   const { items , email } = req.body ;

   // 將前端購物車傳送過來的資料，轉換為 Stripe 可接受資料格式
   const transformedItems = items.map( ( item ) => ( {

                                            // 商品數量
                                            quantity    : 1 , 
                                            
                                            // 商品資訊 
                                            price_data  : {

                                                           currency     : "gbp" ,             // 英鎊 

                                                           /*

                                                               1. Stripe 接受每種貨幣的次單元 / unit_amount 

                                                                    Ex. 若為 美元 dollar，次單元則為 _ 美分cent ; 
                                                                        若為 英鎊 pound，次單元則為 ＿便士 penny 
                                                                    
                                                               2. 由英鎊 ( Pound ) 轉為 便士 ( Penny ) 匯率 -> 1 : 100

                                                           */
                                                           unit_amount  :  item.price * 100 , 
                                                           product_data : {
                                                                            name        : item.title ,
                                                                            description : item.description ,
                                                                            images      : [ item.image ] ,
                                                                          } ,

                                                         }  ,

                                            }) ) ;
   
   // 建立 session
   const session = await stripe.checkout.sessions.create({
                                                           payment_method_types        : [ "card" ] ,
                                                           
                                                           // 運費（ 可於 Stripe 介面中設定：產品 > 運費 ） 
                                                                 
                                                           shipping_options: [
                                                                                {
                                                                                    shipping_rate_data: {
                                                                                                          type              : 'fixed_amount',
                                                                                                          fixed_amount      : { amount : 0 , currency : 'gbp' } ,
                                                                                                          display_name      : '免運費',
                                                                                                          delivery_estimate : {
                                                                                                          minimum           : { unit : 'business_day', value: 5},
                                                                                                          maximum           : { unit : 'business_day', value: 7},
                                                                                                       }  ,
                                                                                    } ,
                                                                                } ,
                                                                             ] ,
                                                           
                                                           
                                                           shipping_address_collection : {
                                                                                           allowed_countries : [ "GB" , "US" , "CA" ] // 可運送國家  
                                                                                          } ,
                                                           line_items           : transformedItems ,
                                                           mode                 : "payment" ,                        
                                                           success_url          : `${ process.env.HOST }/success` ,  // checkout 成功，重導向 url
                                                           cancel_url           : `${ process.env.HOST }/checkout` , // checkout 取消，重導向 url
                                                           metadata             : {
                                                                                    email ,
                                                                                    images : JSON.stringify( items.map( ( item ) => item.image ) )
                                                                                  }
                                                         }) ;                                    

    // 請求成功回應                                                          
    res.status( 200 ).json( { id : session.id } ) ; 

}

