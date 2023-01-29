/* eslint-disable jsx-a11y/alt-text */

import Image from "next/image";

import { I_Banner_Center_Info } from "@type/basic_Types";


/*

  Banner ( 中間有文字、按鈕 )

*/

const Banner_Center_Info = ( { img_Url , img_Title , button_Text  } : I_Banner_Center_Info ) => {


  return <div className="relative h-[300px] 
                         sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">

            <Image src       = { img_Url } 
                   layout    = "fill"
                   objectFit = "cover"  
            />

            <div className="absolute top-1/2 w-full text-center">

                {/* <p className="text-xl"> { img_Title } </p>

                <button className="text-purple-500 bg-white mt-10 px-10 py-4
                                    shadow-md rounded-full font-bold my-3
                                    hover:shadow-xl active:scale-90
                                    transition duration-150"> 
                    { button_Text }
                </button> */}

            </div>

        </div>

} ;


export default Banner_Center_Info
       