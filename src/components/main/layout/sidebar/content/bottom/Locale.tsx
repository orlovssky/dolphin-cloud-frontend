import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useTranslation } from "react-i18next";
import { MouseEvent } from "react";
import {
  localesForSidebar,
  getLocaleIcon,
} from "services/constants/main/locales.constants";

export default function MainLayoutSidebarBottomLocale(): JSX.Element {
  const { i18n } = useTranslation();
  const handleChange = (_: MouseEvent<HTMLElement>, value: string) => {
    i18n
      .changeLanguage(value)
      .then(() => localStorage.setItem("dolphin-locale", value));
  };

  return (
    <ListItem className="sidebar__item">
      {/*LOCALE ICON*/}
      <ListItemIcon className="sidebar__item-icon">
        {getLocaleIcon(i18n.language)}
      </ListItemIcon>
      {/*LOCALE ICON END*/}

      <ListItemText className="sidebar__item-text">
        {/*LOCALE BUTTONS*/}
        <ToggleButtonGroup
          exclusive
          color="primary"
          fullWidth
          className="sidebar__toggle-group"
          onChange={handleChange}
        >
          {localesForSidebar.map(({ value, icon }) => {
            return (
              <ToggleButton
                key={value}
                value={value}
                size="small"
                selected={i18n.language === value}
                className="sidebar__toggle-button"
              >
                {icon}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
        {/*LOCALE BUTTONS END*/}
      </ListItemText>
    </ListItem>
  );
}
