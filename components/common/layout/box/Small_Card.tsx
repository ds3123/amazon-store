
import { I_Small_Card } from "@type/basic_Types" ;
import Image from "next/image" ;




/*

  @ 小圖片( 左側圖片，右側文字 )

*/


type T_Small_Card = {

  section_Title : string ;           // 區塊標題
  card_Data     : [ I_Small_Card ] ; // 卡片資料

}


const Small_Card = ( { section_Title , card_Data } : T_Small_Card ) => {


    return  <section className="mt-10 pt-6">

                <h2 className="text-4xl font-semibold pb-5"> { section_Title } </h2>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>  

                    {
                        card_Data?.map( ( card : I_Small_Card , index : number ) => (

                            <div key={ index } className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
                                                        hover:bg-gray-100 hover:scale-105
                                                          transition transform duration-200 ease-out"> 
               
                                    { /* Left */ }  
                                    <div className="relative h-20 w-20">
                                        <Image src = { card.img } layout = "fill" className="rounded-lg" />
                                    </div>  

                                    { /* Right */ }  
                                    <div>
                                        <h2> { card.location } </h2>
                                        <h3 className="text-gray-500"> { card.distance } </h3>
                                    </div>

                            </div> 
                            
                        ) )   
                    } 


                </div>

            </section>            


} ;

export default Small_Card
       





