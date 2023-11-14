/* eslint-disable react/prop-types */
import CodeViewer from "../editor/CodeVIewer";
export default function TextWithMarkup({ text }) {
  // Define the regex pattern
  const pattern = /#code(.*?)#endcode/g;
  // Split the text into chunks using the regular expression
  const chunks = text.split(pattern);
  // console.log(chunks);

  return (
    <div className="text-gray-400">
      {chunks.map((chunk, index) => {
        const text = chunk.replace(/\s+#/g, "#");

        if (text.startsWith("#")) {
          const modifiedText = chunk.replace(/#/g, "");
          // If the chunk is markup, render it as code
          return <CodeViewer key={index} text={modifiedText} />;
        } else {
          // If the chunk is plain text, render it as plain text
          return (
            <span key={index} className="text-justify">
              {text}
            </span>
          );
        }
      })}
    </div>
  );
}
