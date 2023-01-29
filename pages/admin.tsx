/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head" ;
import Image from "next/image" ;


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
        Front_Search_Header ,
        Front_Common_Footer ,
        Amazon_Header ,
        Admin_Header
} from "@layout/index" ;

import { getSession } from "next-auth/react";


/*

   @ 後台

*/



const Admin = () => {


    return <div>

              <Head>
                     <title> 後台  </title>  
                
              </Head>            

              <Admin_Header />

              { /* Add Section */ }
              <section className="bg-[#F8F9FA] pb-10 px-10">

                 <div className="max-w-3xl mx-auto">

                     { /* Top nav */ }
                     <div className="flex items-center justify-between py-6">

                         <h2 className="text-gray-700 text-xl"> Start a new document </h2>

                         <div className="w-10 h-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                         </div>

                     </div>

                     { /* Add Image */ }
                     <div>

                       <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-gray-400">
                          <Image src="https://links.papareact.com/pju" layout="fill"/>
                       </div>

                       <p className="ml-2 mt-2 font-semibold text-sm text-gray-700"> Blank </p>

                     </div>

                 </div>

              </section>

              { /* List Section */ }
              <section className="bg-white px-10 md:px-0">

                <div className="max-w-3xl mx-auto py-8">
                 
                    <div className="flex items-center justify-between pb-5">
                        <h2 className="font-medium flex-grow"> My Documents </h2>
                        <p> Date Created </p>
                    </div>


                </div>

              </section>

           </div>

} ;


export default Admin


export async function getServerSideProps( context ){

    // 取得 _ Next Auth 的 session
    const session = await getSession( context ) ;


    return {
             props : {
                       session  
                     }
 
           }

     

}


       