import React, { useState, useEffect } from "react";
import { propOr, filter, prop, propEq } from "ramda";
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import Button from '@mui/material/Button';
import { getMessages } from "../../api/messages";
import { CardComponent } from "../../components";
import "./view-messages.css"

const ViewMessages = () => {
  const { state } = useLocation();
  const history = useNavigate();
  const [data, setData] = useState([]);
  const [dataGrid, setDataGrid] = useState([]);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isCurentUser = ({ user }) => propEq("id", prop("id", state))(user);

  useEffect(() => {
    if (value === 1) {
      const newData = filter(isCurentUser, data);
      setDataGrid(newData);
    } else {
      setDataGrid(data);
    }
  }, [value]);

  useEffect(() => {
    getMessages().then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res)
        setData(propOr([], 'messages')(res));
        return res;
      })
      .catch((error) => {

      });
  }, []);

  const handleView = () => {
    history("/add");
  }

  return <>
  <Button variant="outlined" onClick={handleView} >Add message</Button>
    <Tabs value={value} onChange={handleChange} centered>
      <Tab label="All messages" />
      <Tab label="My messages" />
    </Tabs>
    <Grid container spacing={2}>
      <div className="view">
        {dataGrid.map((message) =>
          <CardComponent
            info={message}
          />)
        }
      </div>
    </Grid>
  </>
}

export default ViewMessages;