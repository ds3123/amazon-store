
import React from "react" ;

import { List , Datagrid , TextField , DateField , EditButton , DeleteButton } from 'react-admin'



const PostList_2 = ( props ) => {


    return <List { ...props }>
         
              <Datagrid>

                 {/* <TextField source="id"/> */}
                 <TextField source="title"/>
                 <DateField source="publishedAt"/>
                 <EditButton />
                 <DeleteButton/>

              </Datagrid>

           </List>

} ;

export default PostList_2
       