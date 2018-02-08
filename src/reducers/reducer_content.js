import { FETCH_STORIES, FETCH_STORY, ADD_STORY } from "../actions/stories";
import { FETCH_CONTENT, ADD_PAGE } from "../actions/pages";
import API_ROOT from "../api-config";

export default function(
  state = {
    content: null,
    stories: null,
    webserviceURL: API_ROOT
  },
  action
) {
  switch (action.type) {
    case FETCH_CONTENT:
      return { ...state, content: action.payload };

    case FETCH_STORIES:
      return { ...state, stories: action.payload };

    case FETCH_STORY:
      return { ...state, currentStory: action.payload };

    case ADD_STORY:
      return { ...state, currentStory: action.payload };

    case ADD_PAGE:
      return { ...state, currentStory: action.payload };

    default:
      return state;
  }
}
