

import { I_Bottom_Info_Card } from "@type/basic_Types";


type T_Small_Card = {
          
    card_Data     : [ I_Bottom_Info_Card ] ; // 卡片資料
  
  }
  

/*

  @ 上方圖片、下方文字資訊

*/

const Bottom_Info_Card = ( { card_Data } : T_Small_Card ) => {

   return  <div className="grid grid-cols-2 md:grid-cols-4
                           gap-3 mt-20 md:gap-6">

               { 
                 card_Data?.map( ( card : I_Bottom_Info_Card , index : number ) => (

                    <div key={index} className="border rounded-lg group cursor-pointer overflow-hidden">

                        <img className="h-60 w-full object-cover  
                                        group-hover:scale-105 
                                        transition-transform duration-200 ease-in-out"
                             src={ card.img } 
                             alt="" />

                        <div className="flex justify-between p-5 bg-white"> 
                    
                            <div>
                                <p className="text-lg font-bold"> { card.title } </p>
                                <p className="text-xs"> { card.img_Subtitle }  </p>
                            </div>  

                            <p className="text-red-400">
                                $204
                            </p>

                        </div>

                  </div> 

                 )) 
               }
                  
           </div>                   

} ;

export default Bottom_Info_Card
       