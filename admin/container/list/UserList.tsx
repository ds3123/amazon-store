
import { Datagrid, EmailField, List, TextField , UrlField } from 'react-admin';
import MyUrlField from '../../components/MyUrlField';


// @ 使用者列表
const UserList = () => <List>

                            <Datagrid rowClick="edit">

                                <TextField source="id" />
                                <TextField source="name" />
                                <EmailField source="email" />
                                <TextField source="phone" />
                                {/* <UrlField source="website" /> */}
                                <MyUrlField source="website" />

                                <TextField source="company.name" />
                                
                            </Datagrid>
    
                      </List>

export default UserList
       