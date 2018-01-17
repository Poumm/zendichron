import content from "../content.js";
import axios from "axios";

export const FETCH_CONTENT = "@@ZENDICHRON/fetch_content";
export const SAVE_CONTENT = "@@ZENDICHRON/save_content";
export const ADD_PAGE = "@@ZENDICHRON/add_page";

export function fetchContent(storyCode, pageCode) {
  return (dispatch, getState) => {
    axios
      .get(
        `${
          getState().data.webserviceURL
        }/pageContent?storyCode=${storyCode}&pageCode=${pageCode}`
      )
      .then(res => {
        if (!res.data.content) {
          res.data.content = content;
        }
        console.log(res.data.content);
        dispatch({ type: FETCH_CONTENT, payload: res.data.content });
      });
  };
}

export function addPage(story, title, fromComponent) {
  return (dispatch, getState) => {
    axios
      .put(`${getState().data.webserviceURL}/story/${story._id}/page`, title)
      .then(res => {
        dispatch(dispatch => {
          let currentStory = getState().data.currentStory;
          currentStory.pages.push(res.data);
          dispatch({ type: ADD_PAGE, payload: currentStory });
          return Promise.resolve();
        }).then(
          fromComponent.props.history.push(
            `/story/${story.code}/page/${res.data.code}`
          )
        );
      })
      .catch(res => console.log(res.body, res));
  };
}

export function saveContent(story, page, content) {
  return (dispatch, getState) => {
    axios
      .post(
        `${getState().data.webserviceURL}/story/${story._id}/page/${
          page._id
        }/content`,
        { content: content }
      )
      .then(res => {
        dispatch(dispatch => {
          dispatch({ type: SAVE_CONTENT, payload: res.data });
        });
      })
      .catch(res => console.log(res.body, res));
  };
}
