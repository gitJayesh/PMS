import React, { useReducer } from "react";
import authContext from "./authContext.js";
import axios from "axios";
import authReducer from "./authReducer";
import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  // USER_DETAILS_REQUEST,
  // USER_DETAILS_SUCCESS,
  // USER_DETAILS_FAIL,
  // USER_DETAILS_RESET,
} from "../types.js";

const AuthState = (props) => {
  const initialState = {
    users: [],
    userInfo: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Login User

  const login = async (email, password) => {
    const config = {
      headers: {
        type: USER_LOGIN_REQUEST,
        "Content-Type": "application/json",
      },
    };
    try {
      // dispatch({
      //   type: USER_LOGIN_REQUEST,
      // });
      const res = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      console.log(res.data);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data,
      });
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
        // token: state.token,
        loading: state.loading,
        userInfo: state.userInfo,
        error: state.error,
        register,
        login,
        logout,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
