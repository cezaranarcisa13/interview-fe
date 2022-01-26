import React from "react";
import PropTypes from 'prop-types';
import {
    OutlinedInput,
    FormHelperText,
    InputLabel,
    Select,
    MenuItem
} from "@mui/material";

const Dropdown = ({ values, user, handleChange, error }) => {

    return <>
        <InputLabel id="demo-multiple-name-label">User</InputLabel>
        <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={user}
            onChange={handleChange("user")}
            input={<OutlinedInput label="User" />}
        >
            {values.map(({ value, label }) => (
                <MenuItem
                    key={value}
                    value={value}
                >
                    {label}
                </MenuItem>
            ))}
        </Select>
        {error && <FormHelperText>{error}</FormHelperText>}
    </>
}

Dropdown.propTypes = {
    values: PropTypes.array,
    user: PropTypes.string,
    handleChange: PropTypes.func,
    error: PropTypes.string,
};

Dropdown.defaultProps = {
    values: [],
    user: "",
    handleChange: () => { },
    error: "",
}

export default Dropdown;