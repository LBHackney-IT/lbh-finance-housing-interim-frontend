import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import uploadsReducer from "../features/upload/uploadSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    uploads: uploadsReducer,
    user: userReducer,
  },
});
