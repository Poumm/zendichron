import axios from "axios";
import content from "../content.js";

export const FETCH_CONTENT = "@@ZENDICHRON/fetch_content";
export const FETCH_STORIES = "@@ZENDICHRON/fetch_stories";

const webserviceURL = "http://localhost:3050";

export function fetchContent() {
  return {
    type: FETCH_CONTENT,
    payload: { content: content }
  };
}

export function fetchStories() {
  return (dispatch, getState) => {
    axios
      .get(`${webserviceURL}/stories`)
      .then(res => {
        dispatch({ type: FETCH_STORIES, payload: res.data });
      })
      .catch(res => {
        console.log("ws ko", res);
        dispatch({ type: FETCH_STORIES, payload: [] });
      });
  };
}

export function addStory(formValue, fromComponent) {
  return dispatch => {
    axios
      .post(`${webserviceURL}/story`, formValue)
      .then(res => {
        fromComponent.props.history.push(`/story/${res.code}/index`);
      })
      .catch(res => console.log(res.body, res));
  };
}
