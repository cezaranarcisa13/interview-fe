import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import UserViewPage from "./screen/user-view-page/user-view-page";
import ViewMessages from "./screen/view-messages/view-messages";
import AppBar from "./components/app-bar/app-bar";

const App=()=> {
  return (
    <div className="App">
<AppBar/>
      <Router>
            <Routes>
              <Route exact path="/" element={<UserViewPage/>} />
              <Route exact path="/messages" element={<ViewMessages/>} />
            </Routes>
        </Router>
  
    </div>
  );
}

export default App;
