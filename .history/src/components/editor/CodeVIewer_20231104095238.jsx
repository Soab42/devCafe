import CodeEditor from "./CodeEditor";

function CodeViewer() {
  const [code, setCode] = useState(""); // State to manage the code

  return (
    <div>
      <CodeEditor code={code} onChange={setCode} />
      <div>
        <h2>Code Output</h2>
        <pre>{code}</pre>
      </div>
    </div>
  );
}

export default CodeViewer;
