import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const clicksSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0, a: 1, b: 2, c: 3 },
  reducers: {
    update(state, action) {
      state.value += action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['value', 'a'],
};

export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer);

export const { update } = clicksSlice.actions;

export const getClicksValue = state => state.clicks.value;
