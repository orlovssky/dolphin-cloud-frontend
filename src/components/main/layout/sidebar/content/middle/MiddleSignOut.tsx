import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function MainLayoutSidebarMiddleSignOut(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const signOut = () => {
    localStorage.removeItem("dolphin-api-token");
    navigate("/sign-in");
  };

  return (
    <ListItem disablePadding className="sidebar__item">
      <ListItemButton className="sidebar__item-button" onClick={signOut}>
        <ListItemIcon className="sidebar__item-icon">
          <LogoutOutlinedIcon />
        </ListItemIcon>
        <ListItemText className="sidebar__item-text">
          {t("auth.signOut")}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
