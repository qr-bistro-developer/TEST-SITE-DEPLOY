import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  data: null,
};
export const slice = createSlice({
  name: 'accessToken',
  initialState: _.cloneDeep(initialState),
  reducers: {
    setAccessToken: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAccessToken } = slice.actions;

export default slice.reducer;
