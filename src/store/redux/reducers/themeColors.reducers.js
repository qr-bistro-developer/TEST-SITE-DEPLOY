import { createSlice } from '@reduxjs/toolkit';
import { THEME_PRESETS } from '@statics/THEME_PRESETS';
import _ from 'lodash';

const initialState = {
  data: _.get(THEME_PRESETS, ['VANILLA_CLAY']),
};

export const slice = createSlice({
  name: 'themeColors',
  initialState: _.cloneDeep(initialState),
  reducers: {
    setThemeColors: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setThemeColors } = slice.actions;

export default slice.reducer;
