import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '~/features/game/gameSlice';

export const store = configureStore({
  reducer: gameReducer
});

export default store;