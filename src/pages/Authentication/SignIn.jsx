import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./auth.css";
import { useAuth } from "../../context";

function SignIn() {
  document.title = "SnowStore | SignIn";
  const { userState, userDispatch, loginUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <main className="g-parent g-one-one auth-page">
        <div className="item-center h-screen-bg">
          <div className="sign-in-card brd-sm w-26 pd-2">
            <h2 className="ff-festive clr-gray-50 ">Welcome to SnowStore</h2>
            <p className="clr-gray-100">
              Welcome back! Please enter your details.
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
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
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
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
              {userState.passwordCheck && (
                <span className="f-075 clr-gray-300">
                  *Please check the credentials entered and try again
                </span>
              )}
              {userState.userNotFound && (
                <span className="f-075 clr-gray-300">
                  *User not found. click on signup for free
                </span>
              )}
            </div>
            <div className="fx-row fx-jc-sb clr-gray-50 pd-b-1">
              <div>
                <input type="checkbox" name="Remember-Me" value="Unselected" />
                <label htmlFor="Remember-Me">Remember me</label>
              </div>
              <Link to="/forgot-password">
                <span className="clr-gray-50">Forgot Password?</span>
              </Link>
            </div>
            <div className="fx fx-col">
              <button className="pd-05 mg-b-0125 brd-sm bg-clr-gray-800">
                <span
                  className="clr-gray-100"
                  onClick={() => {
                    if (formData.email !== "" && formData.password !== "") {
                      userDispatch({
                        type: "UPDATE_USER_DATA",
                        payload: {
                          email: formData.email,
                          password: formData.password,
                        },
                      });
                      loginUser(formData.email, formData.password);
                    }
                  }}
                >
                  Sign In
                </span>
              </button>
              <button className="pd-05 mg-b-0125 brd-sm bg-clr-gray-800">
                <span
                  className="clr-gray-100"
                  onClick={() => {
                    userDispatch({
                      type: "UPDATE_USER_DATA",
                      payload: {
                        email: "test@gmail.com",
                        password: "test@123",
                      },
                    });
                    loginUser("test@gmail.com", "test@123");
                  }}
                >
                  Sign In with test credentials
                </span>
              </button>
            </div>
            <p className="clr-gray-300">
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="clr-gray-50">Sign up for free</span>
              </Link>
            </p>
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}

export { SignIn };
