/* eslint-disable jsx-a11y/alt-text */

import Image from "next/image" ;
import {
        MenuIcon ,
        SearchIcon , 
        ShoppingCartIcon
} from "@heroicons/react/outline" ;

// "next-auth/client" 已改名為 "next-auth/react"
import { signIn , signOut , useSession } from "next-auth/react" ; 
import { useRouter } from "next/router" ; 
import { useSelector } from "react-redux" ;



const Amazon_Header = ( { placeholder } : T_Header ) => {


    // 取得 _ Google 授權登入的使用者資訊
    const { data : session } = useSession() ;

    // 取得 _ 路由
    const router = useRouter() ;

    // 加入購物車的產品項目
    const selected_Items = useSelector( ( state : any ) => state.basket.items ) ; 


    return <header>

                { /* Top Nav */ } 
                <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">

                    { /* Logo */ }
                    <div className="mx-6 mt-5 flex items-center flex-grow sm:flex-grow-0" onClick = { () => router.push( "/" ) }>

                        <Image src       = "https://links.papareact.com/f90"
                               width     = { 150 }
                               height    = { 60 } 
                               objectFit = "contain" 
                               className = "cursor-pointer"/>

                    </div>

                    { /* Search */ }
                    <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                        
                         <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
 
                         <SearchIcon className="h-12 p-4" />

                    </div>

                    { /* Right */ }
                    <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">

                        <div onClick = { !session ? signIn as any : signOut } className="link">
                            <p> 
                                { session ? `Hello , ${ session.user.name }` : "Sign In" }  
                            </p>
                            <p className="font-extrabold md:text-sm"> Accoumt & Lists </p>
                        </div>
                        
                        <div className="link">
                             <p> Returns </p>
                             <p className="font-extrabold md:text-sm"> & Orders </p>
                        </div>
                        
                        <div onClick = { () => router.push( "/checkout" ) } className="relative link flex items-center">

                             <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center  rounded-full text-black"> 
                                  { selected_Items.length }
                             </span>

                             <ShoppingCartIcon className="h-10"/>
                             <p className="hidden md:inline font-extrabold md:text-sm mt-2"> Basket </p>

                        </div>

                    </div>

                </div>

                { /* Bottom Nav */ }
                <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
  
                     <p className="link flex items-center"> 
                        <MenuIcon className="h-6 mr-1"/>
                        All
                     </p>

                     <p className="link"> Prime Video </p>
                     <p className="link"> Amazon Business </p>
                     <p className="link"> Today`s Deal </p>
                     <p className="link hidden lg:inline-flex"> Electronics </p>                    
                     <p className="link hidden lg:inline-flex"> Food & Grocery </p>                    
                     <p className="link hidden lg:inline-flex"> Prime </p>                    
                     <p className="link hidden lg:inline-flex"> Buy Again </p>                    
                     <p className="link hidden lg:inline-flex"> Shopper Toolkit </p>                    
                     <p className="link hidden lg:inline-flex"> Health & Personal </p>                    
  
                </div>
         
           </header>

} ;


export default Amazon_Header
       