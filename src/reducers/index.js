import { combineReducers } from "redux";

import ReducerContent from "./reducer_content";
import editor from "./editor";

const rootReducer = combineReducers({
  content: ReducerContent,
  editor: editor
});

export default rootReducer;
