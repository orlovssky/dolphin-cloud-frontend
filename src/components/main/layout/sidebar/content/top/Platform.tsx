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
import {
  getCurrentPlatform,
  isAuthorized,
} from "services/utils/common/route.utils";

export default function MainLayoutSidebarTopPlatform(): JSX.Element {
  const navigate = useNavigate();
  const currentPlatform = getCurrentPlatform();
  const isSelected = (value: string) => currentPlatform === value;
  const isDisabled = (value: string) => !isAuthorized() || value === "google";
  const handleChange = (_: MouseEvent<HTMLElement>, value: string) => {
    if (currentPlatform !== value) {
      navigate(`/${value}`);
    }
  };
  const handleClick = () => {
    if (currentPlatform) {
      navigate(`/${currentPlatform}`);
    } else {
      navigate("/");
    }
  };

  return (
    <ListItem className="sidebar__item">
      {/*DOLPHIN PLATFORM ICON*/}
      <ListItemIcon
        className="sidebar__item-icon sidebar__item-icon_clickable"
        onClick={handleClick}
      >
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
                selected={isSelected(value)}
                disabled={isDisabled(value)}
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
