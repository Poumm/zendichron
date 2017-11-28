import { FETCH_CONTENT, FETCH_MENU } from "../actions";

export default function(state = { content: null, menu: null }, action) {
  switch (action.type) {
    case FETCH_CONTENT:
      return { ...state, content: action.payload.content };

    case FETCH_MENU:
      return { ...state, menu: action.payload };

    default:
      return state;
  }
}
