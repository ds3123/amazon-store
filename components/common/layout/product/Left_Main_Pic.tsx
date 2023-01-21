/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

/*

   左側 1 張主圖，右側 8 張小圖

*/


import { FC } from 'react'

const Left_Main_Pic : FC< { images:string[] } > = ( { images } ) => {



    return <div className="flex border-2 mt-16 mb-10">

                 { /* 主圖  */ }
                 <div className="hidden lg:block lg:w-1/3 lg:relative">
                    <img className="absolute inset-0 h-full w-full object-cover object-center" src="/images/vocation.jpg" />
                 </div>

                 { /* ------------------------------------------------------------------------------------------------------------ */ } 

                 <div className="border-2 border-yellow-400 sm:max-w-full lg:relative lg:w-2/3">
                     
                       { /* 主圖  */ }
                       <div className="h-80 overflow-hidden lg:inline-block">

                          <img className="sm:w-full sm:object-cover sm:object-center lg:hidden" src="/images/vocation.jpg" />

                       </div>
                       

                       <div className='mt-8 lg:mt-0 lg:inline-block  border-2 border-red-400 h-full columns-2 sm:columns-2 lg:columns-4 gap-y-1 '>
                          
                         <img className="w-full lg:h-1/2 border-2" src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png" />
                         <img className="w-full lg:h-1/2 border-2" src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png" />
                         <img className="w-full lg:h-1/2 border-2" src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png" />
                         <img className="w-full lg:h-1/2 border-2" src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png" />
                         <img className="w-full lg:h-1/2 border-2" src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png" />
                         <img className="w-full lg:h-1/2 border-2" src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png" />
                         <img className="w-full lg:h-1/2 border-2" src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png" />
                         <img className="w-full lg:h-1/2 border-2" src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png" />
                         
                       </div>  

                  </div>

              </div>
                 

} ;


export default Left_Main_Pic
       