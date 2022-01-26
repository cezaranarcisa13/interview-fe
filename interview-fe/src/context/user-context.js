import React, { useState, useMemo, createContext, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const localData = localStorage.getItem("user");
  const userData = localData ? JSON.parse(localData) : {};
  const [user, setUser] = useState(userData);
  const [usersList, setUserList]=useState([]);

  const value = useMemo(() => ({ user, setUser,usersList, setUserList }), [user, setUser,usersList, setUserList]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (<UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>

  );
}

export default UserContextProvider;
