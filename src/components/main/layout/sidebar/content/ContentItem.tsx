import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { SidebarContentItemPropsModel } from "models/main/main.models";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

export default function MainLayoutSidebarContentItem({
  path,
  title,
  icon,
}: SidebarContentItemPropsModel): JSX.Element {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <ListItem disablePadding className="sidebar__item">
      <ListItemButton
        className="sidebar__item-button"
        selected={pathname.startsWith(path)}
        onClick={() => navigate(path)}
      >
        <ListItemIcon className="sidebar__item-icon">{icon}</ListItemIcon>
        <ListItemText className="sidebar__item-text">{t(title)}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
