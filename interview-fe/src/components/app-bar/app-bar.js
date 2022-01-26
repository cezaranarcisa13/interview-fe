import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { isEmpty, prop } from 'ramda';
import {
  Toolbar,
  Box,
  Button,
  Typography,
  AppBar
} from "@mui/material";
import { UserContext } from "../../context/user-context";
import "./app-bar.css"

const AppBarComp = () => {
  const { user } = useContext(UserContext);
  const history = useNavigate();

  const handleAdd = () => {
    history("/add");
  }

  const handleUser = () => {
    history("/");
  }

  const handleMessage = () => {
    history("/messages");
  }
  return (
    <Box className='app-bar-container'>
      <AppBar position="static" className='app-bar'>
        <Toolbar>
          {!isEmpty(user) && <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {`Current user: ${prop("name", user)} ${user.last}`}
            </Typography>
            <Button color="inherit" onClick={handleUser}>Users</Button>
            <Button color="inherit" onClick={handleMessage} >Messages</Button>
            <Button color="inherit" onClick={handleAdd}>Send message</Button>
          </>
          }
        </Toolbar>

      </AppBar>
    </Box>
  );
}

export default AppBarComp;