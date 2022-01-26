import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import userTableColumns from "./user-table-columns"
import "./user-table.css"

const UserTable = ({ data, handleClick }) => {

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
  data: PropTypes.array,
  handleClick: PropTypes.func,
};

UserTable.defaultProps = {
  data: [],
  handleClick: () => { }
}

export default UserTable;