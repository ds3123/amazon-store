

import * as React from "react";
import { List, Datagrid, TextField, ReferenceField , EditButton , ReferenceInput, SelectInput, TextInput  } from 'react-admin';




// # 篩選功能
const post_Filters = [
                        <TextInput source="q" label="搜尋" alwaysOn /> ,

                        <ReferenceInput source="userId" label="User" reference="users">
                           <SelectInput optionText="name" />
                        </ReferenceInput>,

                     ] ;


// @ 文章列表
const PostList = () => <List filters={ post_Filters }>

                         <Datagrid>

                            <TextField source="id" />

                            { /* 關聯 / 外鍵 */ }
                            <ReferenceField source="userId" reference="users">
                                <TextField source="name" />
                            </ReferenceField>

                           
                            <TextField source="title" />
                            

                            <EditButton/>

                         </Datagrid>
    
                      </List>

export default PostList 
       

