import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import userTableColumns from "./user-table-columns"
import "./user-table.css"

const UserTable=({data, handleClick})=> {

    return (
      <div className='table-container'> 
        <DataGrid
          rows={data}
          columns={userTableColumns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={handleClick}
        />
        </div>
    );

}

UserTable.propTypes = {
    data: PropTypes.array
  };

  UserTable.defaultProps ={
    data:[]
  }


export default UserTable;