import Link from "next/link";
import { FC, useState } from "react";



// @ Layout 樣板 ( 練習用 2023.01.16 )
const Layout: FC = ({ children }) => {

  const [ keyword , setKeyword ] = useState("");

  return <div style={{ position:"relative" , left:"15px" , top:"15px" }}>

            <Link href="/home">     首 頁 </Link> &nbsp; / &nbsp; 
            <Link href="/products"> 禮 物 </Link> 
            
            <br/><br/>

             <input style={{ border:"1px solid red" }} value={keyword} onChange={(e) => setKeyword(e.target.value)} />

             <br/><br/>


            { children }

          </div>;
};


// 定義 _ 回傳函式
export const getLayout = (page) => <Layout> { page } </Layout>;




export default Layout;