import React from "react";
import {
    OutlinedInput,
    FormHelperText,
    InputLabel,
    Select,
    MenuItem
} from "@mui/material";

const Dopdown = ({ values, user, handleChange, error }) => {

    return <>
        <InputLabel id="demo-multiple-name-label">User</InputLabel>
        <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={user}
            onChange={handleChange("user")}
            input={<OutlinedInput label="User" />}
        >
            {values.map((name) => (
                <MenuItem
                    key={name}
                    value={name}
                >
                    {name}
                </MenuItem>
            ))}
        </Select>
        {error && <FormHelperText>{error}</FormHelperText>}
    </>
}

export default Dopdown;