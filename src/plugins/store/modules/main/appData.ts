import { PaletteMode } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getValue } from "services/utils/common/localStorage.utils";
import { isTouchEnabled } from "services/utils/main/system.utils";

export const appDataSlice = createSlice({
  name: "MainAppData",

  initialState: {
    innerHeight: 0,
    isTouchScreen: false,
    isOpened: {
      sidebar: false,
    },
    theme: (getValue("dolphin-theme") as PaletteMode) || "light",
  },

  reducers: {
    setInnerHeight: (state) => {
      state.innerHeight = window.innerHeight;
    },

    setTouchScreen: (state) => {
      state.isTouchScreen = isTouchEnabled();
    },

    setSidebarOpened: (state, action: PayloadAction<boolean>) => {
      state.isOpened.sidebar = action.payload;
    },

    setTheme: (state, action: PayloadAction<PaletteMode>) => {
      state.theme = action.payload;
    },
  },
});

export const { setInnerHeight, setTouchScreen, setSidebarOpened, setTheme } =
  appDataSlice.actions;

export default appDataSlice.reducer;
