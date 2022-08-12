import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import amazon from "../asset/amazon.png";
import { authenticate } from "../firebase";
import "./Login.css";

function Login() {
  const navigator = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const register = (e) => {
    e.preventDefault();
    authenticate
      .createUserWithEmailAndPassword(email, pass)
      .then((auth) => {
        if (auth) {
          alert("New id created");
          navigator("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const signIn = (e) => {
    e.preventDefault();
    authenticate
      .signInWithEmailAndPassword(email, pass)
      .then((auth) => {
        if (auth) {
          alert("Success: Logged in");
          navigator("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={amazon} alt="logo" className="login-logo" />
      </Link>
      <div className="login-cont">
        <div className="login-main-box">
          <h1>Sign-In</h1>
          <form className="forminfo">
            <h6>Email</h6>
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <h6>Password</h6>
            <input
              type="password"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
            />

            <button className="signin" onClick={signIn}>
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to Samazon's FAKE CLONE Condition of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest Based Ads.
          </p>
        </div>
        <p className="login-mid">
          <span>New to Samazon?</span>
        </p>
        <Link to="/register">
          <button className="signupbut">Create your Samazon account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
