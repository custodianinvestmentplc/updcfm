import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resident: null,
  email: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setResident: (state, action) => {
      state.resident = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setResident, setEmail } = navSlice.actions;

export const selectResident = (state: any) => state.nav.resident;
export const selectEmail = (state: any) => state.nav.email;

export default navSlice.reducer;
