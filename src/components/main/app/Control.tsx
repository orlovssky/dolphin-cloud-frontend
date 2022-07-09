import { createTheme } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "plugins/store/hooks";
import {
  setInnerHeight,
  setTouchScreen,
} from "plugins/store/modules/main/appData.modules";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { getLocale } from "services/constants/main/locales.constants";

export const useAppControls = () => {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  const { theme: storedTheme } = useAppSelector((state) => state.appData);
  const theme = createTheme(
    { palette: { mode: storedTheme } },
    getLocale(i18n.language)
  );
  const init = () => {
    dispatch(setInnerHeight());
    dispatch(setTouchScreen());
  };

  useEffect(() => {
    init();
    window.addEventListener("resize", init);
  }, []);

  return {
    theme,
  };
};
