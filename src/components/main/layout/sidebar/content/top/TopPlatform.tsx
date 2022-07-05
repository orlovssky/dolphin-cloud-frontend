import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import {
  platformsForSidebar,
  getDolphinPlatformIcon,
} from "services/constants/main/platforms.constants";
import { getCurrentPlatform } from "services/utils/common/route.utils";

export default function MainLayoutSidebarTopPlatform(): JSX.Element {
  const navigate = useNavigate();
  const currentPlatform = getCurrentPlatform();
  const handleChange = (_: MouseEvent<HTMLElement>, value: string) => {
    navigate(`/${value}`);
  };

  return (
    <ListItem className="sidebar__item">
      {/*DOLPHIN PLATFORM ICON*/}
      <ListItemIcon className="sidebar__item-icon">
        {getDolphinPlatformIcon(currentPlatform)}
      </ListItemIcon>
      {/*DOLPHIN PLATFORM ICON*/}

      {/*PLATFORM TOGGLE*/}
      <ListItemText className="sidebar__item-text">
        <ToggleButtonGroup
          exclusive
          color="primary"
          fullWidth
          className="sidebar__toggle-group"
          onChange={handleChange}
        >
          {platformsForSidebar.map(({ value, icon }) => {
            return (
              <ToggleButton
                key={value}
                value={value}
                size="small"
                selected={currentPlatform === value}
                disabled={value === "google"}
                className="sidebar__toggle-button"
              >
                {icon}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </ListItemText>
      {/*PLATFORM TOGGLE*/}
    </ListItem>
  );
}
