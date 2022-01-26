import React, { useContext } from "react";
import { isEmpty, prop } from 'ramda';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { UserContext } from "../../context/user-context";
import "./app-bar.css"

const AppBarComp = () => {
  const { user } = useContext(UserContext);
  return (
    <Box className='app-bar-container'>
      <AppBar position="static" className='app-bar'>
        <Toolbar>
          {!isEmpty(user) && <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {`Current user: ${prop("name", user)} ${user.last}`}
          </Typography>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarComp;