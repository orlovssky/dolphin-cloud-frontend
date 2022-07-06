import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TableStateModel, PaginationModel } from "models/common/table.models";

const initialState: TableStateModel = {
  items: [],
  loading: false,
  rowsPerPage: 25,
  page: 0,
  total: 0,
  search: "",
};

export const tableSlice = createSlice({
  name: "CommonTable",

  initialState,

  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setPagination: (state, action: PayloadAction<PaginationModel>) => {
      state.rowsPerPage = action.payload.rowsPerPage;
      state.page = action.payload.page;
      state.total = action.payload.total;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setItems, setLoading, setPagination, setSearch } =
  tableSlice.actions;

export default tableSlice.reducer;
