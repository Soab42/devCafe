import Post from "./post/Post";
import CodeEditor from "./editor/CodeEditor";
import CodeViewer from "./editor/CodeVIewer";
export default function Content() {
  return (
    <div>
      <Post />
      <CodeEditor />
      <CodeViewer />
    </div>
  );
}
