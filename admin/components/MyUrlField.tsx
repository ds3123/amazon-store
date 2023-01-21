
import * as React from "react";
import { useRecordContext } from 'react-admin';
import { Link } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';




// @ 自訂 _ 欄位( Field )
const MyUrlField = ({ source }) => {

    const record = useRecordContext();

    return record ? ( 
                     <Link href={record[source]} sx={{ color : 'red' , textDecoration:"none" }}>
                         
                          {record[source]}  
    
                      </Link>

                   ) : null ;

}

export default MyUrlField;