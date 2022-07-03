import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "CommonTable",

  initialState: {
    items: [],
    loading: false,
  },

  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = tableSlice.actions;

export default tableSlice.reducer;
