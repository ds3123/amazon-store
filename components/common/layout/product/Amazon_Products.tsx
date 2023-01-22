/* eslint-disable @next/next/no-img-element */

import { Product_Card } from "@layout/index" ;

/*

    # 不同版面配置，擷取不同商品
  

*/



const Amazon_Products = ( { products } ) => {



    return <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">

              {/* 前 4 個商品  */}
              { products.slice( 0 , 4 ).map( ( product ) => <Product_Card key = { product.id } { ...product } /> ) }
 
              {/* Banner */}
              <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />

              {/* 第 5,6 個商品  */}
              <div className="md:col-span-2"> 

                { products.slice( 4 , 5 ).map( ( product ) => <Product_Card key = { product.id } { ...product } /> ) }

              </div>
        
              { /* 剩下的商品  */ } 
              { products.slice( 5 , products.length ).map( ( product ) => <Product_Card key = { product.id } { ...product } /> ) }

            

           </div>

} ;

export default Amazon_Products
       