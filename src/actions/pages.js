import content from "../content.js";

export const FETCH_CONTENT = "@@ZENDICHRON/fetch_content";

export function fetchContent() {
  return {
    type: FETCH_CONTENT,
    payload: { content: content }
  };
}
