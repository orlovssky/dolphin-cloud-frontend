import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const appDataSlice = createSlice({
  name: "MainAppData",

  initialState: {
    innerHeight: 0,
  },

  reducers: {
    setAppDataInnerHeight: (state, action: PayloadAction<number>) => {
      state.innerHeight = action.payload;
    },
  },
});

export const { setAppDataInnerHeight } = appDataSlice.actions;

export default appDataSlice.reducer;
