

import { FC } from "react";
import { getLayout as getBasicLayout } from "./Layout";




// @ Layout 樣板 ( 練習用 2023.01.16 )
const ProductsLayout : FC = ({ children }) => {

  return <div>
         
            <div>  ------ 禮物 _ 追加內容 ------ </div> <br/>

            {children}
         
         </div>;

};




// 定義 _ 回傳函式
export const getLayout = (page) => getBasicLayout( <ProductsLayout> { page } </ProductsLayout> );


export default ProductsLayout;