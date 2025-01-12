import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { helpText } from '../../redux/MarkdownSlice/markdownSlice';

function HelpButton() {
  const { isHelp } = useSelector((state) => state.markdown);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(helpText(isHelp));
  };
  return (
    <div>
      <button
        className="help-button px-3 py-1 absolute right-4 top-4 text-xl font-bold bg-slate-600 text-slate-200"
        onClick={handleClick}
      >
        ?
      </button>
    </div>
  );
}

export default HelpButton;
