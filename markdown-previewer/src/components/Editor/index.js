import { useSelector, useDispatch } from 'react-redux';
import { updateText } from '../../redux/MarkdownSlice/markdownSlice';

const Editor = () => {
  const { text } = useSelector((state) => state.markdown);
  const { isHelp } = useSelector((state) => state.markdown);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateText(e.target.value));
  };

  return (
    <textarea
      className="text-input p-4 block min-h-1/2 lg:h-full max-h-full overflow-auto text-xl resize-none shadow-md"
      value={text}
      onChange={handleChange}
      disabled={isHelp}
    />
  );
};

export default Editor;
