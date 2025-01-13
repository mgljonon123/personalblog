// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Reducers-ээ энд оруулна

const store = configureStore({
  reducer: rootReducer,
});

export default store;
