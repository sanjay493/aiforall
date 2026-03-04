import { useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ code, language }) {
  const [open, setOpen] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Copied to clipboard!");
  };

  return (
    <div className="my-4 bg-gray-800 rounded-lg">
      <div className="flex justify-between items-center p-3 bg-gray-700">
        <button
          onClick={() => setOpen(!open)}
          className="text-sm text-green-400"
        >
          {open ? "Hide Code ▲" : "Show Code ▼"}
        </button>

        <ClipboardIcon
          className="h-5 w-5 cursor-pointer text-gray-300"
          onClick={copyCode}
        />
      </div>

      {open && (
        <SyntaxHighlighter language={language} style={vscDarkPlus}>
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
}