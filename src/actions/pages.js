import content from "../content.js";
import axios from "axios";

export const FETCH_CONTENT = "@@ZENDICHRON/fetch_content";
export const ADD_PAGE = "@@ZENDICHRON/add_page";

export function fetchContent() {
  return {
    type: FETCH_CONTENT,
    payload: { content: content }
  };
}

export function addPage(story, pageTitle, fromComponent) {
  return (dispatch, getState) => {
    axios
      .post(
        `${getState().data.webserviceURL}/story/${story._id}/page`,
        pageTitle
      )
      .then(res => {
        dispatch(dispatch => {
          dispatch({ type: ADD_PAGE, payload: res.data });
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
