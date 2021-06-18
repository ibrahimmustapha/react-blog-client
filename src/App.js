import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  // NavLink,
  // BrowserRouter,
} from "react-router-dom";
// import ReactDOM from 'react-dom'
import MainPage from './pages/mainpage';
import CreatePost from "./pages/createpost";
import SignUp from './pages/signup';
import './App.css';
import Post from './pages/post';

function App(props) {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/mainpage">Main Page</a>
          <a href="/createpost">Create Posts</a>
          <a href="/signup" className="loginLink">
            Login
          </a>
        </div>
      </div>

      <Router>
        <Route path="/" exact component={MainPage} />
        <Route path="/mainpage" component={MainPage} />
        <Route path="/createpost" component={CreatePost} />
        <Route path="/signup" component={SignUp} />
        <Route path="/post/:postId" component={Post} /> 
        ``
      </Router>

      <div className="fff">
        <div className="footer">
          <p>Copyright © 2021 Ibrahim Mustapha, Inc. All rights reserved</p>
        </div>
      </div>
    </>
  );
}




export default App;
