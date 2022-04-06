import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import "./auth.css";

function SignUp() {
  document.title = "SnowStore | SignUp";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { userState, signUpUser } = useAuth();
  return (
    <>
      <main className="g-parent g-one-one auth-page">
        <div className="item-center h-screen-bg">
          <div className="sign-in-card brd-sm w-26 pd-2">
            <h2 className="ff-festive clr-gray-50 title-bg">
              Welcome to SnowStore
            </h2>
            <p className="clr-gray-100">Please enter your details.</p>
            <hr className="mg-b-025" />
            <div className="fx-col clr-gray-100">
              <label htmlFor="Username" className="pd-b-05">
                Email:*
              </label>
              <input
                className="pd-05"
                type="email"
                placeholder="abc@xyz.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                }}
                autoComplete="off"
              />
            </div>
            <div className="fx-col clr-gray-100">
              <label htmlFor="FirstName" className="pd-b-05">
                First Name:*
              </label>
              <input
                className="pd-05"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="fx-col clr-gray-100">
              <label htmlFor="LastName" className="pd-b-05">
                Last Name:*
              </label>
              <input
                className="pd-05"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }));
                }}
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
                value={formData.password}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
              />
            </div>
            {userState.userExists && (
              <div className="f-075 clr-gray-200">
                *User Already Exists click on Already have an account
              </div>
            )}
            <div className="clr-gray-50 pd-b-1">
              <input type="checkbox" name="Remember-Me" value="Unselected" />
              <label htmlFor="Remember-Me">Remember me</label>
            </div>
            <div className="fx fx-ai-center fx-jc-se">
              <button
                className="pd-05 mg-b-0125 brd-sm bg-clr-gray-800 clr-gray-100"
                onClick={() => {
                  if (formData.email !== "" && formData.password !== "") {
                    signUpUser(
                      formData.email,
                      formData.password,
                      formData.firstName,
                      formData.lastName
                    );
                  }
                }}
              >
                Sign Up
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
