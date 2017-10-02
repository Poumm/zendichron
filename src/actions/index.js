// Le contenu sera charger plus tard via webservice avec axios
import content from "../content.js";

export const FETCH_CONTENT = "fetch_content";

export function fetchContent() {
  return {
    type: FETCH_CONTENT,
    payload: content
  };
}
