import _ from "lodash";

import { FETCH_CONTENT } from "../actions";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CONTENT:
      //console.log("reducer");
      //console.log(action.payload.content);
      return action.payload.content;

    default:
      return state;
  }
}
