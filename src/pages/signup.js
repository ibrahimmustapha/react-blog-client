import React, { useState } from "react";
import Axios from "axios";
import "../App.css";

function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const accountSubmission = () => {
        Axios.post("http://localhost:2500/api/signup", {
          email: email,
          password: password,
        });
    }

    const signInSubmission = () => {
        Axios.get("http://localhost:2500/api/signin", {
            email: email,
            password: password
        });
    }
    return (
      <div className="container">
        <h1>Authentication</h1>
        <form>
          <label for="text">Email</label>
          <input type="email" onChange = {(e) => {
              setEmail(e.target.value);
          }} placeholder="example@mail.com" required/>
          <label for="text">Password</label>
          <input type="password" onChange = {(e) => {
              setPassword(e.target.value);
          }} placeholder="8 or more characters" required/>
          <input type="submit" onClick = {accountSubmission} value="Signup" style={{marginRight: 20}} /> 
          <input type="submit" onClick={signInSubmission} value="Login" />
        </form>
      </div>
    );
}
export default SignUp;