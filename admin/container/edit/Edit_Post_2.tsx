

import { Edit , SimpleForm , TextInput , DateInput } from 'react-admin' 


const Edit_Post_2 = ( props ) => {

    return <Edit title="編輯資料" { ...props }>

                <SimpleForm>

                    <TextInput disabled source="id"/>  
                    <TextInput source="title"/>  
                    <TextInput multiline source="body"/>  
                    <DateInput label="Published" source="publishedAt"/>  

                </SimpleForm>

           </Edit>




} ;

export default Edit_Post_2
       