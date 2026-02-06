import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  data: {},
};
export const slice = createSlice({
  name: 'orderCart',
  initialState: _.cloneDeep(initialState),
  reducers: {
    setOrderCart: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setOrderCart } = slice.actions;

export default slice.reducer;
