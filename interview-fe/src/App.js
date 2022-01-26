import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { UserViewPage, ViewMessages, AddMessage } from "./screen";
import { AppBar } from "./components";
import UserContextProvider from "./context/user-context";

const App = () => {

  return (
    <div className="App">
      <UserContextProvider>
        <AppBar />
        <Router>
          <Routes>
            <Route exact path="/" element={<UserViewPage />} />
            <Route exact path="/messages" element={<ViewMessages />} />
            <Route exact path="/add" element={<AddMessage />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
