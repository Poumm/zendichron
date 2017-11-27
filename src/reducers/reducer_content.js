import { FETCH_CONTENT, FETCH_MENU } from "../actions";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CONTENT:
      return { ...this.state, content: action.payload.content };

    case FETCH_MENU:
      return { ...this.state, menu: action.payload };

    default:
      return state;
  }
}
