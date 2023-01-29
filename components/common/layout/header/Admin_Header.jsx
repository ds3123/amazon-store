/* eslint-disable @next/next/no-img-element */

import {
    MenuIcon ,
    SearchIcon , 
    ShoppingCartIcon
} from "@heroicons/react/outline" ;


import { Button } from "@material-tailwind/react"; // 再確認 2023.01.24


// @ 後台 Header
const Admin_Header = () => {


    return <header className="sticky top-0 z-50 flex items-center px-6 py-5 shadow-md bg-white">


              <button className="button bg-blue-300 text-white rounded-md shadow-md">  <MenuIcon className="h-6"/> </button>

              { /* Search */ }
              <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg
                              focus-within:shadow-md
                               ">

                    <SearchIcon className="h-6 text-gray-500" />

                    <input type="text" placeholder="search" className="flex-grow px-5 text-base bg-transparent outline-none" />


              </div>

              { /* User Pic */ }
              <img loading   = "lazy" src="https://placeimg.com/640/480/any" 
                   className = "hidden  md:inline-flex cursor-pointer h-12 w-12 rounded-full" alt="" />
               
                      
           </header>

} ;


export default Admin_Header
       