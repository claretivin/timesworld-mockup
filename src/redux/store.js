import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "../app/appSlice";

export default configureStore({
  reducer: { app: appSlice.reducer },
});
