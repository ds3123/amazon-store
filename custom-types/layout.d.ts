

// @ 版面相關

// 擴充新增 .getLayout
type NextPageWithLayout = NextPage & {

    getLayout?: ( page: ReactElement) => ReactNode
}
  
type AppPropsWithLayout = AppProps & {

    Component: NextPageWithLayout

}

// ---------------------



type T_Header = {

    placeholder : string ;
  
}


