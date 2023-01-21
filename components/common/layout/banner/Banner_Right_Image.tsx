
import Image from 'next/image' ;
import { I_Banner_Right_Image  }  from "@type/basic_Types" ;

/*

  @ Banner ( 左邊文字，右邊圖片 )

*/

const Banner_Right_Image = ( { img_Title , img_Subtitle , img_Url , img_Alt } : I_Banner_Right_Image ) => {


    return  <div className="flex justify-between items-center
                           bg-yellow-400 border-y border-black py-10 lg:py-0">

                { /* 標題、副標題  */ }
                <div className="px-10 space-y-5">
                    <h1 className="text-6xl max-w-xl font-serif"> { img_Title }  </h1>
                    <h2 className="text-gray-600 text-2xl"> { img_Subtitle } </h2>
                </div>

                { /* 圖片 */ }
                <img className="hidden md:inline-flex h-32 lg:h-full" src = { img_Url } alt = { img_Alt } />

            </div>



} ;


export default Banner_Right_Image
       


