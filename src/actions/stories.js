import axios from "axios";

export const FETCH_STORIES = "@@ZENDICHRON/fetch_stories";
export const FETCH_STORY = "@@ZENDICHRON/fetch_story";
export const ADD_STORY = "@@ZENDICHRON/add_story";

export function fetchStories() {
  return (dispatch, getState) => {
    axios
      .get(`${getState().data.webserviceURL}/stories`)
      .then(res => {
        dispatch({ type: FETCH_STORIES, payload: res.data });
      })
      .catch(res => {
        console.log("ws ko", res);
        dispatch({ type: FETCH_STORIES, payload: [] });
      });
  };
}

export function fetchStory(code) {
  return (dispatch, getState) => {
    axios
      .get(`${getState().data.webserviceURL}/story?code=${code}`)
      .then(res => {
        dispatch({ type: FETCH_STORY, payload: res.data });
      })
      .catch(res => {
        console.log("ws ko", res);
        dispatch({ type: FETCH_STORY, payload: [] });
      });
  };
}

export function addStory(formValue, fromComponent) {
  return (dispatch, getState) => {
    axios
      .post(`${getState().data.webserviceURL}/story`, formValue)
      .then(res => {
        dispatch(dispatch => {
          dispatch(fetchStories());
          return Promise.resolve();
        })
          .then(() => {
            dispatch({ type: ADD_STORY, payload: res.data });
            return Promise.resolve();
          })
          .then(
            fromComponent.props.history.push(`/story/${res.data.code}/index`)
          );
      })
      .catch(res => console.log(res.body, res));
  };
}
