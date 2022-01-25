
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import userTableColumns from "./user-table-columns"


const UserTable=({rows})=> {
    const [selected, setSelected] = React.useState([]);
  const handleClick = (event, name) => {
  
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
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
          {rows.map((row) => (
            <TableRow
            onClick={(event) => handleClick(event, row.name)}
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

export default UserTable;