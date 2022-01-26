import React, {useState,useMemo} from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import UserViewPage from "./screen/user-view-page/user-view-page";
import ViewMessages from "./screen/view-messages/view-messages";
import AppBar from "./components/app-bar/app-bar";
import UserContextProvider from "./context/user-context";

const App=()=> {

  return (
    <div className="App">
      <UserContextProvider>
      <AppBar/>
      <Router>
            <Routes>
              <Route exact path="/" element={<UserViewPage/>} />
              <Route exact path="/messages" element={<ViewMessages/>} />
            </Routes>
        </Router>
        </UserContextProvider>
    </div>
  );
}

export default App;
