import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

document.title = "SnowStore-react | SignUp";

function SignUp() {
  return (
    <>
      <main className="g-parent g-one-one auth-page">
        <div className="item-center h-screen-bg">
          <div className="sign-in-card brd-sm w-26 pd-2">
            <h2 className="ff-festive clr-gray-50 ">Welcome to SnowStore</h2>
            <p className="clr-gray-100">Please enter your details.</p>
            <hr className="mg-b-025" />
            <div className="fx-col clr-gray-100">
              <label htmlFor="Username" className="pd-b-05">
                Email:*
              </label>
              <input
                className="pd-05"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="fx-col clr-gray-100">
              <label htmlFor="Username" className="pd-b-05">
                Username:*
              </label>
              <input
                className="pd-05"
                type="text"
                placeholder="Enter a Username"
              />
            </div>
            <div className="fx-col clr-gray-100">
              <label htmlFor="password" className="pd-b-05">
                Password:*
              </label>
              <input
                className="pd-05"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="clr-gray-50 pd-b-1">
              <input type="checkbox" name="Remember-Me" value="Unselected" />
              <label htmlFor="Remember-Me">Remember me</label>
            </div>
            <div className="fx fx-ai-center fx-jc-se">
              <button className="pd-05 mg-b-0125 brd-sm bg-clr-gray-800">
                <a className="clr-gray-100" href="/index-user.html">
                  Sign Up
                </a>
              </button>
              <Link to="/signin">
                <span className="clr-gray-100">Already have an Account?</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export { SignUp };
