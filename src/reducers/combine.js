import { combineReducers } from "redux";

import ReducerContent from "./reducer_content";
import editor from "./reducer_editor";

const rootReducer = combineReducers({
  data: ReducerContent,
  editor: editor
});

export default rootReducer;
