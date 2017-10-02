// The editor core
import Editor, { Editable, createEmptyState } from "ory-editor-core";
import "ory-editor-core/lib/index.css"; // we also want to load the stylesheets

// The rich text area plugin
import slate from "ory-editor-plugins-slate";
import "ory-editor-plugins-slate/lib/index.css";

// The spacer plugin
import spacer from "ory-editor-plugins-spacer";
import "ory-editor-plugins-spacer/lib/index.css";

// The image plugin
import image from "ory-editor-plugins-image";
import "ory-editor-plugins-image/lib/index.css";

// The video plugin
import video from "ory-editor-plugins-video";
import "ory-editor-plugins-video/lib/index.css";

// The parallax plugin
import parallax from "ory-editor-plugins-parallax-background";
import "ory-editor-plugins-parallax-background/lib/index.css";

// The html5-video plugin
import html5video from "ory-editor-plugins-html5-video";
import "ory-editor-plugins-html5-video/lib/index.css";

// The native handler plugin
import native from "ory-editor-plugins-default-native";

// The divider plugin
import divider from "ory-editor-plugins-divider";

// Define which plugins we want to use (all of the above)
const plugins = {
  content: [slate(), spacer, image, video, divider, html5video],
  layout: [parallax({ defaultPlugin: slate() })],

  // If you pass the native key the editor will be able to handle native drag and drop events (such as links, text, etc).
  // The native plugin will then be responsible to properly display the data which was dropped onto the editor.
  native
};

const editable = createEmptyState();

const editor = new Editor({
  plugins: plugins,
  // pass the content states
  editables: [
    // creates an empty state, basically like the line above
    createEmptyState()
  ]
});

export default editor;
