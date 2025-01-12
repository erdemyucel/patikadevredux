import React from 'react';
import { useSelector } from 'react-redux';
import { marked } from 'marked';

function TextOutput() {
  const { text } = useSelector((state) => state.markdown);
  const markdown = marked
    .options({ mangle: false, headerIds: false })
    .parse(text);

  return (
    <div
      className="text-output p-4 min-h-1/2 lg:h-full overflow-auto text-xl bg-white resize-none shadow-md"
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
  );
}

export default TextOutput;
