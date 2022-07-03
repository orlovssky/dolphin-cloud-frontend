import { configureStore } from "@reduxjs/toolkit";

import common from "./modules/common";
import main from "./modules/main";

const store = configureStore({
  reducer: {
    ...main,
    ...common,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
