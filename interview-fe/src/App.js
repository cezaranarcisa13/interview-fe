import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import UserViewPage from "./screen/user-view-page/user-view-page";

const App=()=> {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route exact path="/" component={UserViewPage} />
            </Routes>
        </Router>
  
    </div>
  );
}

export default App;
