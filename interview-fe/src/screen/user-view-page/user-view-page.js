import React, {useState, useEffect} from "react";
import { equals, propOr, length } from "ramda";
import { useNavigate } from "react-router";
import Button from '@mui/material/Button';
import { getUser } from "../../api/user";
import UserTable from "../../components/user-table/user-table";
import "./user-view-page.css"

const UserViewPage=()=>{
    const history = useNavigate();
    const [data,setData]=useState([]);
    
    const [selectedRows,setSelectedRows]=useState([]);

    const handleSelect=( row)=>{
     setSelectedRows(row);
    }

    const handleView=()=>{
      history("/messages", { state: selectedRows });
    }

    const isDisabled=!equals(length(selectedRows),1);

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

    return <> <Button variant="outlined" onClick={handleView} disabled={isDisabled}>View messages</Button>
    <div className="user-page">
         
    <UserTable data={data} handleClick={handleSelect}/>
    </div>
    </>
}

export default UserViewPage;