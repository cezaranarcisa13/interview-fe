import React, {useState, useEffect} from "react";
import { propOr } from "ramda";
import { getUser } from "../../api/user";
import UserTable from "../../components/user-table/user-table";

const UserViewPage=()=>{
    const [data,setData]=useState([]);
    
    useEffect(() => {getUser().then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res)
        setData( propOr([], 'users')(res));
        return res;
      })
      .catch((error) => {
  
      });
    },[]);

    return <UserTable rows={data}/>
}

export default UserViewPage;