import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

function ForgotPassword() {
  document.title = "SnowStoret | Forgot Password";
  return (
    <>
      <main className="g-parent g-one-one auth-page">
        <div className="item-center h-screen-bg">
          <div className="sign-in-card brd-sm w-26 pd-2">
            <h2 className="ff-festive clr-gray-50 ">Welcome to SnowStore</h2>
            <p className="clr-gray-100">
              Welcome back! Please enter your email.
            </p>
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
            <button className="pd-05 mg-b-1 mg-i-auto brd-sm bg-clr-gray-800 clr-gray-100 ">
              Reset Password
            </button>
            <br />
            <Link to="/signin">
              <span className="clr-gray-100">
                <i className="fa-solid fa-angle-left"></i>&nbsp;Back to Login
              </span>
            </Link>
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}

export { ForgotPassword };
