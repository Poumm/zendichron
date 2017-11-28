import axios from "axios";
import content from "../content.js";

export const FETCH_CONTENT = "@@ZENDICHRON/fetch_content";
export const FETCH_MENU = "@@ZENDICHRON/fetch_menu";

const webserviceURL = "http://localhost:3050";

export function fetchContent() {
  return {
    type: FETCH_CONTENT,
    payload: { content: content }
  };
}

export function fetchMenu() {
  return (dispatch, getState) => {
    axios
      .get(`${webserviceURL}/stories`)
      .then(res => {
        dispatch({ type: FETCH_MENU, payload: formatMenu(res.data) });
      })
      .catch(res => {
        console.log("ws ko", res);
        dispatch({ type: FETCH_MENU, payload: formatMenu([]) });
      });
  };
}

/**
 * Prend une liste de story en entrée et renvois un menu formatter comme ci-dessous
 * payload: [
      { _id: "fhdskzezrds", code: "scenario0", title: "Scénario 0" },
      { _id: "fhdsksdfsesds", code: "scenario1", title: "Scénario 1" }
    ]
 */
function formatMenu(stories) {
  const menu = stories.map(story => {
    return {
      _id: story._id,
      code: story.code,
      title: story.title
    };
  });

  return menu;
}
