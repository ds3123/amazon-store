/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import { StarIcon } from "@heroicons/react/outline" ;
import Currency from "react-currency-formatter" ;
import { useDispatch } from "react-redux";
import { addToBasket , removeFromBasket } from "store/slices/basketSlice";



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

           <Image src = { image } width = { 200 } height = { 200 } objectFit = "contain" />
            
           <div className="col-span-3 mx-5">
              
               <p> { title } </p>
 
               <div className="flex">

                 { Array( rating ).fill( 0 ).map( ( _ , i ) => <StarIcon key = { i } className="h-5 text-yellow-500" /> ) }
                
               </div>

               <p className="text-xs mt-2 line-clamp-3">
                   { description } 
               </p>

               <Currency quantity = { price } currency = "GBP" />

               { hasPrime && <div className="flex items-center space-x-2"> 
                                <img loading = "lazy" className="w-14" src="https://links.papareact.com/fdw" alt="" />
                                <p className="text-xs text-gray-500"> Free Next-Day Delivery </p>
                             </div> }

           </div>

           <div className="flex flex-col space-y-2 my-auto justify-self-end">

               <button className="amazon-button" onClick = { addItemToBasket }>  Add To Basket  </button>
               <button className="amazon-button" onClick = { removeItemFromBasket }>  Remove From Basket  </button>

           </div>

         </div>

} ;


export default Checkout_Product
       