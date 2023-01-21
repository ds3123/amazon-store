import * as React from 'react' ;
import { Admin , Resource , ListGuesser , EditGuesser } from 'react-admin' ;

import jsonServerProvider from 'ra-data-json-server' ;
import restProvider from 'ra-data-simple-rest' ;



import PostList from './container/list/PostList' ;
import Edit_Post from './container/edit/Edit_Post';
import Create_Post from './container/create/Create_Post';

import PostList_2 from './container/list/PostList_2' ;
import Edit_Post_2 from './container/edit/Edit_Post_2';
import Create_Post_2 from './container/create/Create_Post_2';



import UserList from './container/list/UserList' ;




import Index_Page from './container/Index_Page';


import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';


import data_Provider from './utils/data_Provider'


// const dataProvider_1 = jsonServerProvider( 'https://jsonplaceholder.typicode.com') ;
// const dataProvider_2 = restProvider( 'http://localhost:4000') ;     // 用 restProvider 會出現 Ｃontent-Range 遺失（ 但回傳的 Header 有 ）

//const dataProvider_2 = jsonServerProvider( 'http://localhost:4000' ) ; 
const dataProvider_2 = jsonServerProvider( 'https://jsonplaceholder.typicode.com' ) ; 


console.log( 'asdf' , dataProvider_2 )

const App = () => <>

                       {/* <Admin dashboard={ Index_Page } dataProvider={ dataProvider_1 }>  */}
                       <Admin dataProvider={ dataProvider_2 }>  
                      

                          <Resource name="posts" list={ PostList_2 }  create = { Create_Post_2 } edit= { Edit_Post_2 } icon = { PostIcon }   /> 
                          
                          <Resource name="users" list={ PostList_2 }  create = { Create_Post_2 } edit= { Edit_Post_2 } icon = { UserIcon }   /> 


                          {/* 取得: https://jsonplaceholder.typicode.com/posts */}
                          {/* <Resource name="posts" list = { PostList }  create = { Create_Post } edit = { Edit_Post } icon = { PostIcon }  />    */}
     
                          {/* 取得: https://jsonplaceholder.typicode.com/users */}
                          {/* <Resource name="users" list = { UserList } icon = { UserIcon }  />    */}
                     
                      </Admin>

                  </>

export default App;