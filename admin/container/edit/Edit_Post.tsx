

import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput , useRecordContext } from 'react-admin';





// # 自訂標題
const Post_Title = ( ) => {
                            const record = useRecordContext();
                            return <span> 標題 : { record?.title } </span>
                        }  ;
    

// @ 編輯 _ 文章
const Edit_Post = () => <Edit title={ <Post_Title /> }>

                            <SimpleForm>

                                <TextInput disabled source="id" />

                                <ReferenceInput source="userId" reference="users">
                                    <SelectInput optionText="name" />
                                </ReferenceInput>

                                <TextInput source="title" />
                                <TextInput multiline source="body" />

                            </SimpleForm>

                       </Edit>


export default Edit_Post
       
