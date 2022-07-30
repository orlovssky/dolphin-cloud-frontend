import { createTheme } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "plugins/store/hooks";
import {
  setInnerHeight,
  setTouchScreen,
} from "plugins/store/modules/main/appData.modules";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { getLocale } from "services/constants/main/locales.constants";

export default function () {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  const { theme } = useAppSelector((state) => state.appData);
  const handleSize = () => {
    dispatch(setInnerHeight());
    dispatch(setTouchScreen());
    document.documentElement.style.setProperty(
      "--app-height",
      `${window.innerHeight}px`
    );
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    handleSize();
    window.addEventListener("resize", handleSize);
  }, []);

  const muiTheme = createTheme(
    { palette: { mode: theme } },
    getLocale(i18n.language)
  );

  return {
    theme: muiTheme,
  };
}
