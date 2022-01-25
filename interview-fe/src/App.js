import React,{useEffect, useState} from "react";
import { getUser } from "./api/user";
import {prop,propOr} from "ramda"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import EnhancedTable from "./components/user-table/user-table";

const App=()=> {
  const [data,setData]=useState([]);
  useEffect(() => {getUser().then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
      console.log(res)
      setData( propOr([], 'users')(res));
      return res;
    })
    .catch((error) => {

    });
  },[]);
  return (
    <div className="App">
      <Router>
            <Switch>
              <Route exact path="/" component={EnhancedTable} />
              <Route
                path="/houses/:location/:type"
                component={EnhancedTable}
              />
          
            </Switch>
        </Router>
  
    </div>
  );
}

export default App;
