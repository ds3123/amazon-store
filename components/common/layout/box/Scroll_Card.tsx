
import { I_Scroll_Card } from "@type/basic_Types" ;
import Image from "next/image" ;


/*

  @ 可左右滾動圖片卡

*/


type T_Scroll_Card = {

    section_Title : string ;          // 區塊標題
    card_Data     : [ I_Scroll_Card ] // 卡片資料

}



const Scroll_Card = ( {  section_Title , card_Data } : T_Scroll_Card ) => {

   return <section className="mt-10">
       
            <h2 className="text-4xl font-semibold py-8"> { section_Title } </h2>

            { /* 卡片資料 */ }
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">

                {
                  card_Data?.map( ( card : I_Scroll_Card , index : number ) => (

                    <div key={ index } className="cursor-pointer hover:scale-105
                                                  transition transform duration-300 ease-out"> 

                        <div className="relative h-80 w-80">
                            <Image src={ card.img } layout="fill" className="rounded-xl" />
                        </div>

                        <h3 className="text-2xl mt-3"> { card.title } </h3>

                    </div>

                  ) )   
                } 
                
            </div>    

         </section>   



} ;


export default Scroll_Card
       