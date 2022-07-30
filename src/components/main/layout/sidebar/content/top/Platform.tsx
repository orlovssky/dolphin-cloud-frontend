import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import {
  platformsForSidebar,
  getDolphinPlatformIcon,
} from "services/constants/main/platforms.constants";
import platformLogic from "services/logic/main/sidebar/platform.logic";

export default function MainLayoutSidebarTopPlatform(): JSX.Element {
  const { currentPlatform, isSelected, isDisabled, handleChange, handleClick } =
    platformLogic();

  return (
    <ListItem className="sidebar__item">
      {/*DOLPHIN PLATFORM ICON*/}
      <ListItemIcon
        className="sidebar__item-icon sidebar__item-icon_clickable"
        onClick={handleClick}
      >
        {getDolphinPlatformIcon(currentPlatform)}
      </ListItemIcon>
      {/*DOLPHIN PLATFORM ICON END*/}

      <ListItemText className="sidebar__item-text">
        {/*PLATFORM BUTTONS*/}
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
        {/*PLATFORM BUTTONS END*/}
      </ListItemText>
    </ListItem>
  );
}
