import React, {useState, useEffect} from "react";
import { propOr } from "ramda";
import { useLocation } from "react-router";
import { getMessages } from "../../api/messages";
import CardComponent from "../../components/card-component/card-component";

const ViewMessages=(props)=>{
  const { state } = useLocation();

    const [data,setData]=useState([]);
    
    useEffect(() => {getMessages().then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res)
        setData( propOr([], 'messages')(res));
        return res;
      })
      .catch((error) => {
  
      });
    },[]);

    return <div>{
      data.map((message)=><CardComponent 
      info={message}
      />
      )
}</div>
}

export default ViewMessages;