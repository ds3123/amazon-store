

import { Create , ReferenceInput , SelectInput , SimpleForm , TextInput } from 'react-admin';



const Create_Post = props => <Create { ...props }>

                                <SimpleForm>

                                    <ReferenceInput source="userId" reference="users">
                                        <SelectInput optionText="name" />
                                    </ReferenceInput>

                                    <TextInput source="title" />
                                    <TextInput multiline source="body" />

                                </SimpleForm>
               
                             </Create>




export default Create_Post
       