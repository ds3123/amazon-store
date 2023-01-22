import { createSlice } from "@reduxjs/toolkit"
 

const initialState = {

    items : [] , 

}


export const basketSlice = createSlice({

    name : "basket" ,
   
    initialState ,

    
    reducers : {

                 // # Action  

                 // 添加至購物車
                 addToBasket      : ( state : any , action : any ) => { 

                    // 更新 state
                    state.items = [ ...state.items , action.payload ] ;

                 } , 

                 // 從購物車移除
                 removeFromBasket : ( state : any , action : any ) => {

                     // 取得 _ 該商品索引位置     
                     const index = state.items.findIndex( basketItem => basketItem.id === action.payload.id )
         
                     let newBasket = [ ...state.items ] ;  


                     if( index >= 0 ){  // 有該商品 -> 移除

                        newBasket.splice( index , 1 ) ;
            
                     }else{

                        console.warn( `無法移除該商品 ( id : ${ action.payload.id }，因其不在購物車中 )`  ) ;

                     }

                     // 更新 state
                     state.items = newBasket ;

                 }    

               }

} as any ) ;


export const { addToBasket , removeFromBasket  } = basketSlice.actions ;


export default basketSlice.reducer 

