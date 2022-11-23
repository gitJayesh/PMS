import React, { useReducer } from "react";
import authContext from "./authContext.js";
import axios from "axios";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/SetAuthToken";
import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  // USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  // USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  // USER_DETAILS_RESET,
} from "../types.js";

const AuthState = (props) => {
  const initialState = {
    // users: [],
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    userInfo: null,
    user: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Login User

  // Load User
  const loadUser = async () => {
    // if (localStorage.token) {
    //   setAuthToken(localStorage.token);
    // }
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };

    console.log(config);

    try {
      const res = await axios.get("/api/user", config);

      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_DETAILS_FAIL,
      });
    }
  };

  const login = async (email, password) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      // console.log(res.data);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  //register User

  const register = async (name, email, phone, password) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const res = await axios.post(
        "/api/user/",
        { name, email, phone, password },
        config
      );
      console.log(res.data);
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Logout
  const logout = () => {
    dispatch({
      type: USER_LOGOUT,
    });
    document.location.href = "/login";
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        userInfo: state.userInfo,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
