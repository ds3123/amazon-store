/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import Currency from "react-currency-formatter" ;
import { useDispatch } from "react-redux";
import { addToBasket , removeFromBasket } from "store/slices/basketSlice";
import { ShoppingCartIcon } from "@heroicons/react/solid" ;



// @ 購物車中，所點選待結算商品
const Checkout_Product = ( { id , title , rating , price , description , category , image , hasPrime } ) => {


  const dispatch = useDispatch() ;  


  // 點選 _ 加入購物車
  const addItemToBasket = () => {
  
     const product = { id , title , price , description , category , image , hasPrime } ;

     dispatch( addToBasket( product ) ) ;         
   
  } ;  

  // 點選 _ 從購物車移除
  const removeItemFromBasket = () => {
  
     dispatch( removeFromBasket( { id } ) ) ;         
  
  } ;


  return <div className="grid grid-cols-5">

           <img loading = "lazy" src = { image } alt="" />
  
           <div className="col-span-3 mx-5">
              
               <p className = "text-xl line-clamp-2"> { title } </p>
 
               <p className="text-md text-gray-600 mt-2 line-clamp-3 mb-5">
                   { description } 
               </p>

               <Currency quantity = { price } currency = "TWD" />

               { hasPrime && <div className="flex items-center justify-end space-x-2 -mt-5"> 
                                     <img className="w-16" src="https://links.papareact.com/fdw" alt="" /> 
                                     <p className="text-md text-gray-500"> 免運費 </p>
                               </div> }

           </div>

           <div className="flex flex-col space-y-2 my-auto justify-self-end">

               {/* <button className="amazon-button" onClick = { addItemToBasket }>  Add To Basket  </button> */}
               <button className="flex items-center remove-button" onClick = { removeItemFromBasket }>  
               
                    <ShoppingCartIcon className = "hidden md:flex h-7 mr-3" />
                    <p> 移除 </p>  

               </button>

           </div>

         </div>

} ;


export default Checkout_Product
       