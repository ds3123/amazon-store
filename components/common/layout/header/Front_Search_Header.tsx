/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { useState } from "react" ;
import { useRouter } from "next/router";
import { 
    SearchIcon ,
    GlobeAltIcon ,
    MenuIcon ,
    UserIcon ,
    LoginIcon ,
    LogoutIcon ,
    UserCircleIcon ,
    ShoppingCartIcon
   } from "@heroicons/react/solid" ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faDatabase } from "@fortawesome/free-solid-svg-icons";


import { useSelector } from "react-redux" ;
import { signIn , signOut , useSession } from "next-auth/react" ; 

/*

  @ 前台含有搜尋欄的 Header

*/

  
const Front_Search_Header = ( { placeholder } : T_Header ) => {


    const [ searchInput , set_SearchInput ] = useState( "" ) ;


    // 取得 _ Google 授權登入的使用者資訊
    const { data : session } = useSession() ;


    const router = useRouter()

     // 加入購物車的產品項目
     const selected_Items = useSelector( ( state : any ) => state.basket.items ) ; 


    return <header className="sticky top-0 z-50  shadow-md ">

                { /* Top Nav */ }
                <div className = "grid grid-cols-2 md:grid-cols-3 bg-white p-5 md:px-10" >
                    
                    { /* Left : logo */ }
                    <div className = "relative flex h-18 items-center cursor-pointer my-auto"
                         onClick   = { () => router.push( "/" ) } >

                        <img loading="lazy" className="w-60" src="https://i.imgur.com/8bvjeDJ.png" alt="" />

                    </div>

                    { /* Middle : Search */ }
                    <div className = "hidden md:flex relative top-4  items-center h-12 md:border-2 rounded-full py-2 md:shadow-sm" >

                        <input className   = "flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" 
                            type        = "text"
                            value       = { searchInput } 
                            onChange    = { e => set_SearchInput( e.target.value ) }
                            placeholder = { placeholder || "Start your search..." }  />

                        <SearchIcon className = "hidden md:inline-flex h-8 bg-gray-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />

                    </div>

                    { /* Right */ }  
                    <div className="flex items-center space-x-4 justify-end text-gray-500">

                        { /* 管理系統 */ }
                        <div className = "hidden lg:flex lg:items-center bg-gray-600 hover:bg-black text-white cursor-pointer border hover:border-gray-500 rounded-full py-3 px-4" 
                             onClick   = { ()=> window.open( "http://demo05.cchouse.com.tw/" , "_blank" ) } >
                            
                           <FontAwesomeIcon className="h-14 mr-2" icon = { faDatabase } />
                           <p> 寵物管理系統 </p>
                        
                        </div>
                        
                        { /* 登入狀態 */ }
                        <div className = "cursor-pointer relative -left-5 lg:left-0 md:border-2 hover:border-gray-400 flex items-center space-x-2  px-2 md:p-2 md:px-4 rounded-full"
                            onClick   = { !session ? signIn as any : signOut } >

                            { session ? <> <img loading = "lazy" className = "h-10 md:h-8 rounded-full" src = { session.user.image } /> <p className="hidden md:flex"> 登出 </p> </> : 
                                        <> <UserCircleIcon className="h-8 md:h-6"/> <p className="hidden md:flex"> 登入 </p> </> } 

                        </div> 

                        { /* 購物車 */ }
                        <div onClick = { () => router.push( "/checkout" ) } 
                             className = "relative -left-3 md:left-0 cursor-pointer border hover:border-gray-500 rounded-full py-3 px-4  flex items-center">

                            <span className = "absolute top-0 -right-2 h-6 w-6 text-white bg-red-400 text-center rounded-full"> 
                                { selected_Items.length }
                            </span>

                            <ShoppingCartIcon className="h-7"/>

                            {  selected_Items.length > 0 && <p className = "hidden md:flex mx-3 text-red-400"> 去結帳 </p> }

                        </div>

                    </div>
                    
                </div>

                { /* Bottom Nav */ }
                <div className="flex items-center space-x-5 p-2 pl-6 h-12 bg-gray-100 text-gray-600 text-sm">
  
                     <p className="link flex items-center"> 
                        <MenuIcon className="h-6 mr-4"/>
                        所有服務
                     </p>

                     <p className="link hidden lg:inline-flex"> 基 礎 </p>
                     <p className="link"> 洗 澡 </p>
                     <p className="link"> 美 容 </p>
                     <p className="link hidden lg:inline-flex"> 安 親 </p>                    
                     <p className="link "> 住 宿 </p>                    
                     <p className="link hidden lg:inline-flex"> 接 送 </p>                    
                     <p className="link hidden lg:inline-flex"> 寵物用品 </p>                    
                     <p className="link hidden lg:inline-flex"> 寵物管理系統 </p>                    
  
                </div>


            </header>


} ;

export default Front_Search_Header
       