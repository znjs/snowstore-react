import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  authReducer,
  CREDENTIAL_CHECK,
  UPDATE_TOKEN_AND_DATA,
  USER_NOT_FOUND,
} from "../reducer";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(authReducer, {
    email: "",
    password: "",
    passwordCheck: false,
    userNotFound: false,
    userExists: false,
  });
  let navigate = useNavigate();
  const loginUser = async (email, password) => {
    if (email !== "" && password !== "") {
      try {
        let res = await axios.post("/api/auth/login", {
          email: email,
          password: password,
        });
        if (res.status === 200) {
          const {
            data: { encodedToken, foundUser },
          } = res;
          userDispatch({
            type: UPDATE_TOKEN_AND_DATA,
            payload: { token: encodedToken, foundUser: foundUser },
          });
          localStorage.setItem("JWT_TOKEN", encodedToken);
          navigate("/products", { replace: true });
        }
        if (res.status === 201) {
          userDispatch({
            type: CREDENTIAL_CHECK,
            payload: {},
          });
        }
      } catch (err) {
        userDispatch({
          type: USER_NOT_FOUND,
          payload: {},
        });
        console.error("Error: ", err);
      }
    }
  };
  const signUpUser = async (email, password, firstName, lastName) => {
    if (
      email !== "" &&
      password !== "" &&
      firstName !== "" &&
      lastName !== ""
    ) {
      try {
        let res = await axios.post("/api/auth/signup", {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        });
        if (res.status === 201) {
          const {
            data: { encodedToken, createdUser },
          } = res;
          userDispatch({
            type: UPDATE_TOKEN_AND_DATA,
            payload: { token: encodedToken, foundUser: createdUser },
          });
          localStorage.setItem("JWT_TOKEN", encodedToken);
          navigate("/products", { replace: true });
        }
      } catch (err) {
        console.error("Error: ", err);
        if (err.response.status === 422) {
          userDispatch({
            type: "USER_ALREADY_EXISTS",
            payload: {},
          });
        }
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ userState, userDispatch, loginUser, signUpUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
