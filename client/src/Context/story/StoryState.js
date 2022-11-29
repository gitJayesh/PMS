import React, { useReducer } from "react";
import storyContext from "./storyContext";
import storyReducer from "./storyReducer";
import {
  GET_STORY,
  ADD_STORY,
  UPDATE_STORY,
  DELETE_STORY,
  ERROR_STORY,
  ADMIN_GET_ALL_STORY,
} from "../types";
import axios from "axios";

const StoryState = (props) => {
  const initialState = {
    stories: null,
    storyInfo: null,
    current: null,
    filtered: null,
    error: false,
    adminStories: null,
  };

  const [state, dispatch] = useReducer(storyReducer, initialState);

  //Get Story
  const getStory = async () => {
    await axios
      .get("/api/story")
      .then((res) => {
        dispatch({ type: GET_STORY, payload: res.data });
      })
      .catch((err) => dispatch({ type: ERROR_STORY, payload: err.msg }));
  };

  // Add Story
  const addStory = async (story) => {
    await axios
      .post("/api/story", story)
      .then((res) => dispatch({ type: ADD_STORY, payload: res.data }))
      .catch((err) => dispatch({ type: ERROR_STORY, payload: err.msg }));
  };

  //Update Story
  const updateStory = async (story) => {
    const config = {
      header: {
        "Content-Type": "application-json",
      },
    };
    await axios
      .put(`/api/story/${story.id}`, story, config)
      .then((res) => dispatch({ type: UPDATE_STORY, payload: res.data }))
      .catch((err) => dispatch({ type: ERROR_STORY, payload: err.msg }));
  };

  //Delete Story
  const deleteStory = async (story) => {
    await axios
      .delete(`/api/story/${story.id}`)
      .then((res) => dispatch({ type: DELETE_STORY, payload: story }))
      .catch((err) => dispatch({ type: ERROR_STORY, payload: err.msg }));
  };
  //AdminGetallstory
  const adminGetAllstory = async (story) => {
    await axios
      .get("/api/story/adminGetAllStory")
      .then((res) => dispatch({ type: ADMIN_GET_ALL_STORY, payload: story }))
      .catch((err) => dispatch({ type: ERROR_STORY, payload: err.msg }));
  };
  return (
    <storyContext.Provider
      value={{
        stories: state.stories,
        adminStories: state.adminStories,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getStory,
        addStory,
        updateStory,
        deleteStory,
        adminGetAllstory,
      }}
    >
      {props.children}
    </storyContext.Provider>
  );
};

export default StoryState;
