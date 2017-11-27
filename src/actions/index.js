// Le contenu sera charger plus tard via webservice avec axios
import content from "../content.js";

export const FETCH_CONTENT = "@@ZENDICHRON/fetch_content";
export const FETCH_MENU = "@@ZENDICHRON/fetch_menu";

export function fetchContent() {
  return {
    type: FETCH_CONTENT,
    payload: { content: content }
  };
}

export function fetchMenu() {
  return {
    type: FETCH_MENU,
    payload: [
      { _id: "fhdskzezrds", code: "scenario0", title: "Scénario 0" },
      { _id: "fhdsksdfsesds", code: "scenario1", title: "Scénario 1" }
    ]
  };
}
