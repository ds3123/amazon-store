
import Image from "next/image";
import { I_Large_Card } from "@type/basic_Types";



/*

  @ 大圖片( 與 Banner 一樣滿版，左側有文字 )

*/

const Large_Card = ( { img_Url , img_Title , img_Subtitle , button_Text } : I_Large_Card ) => {


    return <section className="relative py-16 cursor-pointer">

                <div className="relative h-96 min-w-[300px]">

                <Image src={ img_Url } layout= "fill" objectFit="cover" className="rounded-2xl"/> 

                </div>

                <div className="absolute top-32 left-12">

                    <h3 className="text-4xl mb-3 w-64"> { img_Title } </h3>
                    <p> { img_Subtitle } </p>
                    <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5"> 
                           { button_Text } 
                    </button>

                </div>

            </section>


} ;

export default Large_Card
       