import { configureStore } from '@reduxjs/toolkit';
import markdownSlice from './MarkdownSlice/markdownSlice';

export const store = configureStore({
  reducer: {
    markdown: markdownSlice,
  },
});
