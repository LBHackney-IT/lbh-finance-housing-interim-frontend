import { configureStore } from "@reduxjs/toolkit";
import uploadsReducer from "../features/upload/uploadSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    uploads: uploadsReducer,
    user: userReducer,
  },
});
