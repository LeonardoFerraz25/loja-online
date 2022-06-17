import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
  },
  reducers: {
    changeUser(state, {payload}) {
      return {...state, name: payload }
    }
  }
});

export const { changeUser } = slice.actions;

export const selectUser = state => state.user;

export default slice.reducer;
