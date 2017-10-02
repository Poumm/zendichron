import _ from "lodash";

import { FETCH_CONTENT } from "../actions";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CONTENT:
      return _.mapKeys(action.payload.content, "id");

    default:
      return state;
  }
}
