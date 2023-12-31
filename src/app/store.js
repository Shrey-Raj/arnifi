import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../services/postsApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(   
      postsApi.middleware,
    ),
});

setupListeners(store.dispatch);

export default store;