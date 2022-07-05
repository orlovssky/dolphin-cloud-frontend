import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { PaletteMode } from "@mui/material";

export const themes: PaletteMode[] = ["light", "dark"];

export const getThemeIcon = (theme: PaletteMode) => {
  switch (theme) {
    case "light":
      return <LightModeOutlinedIcon fontSize="large" />;
    case "dark":
      return <DarkModeOutlinedIcon fontSize="large" />;
  }
};
