import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  currentuser: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinstart: (state) => {
      state.loading = true;
    },
    signinsucess: (state, action) => {
      state.currentuser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signinfailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signinfailure, signinstart, signinsucess } = userSlice.actions;
export default userSlice.reducer;
