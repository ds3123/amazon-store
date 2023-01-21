/*

   @ 前端共同 Header ( 舊的，廢棄或修改 2022.04.03 )

*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const Front_Common_Header = () => {


   return <div className="border-2 h-24 md:h-40 shadow-lg">

              { /* 桌機 */ }
              <div className="border-2 p-5 h-full max-w-6xl mx-auto hidden lg:block">

                  <div className="border-2 w-60 h-20">
                  <h2>德昕商城</h2>

                    {/* <FontAwesomeIcon icon={['fas', 'angry']} style={{ fontSize:"30" , color:"blue" }} />  */}

                    <FontAwesomeIcon icon={['fas','alicorn']}  style={{ fontSize:"50" , color:"red" }}/>

                  </div>

              </div>

              { /* 平板 */ }
              <div className="border-2 p-5 h-full max-w-6xl mx-auto hidden md:block lg:hidden">
                  
                  平板  <FontAwesomeIcon icon={['fas','arrow-alt-circle-right']}  className="text-xl" />

                  

              </div> 


               { /* 手機 */ }
              <div className="p-3 h-full max-w-6xl mx-auto md:hidden">
                  
                  手機
                  
              </div>  

          </div>


} ;

export default Front_Common_Header
       