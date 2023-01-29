/* eslint-disable @next/next/no-img-element */

import { Product_Card } from "@layout/index" ;

/*

    # 不同版面配置，擷取不同商品
  
*/

const data = [ 
               { id : 1 , price : 8990 , category : '衛生裝置' , hasPrime : false , title : 'Drybo Plus 寵物烘乾箱' , description : '嘖嘖全台最大寵物專案'  , image : 'https://cdn.shopify.com/s/files/1/0627/7863/8568/products/cf9297a0e939385ac9804f0d61d54fc6_431bbf2f-39a2-4022-88ee-4a76273a5216_2048x2048.jpg?v=1666859482'  } ,   
               { id : 2 , price : 2380 , category : '飲食用品' , hasPrime : false , title : '原木寵物托高碗架 M/胡桃木色' , description : '托高傾斜的設計、減緩寶貝頸椎壓力，讓每一口進食更多安穩、更加舒適。'  , image : 'https://shoplineimg.com/596c769772fdc082440004d4/5d956ea7cda7d400385a9ad7/800x.webp?source_format=jpg'  } ,   
               { id : 3 , price : 4280 , category : '生活用品' , hasPrime : false , title : '【LINGO】三合一多功能寵物床組' , description : 'LINGO沙發床適合寒冷冬天，三面環繞的靠枕溫暖之餘並帶給毛孩更多安全感 ● LINGO床墊在涼爽的春秋和四季皆適用，床墊移動方便性更佳，隨處都可趴趴睡。'  , image : 'https://cdn.shopify.com/s/files/1/0306/7658/2535/products/LINGO_1024x1024.png?v=163653628'  } ,   
               { id : 4 , price : 2030 , category : '飲食用品' , hasPrime : false , title : '【巔峰 ZiwiPeak】96%鮮肉貓糧' , description : '96%高含肉量，模擬犬貓原始的食性設計，並添加天然關節養護食材「綠貽貝」。​'  , image : 'https://cdn.shopify.com/s/files/1/0306/7658/2535/products/ZiwiPeak_96___400g_bd69f561-a65e-4527-ab2a-7b59fa973feb_1024x1024.png?v=1601005679'  } ,   
               { id : 5 , price : 520 , category : '衛生裝置' , hasPrime : false , title : '【毛起來】草本養護│沁檸蘭草防蚤洗毛精-汪汪專用 500ml' , description : '針對油性肌、一般肌狗狗打造的溫和洗毛精。添加香檸檬果油、佛手柑精油，天然配方能使蚤蟲不上身。​'  , image : 'https://cdn.shopify.com/s/files/1/0306/7658/2535/products/15fd8b0a959637fa45eba05873703e3f_1024x1024.png?v=1600999589'  } ,   
               { id : 6 , price : 320 , category : '衛生裝置' , hasPrime : false , title : '毛起來】草本養護│柔順不打結神奇護毛乳-汪喵通用' , description : '針對寵物細緻肌膚打造溫和草本滋養配方，添加維他命，使毛髮不易打結健康柔順好梳理。​'  , image : 'https://cdn.shopify.com/s/files/1/0306/7658/2535/products/220_5b1e2a99-0ef3-4b0a-bea7-1a19ddb5005b_1024x1024.png?v=1600999716'  } ,   
               { id : 7 , price : 460 , category : '衛生裝置' , hasPrime : false , title : '毛起來】草本養護│問題肌專用植萃修復露' , description : '毛起來】草本養護│問題肌專用植萃修復露​'  , image : 'https://cdn.shopify.com/s/files/1/0306/7658/2535/products/211008________225_1024x1024.png?v=1637209071'  } ,   
               { id : 8 , price : 120 , category : '飲食用品' , hasPrime : false , title : '毛起來】蒸的餐包│和風野菇雞' , description : '透過清蒸保住食材的鮮甜精華，提供給毛孩一頓更天然純真的美食！​'  , image : 'https://cdn.shopify.com/s/files/1/0306/7658/2535/products/1_8e2a1458-93d9-4e44-907f-706fb93c6bf0_1024x1024.png?v=1663153474'  } ,   
               { id : 9 , price : 249 , category : '衛生裝置' , hasPrime : false , title : '【毛起來】速乾超吸水 軟綿綿柔膚手套毛巾' , description : '喜迎兔年🐰免運來囉​,全站滿$399限時免運中'  , image : 'https://cdn.shopify.com/s/files/1/0306/7658/2535/products/170412_1024x1024.png?v=1600999693'  } ,   
               { id : 10 , price : 320 , category : '飲食用品' , hasPrime : false , title : '【毛起來】阿姆阿姆潔牙棒│南非國寶茶(淨臭) 13入裝' , description : '讓毛孩利用咀嚼達到口腔清潔、輔助潔牙的效果，50%鮮雞絕佳適口性，亦可當點心、當獎勵餵食。'  , image : 'https://cdn.shopify.com/s/files/1/0306/7658/2535/products/7e9273af27b72c64c3b0f7fbf02905cc_1024x1024.png?v=1601006343'  } ,   
               { id : 11 , price : 650 , category : '飲食用品' , hasPrime : false , title : '【毛起來】護膚無穀犬糧│S13低敏放牧羊' , description : '讓毛孩利用咀嚼達到口腔清潔、輔助潔牙的效果，50%鮮雞絕佳適口性，亦可當點心、當獎勵餵食。'  , image : 'https://cdn.shopify.com/s/files/1/0306/7658/2535/products/S13_1.5kg_1024x1024.png?v=1672195352'  } ,   
               { id : 12 , price : 650 , category : '衛生裝置' , hasPrime : false , title : '口腔對策│喵口回春潔牙凝膠' , description : '專為貓貓設計的貓草味牙膏，全成分可食用的安心配方。'  , image : 'https://cdn.shopify.com/s/files/1/0306/7658/2535/products/967dae68772803b9a1add951d27f1299_1024x1024.png?v=1600999597'  } ,   
               { id : 13 , price : 490 , category : '醫療保健' , hasPrime : false , title : '毛孩每日健康賞│泌尿好輕鬆賞(30錠)' , description : '為毛孩量身打造的泌尿道保健品，維持泌尿下水道健康，尿尿自然好輕鬆！'  , image : 'https://cdn.shopify.com/s/files/1/0306/7658/2535/products/30_1024x1024.png?v=1601006821'  } ,   
               { id : 14 , price : 580 , category : '醫療保健' , hasPrime : false , title : '毛孩每日健康賞│AB益生菌好腸胃賞' , description : '為毛孩量身打造的泌尿道保健品，維持泌尿下水道健康，尿尿自然好輕鬆！'  , image : 'https://cdn.shopify.com/s/files/1/0306/7658/2535/products/AB_1024x1024.png?v=160100549'  } ,   
               { id : 15 , price : 520 , category : '醫療保健' , hasPrime : false , title : '毛孩每日健康賞│關節好骨力賞(30錠/70錠)' , description : '為毛孩量身打造的泌尿道保健品，維持泌尿下水道健康，尿尿自然好輕鬆！'  , image : 'https://cdn.shopify.com/s/files/1/0306/7658/2535/products/Plus___30_1024x1024.png?v=1601005864'  } ,   

             ] as any ;




const Amazon_Products = ( { products } ) => {



    return <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 md:-mt-30 mx-auto">

              {/* 前 4 個商品  */}
              { data.slice( 0 , 4 ).map( ( data ) => <Product_Card key = { data.id } { ...data } /> ) }
 
              {/* Banner */}
              <img className=" col-span-full" src="https://links.papareact.com/dyz" alt="" />

              {/* 第 5,6 個商品  */}
              <div className="md:col-span-2"> 

                { data.slice( 4 , 5 ).map( ( data ) => <Product_Card key = { data.id } { ...data } /> ) }

              </div>
        
              { /* 剩下的商品  */ } 
              { data.slice( 5 , data.length ).map( ( data ) => <Product_Card key = { data.id } { ...data } /> ) }

           </div>

} ;

export default Amazon_Products
       