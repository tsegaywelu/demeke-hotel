import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/UserSlice"; //because we export
export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultmiddleware) =>
    getDefaultmiddleware({
      serializableCheck: false,
    }),
});
