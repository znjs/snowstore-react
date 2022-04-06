import {
  CREDENTIAL_CHECK,
  UPDATE_TOKEN_AND_DATA,
  UPDATE_USER_DATA,
  USER_NOT_FOUND,
} from "./constants";

const authReducer = (authState, authAction) => {
  switch (authAction.type) {
    case UPDATE_USER_DATA:
      return {
        ...authState,
        email: authAction.payload.email,
        password: authAction.payload.password,
      };
    case UPDATE_TOKEN_AND_DATA:
      return {
        ...authState,
        token: authAction.payload.token,
        foundUser: authAction.payload.foundUser,
        passwordCheck: false,
      };
    case CREDENTIAL_CHECK:
      return {
        ...authState,
        passwordCheck: true,
      };
    case USER_NOT_FOUND:
      return {
        ...authState,
        userNotFound: true,
      };
    case "USER_ALREADY_EXISTS":
      return {
        ...authState,
        userExists: true,
      };
    default:
      return authAction;
  }
};

export { authReducer };
