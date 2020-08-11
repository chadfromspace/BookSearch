import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Saved from "./components/Saved";
import {
BrowserRouter as Router,
Link,
Switch,
Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/saved">Saved</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;