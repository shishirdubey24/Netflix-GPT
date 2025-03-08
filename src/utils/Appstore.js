import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../utils/userSlice";
import { movieReducer } from "./movieSlice";
const Appstore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default Appstore;
