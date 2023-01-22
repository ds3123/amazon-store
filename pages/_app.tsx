import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

import { AppProps } from "next/app";
import "@assets/main.css" ;


// Font Awesome
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library , config } from '@fortawesome/fontawesome-svg-core'
import { fab  } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
//import { } from '@fortawesome/free-regular-svg-icons'


// Redux
import { Provider } from "react-redux" ;
import { store } from "../store/store"

// import { Provider as AuthProvider } from "next-auth/client" ;
import { SessionProvider } from "next-auth/react" ;  // 上述 Provider 名稱與來源，已改為左列


config.autoAddCss = false

library.add( fab , fas )


// const Noop = ( { children } ) => <> { children } </> // 若無 Layout，僅顯示 children


// 1. 整個應用，僅使用 _ 一種 Layout
// function MyApp({ Component , pageProps } : AppProps & { Component : { Layout : FC } } ) {


//   const Layout = Component.Layout ?? Noop 

//   return <Layout>

//             <Component { ...pageProps } /> 

//          </Layout>

// }


// 2. 整個應用，可使用 _ 多種 Layout ( 參考 : https://ithelp.ithome.com.tw/articles/10279168?sc=iThelpR )
      


function MyApp({ Component , pageProps } : AppPropsWithLayout ) {

  const getLayout = Component.getLayout || ( ( page ) => page )
  
  return  <SessionProvider session={ pageProps.session } >

            <Provider store = { store } >
  
               {  getLayout( <Component { ...pageProps } />  ) }

            </Provider>
  
          </SessionProvider>

}



export default MyApp;