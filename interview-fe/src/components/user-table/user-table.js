import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import userTableColumns from "./user-table-columns"


const UserTable=({data, handleClick})=> {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {userTableColumns.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={ 'left'}
            padding={'normal'}
    
          >
           {headCell.label}
          </TableCell>
        ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
            onClick={(event) => handleClick(event, row)}
              key={row.id}
            >
              <TableCell align='left'>{row.name}</TableCell>
              <TableCell align='left'>{row.last}</TableCell>
              <TableCell align='left'>{row.gender}</TableCell>
              <TableCell align='left'>{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
UserTable.propTypes = {
    data: PropTypes.array
  };

  UserTable.defaultProps ={
    data:[]
  }


export default UserTable;