
import { useState , useEffect } from 'react' ;
import { useRouter } from "next/router" ;
import dynamic from "next/dynamic" ;

// react-draft-wysiwyg
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css" ;
import { EditorState , convertFromRaw , convertToRaw } from "draft-js" ;



/*

   NOTE :
     1. 因 Editor 需要使用到 widow 物件 ( 僅運作於客戶端 / 瀏覽器下的 javascript ) ，而 Next js 伺服端，主要是運行 node.js ( 沒有 window 物件 ) 
        --> 直接 import { Editor } from "react-draft-wysiwyg"，會報錯
     2. 因此需利用 dynamic()，於 Next js < Server 端 >，關掉其 Next 下的 SSR 設定 ( ssr : false ) ， 再傳回 < React 瀏覽器 / 客戶端 >

*/

const Editor = dynamic( 
                        () => import( "react-draft-wysiwyg" ).then( module => module.Editor ) , 
                        { ssr : false } // 關掉 ssr   
                      ) ;
 

const Doc = () => {


   const router = useRouter();

 

    // 編輯器內容狀態
    const [ eidtorState , setEidtorState ] = useState( EditorState.createEmpty() ) ;


    // 變更 _ 編輯器內容
    const onEditorStateChange = ( editorState  ) => {
    
      // 1. 設定 _ 狀態
      setEidtorState( editorState ) ;

      /*
         2. 更新 _ 資料庫內容

            Ex.
               db.collection( 'userDocs' ).doc( session.user.email )
                  .collection( 'docs' ).doc( id )
                  .set( {

                     editorState : convertToRaw( editorState.getCurrentContent() )    // 將目前內容狀態，轉為 JSON 格式傳送

                  } , {
  
                     merge :true 

                  } )
         
       */


    } ;



    // 取得 _ 資料庫資料
    // const [ snapshot ] = useDocumentOnce( ... )



    // 根據以上取得資料，設定 _ 目前編輯器內容狀態
    // useEffect( () => {


      // if( snapshot.data().... ){

          // setEidtorState( EditorState.createWithContent( convertFromRaw( snapshot.data() ) )  )

      // }



    // } , [ snapshot ] )

    

    return <div className="bg-[#F8F9FA] min-h-screen pb-16">


                <Editor editorState         = { eidtorState }
                        onEditorStateChange = { onEditorStateChange }
                        toolbarClassName    = "flex sticky top-0 z-50 !justify-center mx-atuo" 
                        editorClassName     = "mt-6 p-5 bg-white shadow-md max-w-6xl mx-auto mb-12 border"  />
                

           </div>

} ;

export default Doc
       