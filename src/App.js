import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  // NavLink,
  // BrowserRouter,
} from "react-router-dom";
// import ReactDOM from 'react-dom';
import MainPage from './components/pages/mainpage';
import CreatePost from "./components/pages/createpost";
import './App.css';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/mainpage">Main Page</a>
          <a href="/createpost">Create Posts</a>
        </div>
      </div>

      <Router>
        <Route path="/" exact component={MainPage} />
        <Route path="/mainpage" component={MainPage} />
        <Route path="/createpost" component={CreatePost} />
      </Router>

      <div className="footer">
        <p>Copyright © 2021 Ibrahim Mustapha, Inc. All rights reserved</p>
      </div>
    </>
  );
}




export default App;
