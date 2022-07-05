import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { PaletteMode } from "@mui/material";
import { useAppSelector, useAppDispatch } from "plugins/store/hooks";
import { setTheme } from "plugins/store/modules/main/appData";
import { useTranslation } from "react-i18next";
import { MouseEvent } from "react";
import { themes, getThemeIcon } from "services/constants/main/themes.constants";

export default function MainLayoutSidebarBottomTheme(): JSX.Element {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { theme: storedTheme } = useAppSelector((state) => state.appData);
  const handleChange = (_: MouseEvent<HTMLElement>, value: PaletteMode) => {
    dispatch(setTheme(value));
    localStorage.setItem("dolphin-theme", value);
  };

  return (
    <ListItem className="sidebar__item">
      {/*THEME ICON*/}
      <ListItemIcon className="sidebar__item-icon">
        {getThemeIcon(storedTheme)}
      </ListItemIcon>
      {/*THEME ICON*/}

      {/*THEME TOGGLE*/}
      <ListItemText className="sidebar__item-text">
        <ToggleButtonGroup
          exclusive
          color="primary"
          fullWidth
          className="sidebar__toggle-group"
          onChange={handleChange}
        >
          {themes.map((theme) => {
            return (
              <ToggleButton
                key={theme}
                value={theme}
                size="small"
                selected={storedTheme === theme}
                className="sidebar__toggle-button"
              >
                {t(`common.${theme}`)}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </ListItemText>
      {/*THEME TOGGLE*/}
    </ListItem>
  );
}
