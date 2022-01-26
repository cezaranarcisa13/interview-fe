import React, { useState, useEffect, useContext } from "react";
import { equals, propOr, length, propEq, find, map } from "ramda";
import { useNavigate } from "react-router";
import Button from '@mui/material/Button';
import { getUser } from "../../api/user";
import { UserTable } from "../../components";
import "./user-view-page.css"
import { UserContext } from "../../context/user-context";

const getDropdownValues = ({ id, name, last }) => { return { label: `${name} ${last}`, value: id } };
const UserViewPage = () => {
  const { setUser, setUserList } = useContext(UserContext);
  const history = useNavigate();
  const [data, setData] = useState([]);

  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelect = (row) => {
    setSelectedRows(row);
  }

  const handleView = () => {
    const user = find(propEq("id", selectedRows[0]))(data);
    setUser(user);
    history("/messages", { state: user });
  }

  const isDisabled = !equals(length(selectedRows), 1);

  useEffect(() => {
    getUser().then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        const users = propOr([], 'users')(res);
        const userDropdown = map(getDropdownValues)(users);
        setData(users);
        setUserList(userDropdown);
        return res;
      })
  }, []);

  return <>
    <Button variant="outlined" onClick={handleView} disabled={isDisabled}>View messages</Button>
    <div className="user-page">
      <UserTable data={data} handleClick={handleSelect} />
    </div>
  </>
}

export default UserViewPage;