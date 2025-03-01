import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../utils/userSlice";
const Appstore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default Appstore;
