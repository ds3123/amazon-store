
import { Create , SimpleForm , TextInput , DateInput } from 'react-admin' 


const Create_Post_2 = ( props ) => {


    return <Create title="新增資料" { ...props }>

                <SimpleForm>
 
                     <TextInput source="title"/>  
                     <TextInput multiline source="body"/>  
                     <DateInput label="Published" source="publishedAt"/>  



                </SimpleForm>


            </Create>
    


} ;

export default Create_Post_2
       