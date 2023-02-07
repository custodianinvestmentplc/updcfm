import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resident: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setResident: (state, action) => {
      state.resident = action.payload;
    },
  },
});

export const { setResident } = navSlice.actions;

/**
 * Seletors
 * @param {*} state
 * @returns
 */
export const selectResident = (state) => state.nav.resident;

export default navSlice.reducer;
