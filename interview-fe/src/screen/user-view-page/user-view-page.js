import React, {useState, useEffect} from "react";
import { propOr } from "ramda";
import { useNavigate } from "react-router";
import { getUser } from "../../api/user";
import UserTable from "../../components/user-table/user-table";

const UserViewPage=()=>{
    const history = useNavigate();
    const [data,setData]=useState([]);
    const handleClick=(ev, row)=>{
        history("/messages", { state: row });
    }

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

    return <UserTable data={data}handleClick={handleClick}/>
}

export default UserViewPage;