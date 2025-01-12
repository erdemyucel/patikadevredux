import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { boardSlice } from '../features/Board/boardSlice';

export const store = configureStore({
  reducer: {
    boardSlice: boardSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
