import "./Register.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import amazon from "../asset/amazon.png";
import "./Login.css";
import { authenticate } from "../firebase";

function Register() {
  const navigator = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const register = (e) => {
    e.preventDefault();
    authenticate
      .createUserWithEmailAndPassword(email, pass)
      .then((auth) => {
        if (auth) {
          alert("Sucess: New id created");
          navigator("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div className="reg">
        <Link to="/">
          <img src={amazon} alt="logo" className="reg-logo" />
        </Link>
        <div className="reg-cont">
          <div className="reg-main-box">
            <h1>Create an Account</h1>
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
              <button onClick={register} className="signin">
                Register
              </button>
            </form>
            <p className="line"></p>
            <p className="sign-in-cont">
              Already have an account?<Link to="../login"> Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
