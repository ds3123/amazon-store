/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react' ;
import { StarIcon } from "@heroicons/react/outline" ;
import { ShoppingCartIcon } from "@heroicons/react/solid" ;
import Currency from "react-currency-formatter" ;
import { useDispatch } from "react-redux" ; 
import { addToBasket , removeFromBasket } from "store/slices/basketSlice";
import { useSelector } from "react-redux" ;


const MAX_RATING = 5 ;
const MIN_RATING = 1 ;


const Product_Card = ( { id , title , price , description , category , image } ) => {

    const dispatch = useDispatch() ;  


    // 星等
    const [ rating ] = useState( Math.floor( Math.random() * ( MAX_RATING - MIN_RATING + 1 )) + MIN_RATING ) ;

    // 是否有優惠
    const [ hasPrime ] = useState( Math.random() < 0.5 )


    // 加入購物車的產品項目
    const selected_Items = useSelector( ( state : any ) => state.basket.items ) ; 


    console.log(  "zzz" , selected_Items  ) ;


    // 點選 _ 加入購物車
    const addItemToBasket = () => {
    
        const product = { id , title , price , description , category , image , hasPrime } ;

        dispatch( addToBasket( product ) ) ;         

    } ;

    // 點選 _ 從購物車移除
    const removeItemFromBasket = () => {
    
       dispatch( removeFromBasket( { id } ) ) ;         
  
    } ;


    // 檢查 _ 商品是否已加入購物車
    const check_Product_Selected = ( product_Id : number) : boolean  => {
    
      let res = false ;

      const index = selected_Items.findIndex( ( element ) => element?.id === product_Id )

      if( index === -1 ) return true ;

      return res ;

    } ;

    // 商品是否已加入購物車
    const is_Product_Selected = check_Product_Selected( id ) ;


    return <div className="relative flex flex-col m-5 bg-white z-30 p-0 md:p-10">

                 <p className="absolute top-0 left-0  md:-top-1 -left-2 px-3 py-1 rounded-lg bg-gray-500  text-sm italic text-white"> { category } </p>

                 { /* 商品圖 */ }
                 <div className = "w-full h-80" >
                    <img loading = "lazy" className = "object-contain w-full h-80" src = { image } alt = '' />    
                 </div> 
                 
                 <div className="px-3 mt-10 md:mt-5 pb-10 relative">

                    <h4 className="text-lg mb-5 line-clamp-2"> { title } </h4>

                    <div className="flex">
                      
                      { Array( rating ).fill( 0 ).map( ( _ , i ) => <StarIcon key = { i } className="h-5 text-brown-500" /> ) }
                      
                    </div>  

                    <p className="text-sm text-gray-600 my-2 mb-5 line-clamp-2"> { description } </p>

                    <div className="flex justify-start mb-5">
                          <Currency quantity = { price } currency="TWD" />
                    </div>

                    {/* { hasPrime && <div className="flex items-center justify-end space-x-2 relative -top-5"> 
                                        <img className="w-16" src="https://links.papareact.com/fdw" alt="" /> 
                                        <p className="text-md text-gray-500"> 免運費 </p>
                                  </div> } */}

                 </div>

                 <button className = { `flex items-center place-content-center mt-auto w-full absolute left-0 bottom-0 md:bottom-5 
                                          ${ is_Product_Selected ? 'amazon-button' : 'remove-button' }  ` }
                            onClick   = { is_Product_Selected ? addItemToBasket : removeItemFromBasket } > 

                      <ShoppingCartIcon className = { `h-7 mr-3 ${ is_Product_Selected ? 'text-gray-800' : 'text-white' } ` } />
                      <p className = "text-lg" > 
                          { is_Product_Selected ? '加入購物車 ' : '從購物車移除' }
                      </p>  

                 </button>

      
            </div>



} ;

export default Product_Card
       