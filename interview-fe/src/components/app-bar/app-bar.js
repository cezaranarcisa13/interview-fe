import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./app-bar.css"

 const AppBarComp=()=> {
  return (
    <Box className='app-bar-container'>
      <AppBar position="static"  className='app-bar'>
        <Toolbar>
       
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
   
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarComp;