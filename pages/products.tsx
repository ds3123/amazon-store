

import { NextPage } from "next";
import ProductsLayout from "@layout/product/ProductsLayout";

import { getLayout } from "@layout/product/ProductsLayout";

// import { NextPageWithLayout } from "./_app"




const Products : NextPageWithLayout = () => {


  return <div> 現在位於 : [ 禮物版面 ] </div> ;


};

Products.getLayout = getLayout

export default Products;