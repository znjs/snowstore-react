import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

document.title = "SnowStore-react | Forgot Password";

function ForgotPassword() {
  return (
    <>
      <main class="g-parent g-one-one auth-page">
        <div class="item-center h-screen-bg">
          <div class="sign-in-card brd-sm w-26 pd-2">
            <h2 class="ff-festive clr-gray-50 ">Welcome to SnowStore</h2>
            <p class="clr-gray-100">Welcome back! Please enter your email.</p>
            <hr class="mg-b-025" />
            <div class="fx-col clr-gray-100">
              <label for="Username" class="pd-b-05">
                Email:*
              </label>
              <input
                class="pd-05"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <button class="pd-05 mg-b-1 mg-i-auto brd-sm bg-clr-gray-800 clr-gray-100 ">
              Reset Password
            </button>
            <br />
            <Link to="/signin">
              <span class="clr-gray-100">
                <i class="fa-solid fa-angle-left"></i>&nbsp;Back to Login
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
