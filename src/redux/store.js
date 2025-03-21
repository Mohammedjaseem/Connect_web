import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import themeSlice from "./themeSlice";
import alertSlice from "./alertSlice";

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  alerts: alertSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
