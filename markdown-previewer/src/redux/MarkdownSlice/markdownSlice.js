import { createSlice } from '@reduxjs/toolkit';

const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Furkan Çetintaş](https://github.com/furkancetintas)*`;

const initialState = {
  text: '# Hello, world!',
  isHelp: false,
};

const markdownSlice = createSlice({
  name: 'markdown',
  initialState,
  reducers: {
    updateText: (state, action) => {
      state.text = action.payload;
    },
    helpText: (state, action) => {
      state.isHelp = !state.isHelp;
      console.log(state.isHelp);
      if (state.isHelp === true) {
        state.text = help;
      } else {
        state.text = initialState.text;
      }
    },
  },
});

export const { updateText, helpText } = markdownSlice.actions;

export default markdownSlice.reducer;
