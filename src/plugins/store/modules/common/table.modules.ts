import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TableStateModel, ItemModel } from "models/common/table.models";

const initialState: TableStateModel = {
  items: [],
  loading: false,
};

export const tableSlice = createSlice({
  name: "CommonTable",

  initialState,

  reducers: {
    setItems: (state, action: PayloadAction<ItemModel[]>) => {
      state.items = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setItems, setLoading } = tableSlice.actions;

export default tableSlice.reducer;
