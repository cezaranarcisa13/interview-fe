import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import UserViewPage from "./screen/user-view-page/user-view-page";
import ViewMessages from "./screen/view-messages/view-messages";

const App=()=> {
  return (
    <div className="App">
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
