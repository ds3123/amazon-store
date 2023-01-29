/** @type {import('next').NextConfig} */


// # 匯出 _ Next js 程式設定、使用
module.exports = {

  reactStrictMode : false ,

  

  experimental    : {
                      appDir : true
                    } ,

  images          : {
                       domains : [ 
                                   'links.papareact.com' , 
                                   'fakestoreapi.com' ,
                                   'www.jsonkeeper.com' ,
                                   'i.imgur.com' ,
                                   'shoplineimg.com' ,
                                   'cms.cdn.91app.com' ,
                                   'cdn.shopify.com'
                                  ],
                    } ,

  env : {
           // 匯出 _ 環境變數設定值（ 檔案 ： .env.local ）， 供程式使用  Ex. checkout.tsx 中的 loadStripe( process.env.stripe_public_key ) 
           stripe_public_key : process.env.STRIPE_PUBLIC_KEY  
        }

}