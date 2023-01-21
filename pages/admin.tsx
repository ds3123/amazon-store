

/*

    @ 後台管理系統 ( 採用 React-Admin 框架 ) 

       https://marmelab.com/blog/2022/02/02/bootstrap-your-react-admin-project-with-nextjs.html
     # 因 Raect-Admin 使用 react-router，屬客戶端路由，不相容於 SSR
     # 因此若要在 Next JS 納入 React-Admin，需針對 ../admin/App 這個路徑，利用 next/dynamic 下的 dynamic()，關掉其 Next 下的 SSR 設定 ( ssr : false )

*/


import dynamic from "next/dynamic"

const Admin = dynamic( () => import("../admin/App"), { ssr: false } )

const App   = () => <Admin />

export default App