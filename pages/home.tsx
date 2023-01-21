


import { NextPage } from "next";
import Layout from "@layout/product/Layout";
import { getLayout } from "@layout/product/Layout";

// import { NextPageWithLayout } from "./_app"



const Home : NextPageWithLayout = () => {

  return  <div> 現在位於 : [ 首頁版面 ] </div>  ;

};


Home.getLayout = getLayout ;

export default Home;