import { FETCH_STORIES, FETCH_STORY, ADD_STORY } from "../actions/stories";
import { FETCH_CONTENT } from "../actions/pages";

export default function(
  state = {
    content: null,
    stories: null,
    webserviceURL: "http://localhost:3050"
  },
  action
) {
  switch (action.type) {
    case FETCH_CONTENT:
      return { ...state, content: action.payload.content };

    case FETCH_STORIES:
      return { ...state, stories: action.payload };

    case FETCH_STORY:
      return { ...state, currentStory: action.payload };

    case ADD_STORY:
      return { ...state, currentStory: action.payload };

    default:
      return state;
  }
}
