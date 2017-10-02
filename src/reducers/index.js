import { combineReducers } from "redux";

import content from "./content";
import editor from "./editor";

const rootReducer = combineReducers({
  content: content,
  editor: editor
});

export default rootReducer;
