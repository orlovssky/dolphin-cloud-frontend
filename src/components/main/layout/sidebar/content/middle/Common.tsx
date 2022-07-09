import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import AntyIcon from "assets/icons/main/anty.icons";
import { useTranslation } from "react-i18next";

export default function MainLayoutSidebarMiddleCommon(): JSX.Element {
  const { i18n } = useTranslation();
  const locale = i18n.language === "ru" ? "ru" : "en";
  const openInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      {/*FAQ*/}
      <ListItem disablePadding className="sidebar__item">
        <ListItemButton
          className="sidebar__item-button"
          onClick={() =>
            openInNewTab(
              "https://documenter.getpostman.com/view/15402503/TzJrBJdk"
            )
          }
        >
          <ListItemIcon className="sidebar__item-icon">
            <HelpOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText className="sidebar__item-text">FAQ</ListItemText>
        </ListItemButton>
      </ListItem>
      {/*FAQ END*/}

      {/*API*/}
      <ListItem disablePadding className="sidebar__item">
        <ListItemButton
          className="sidebar__item-button"
          onClick={() =>
            openInNewTab(`https://docs.dolphin.ru.com/?lang=${locale}`)
          }
        >
          <ListItemIcon className="sidebar__item-icon">
            <CodeOutlinedIcon />
          </ListItemIcon>
          <ListItemText className="sidebar__item-text">API</ListItemText>
        </ListItemButton>
      </ListItem>
      {/*API END*/}

      {/*ANTY*/}
      <ListItem disablePadding className="sidebar__item">
        <ListItemButton
          className="sidebar__item-button"
          onClick={() =>
            openInNewTab(
              `https://anty.dolphin.ru.com/${i18n.language}/?utm_source=ecosystem&utm_medium=cpc&utm_campaign=dolphin_app&utm_content=sidebar`
            )
          }
        >
          <ListItemIcon className="sidebar__item-icon">
            <AntyIcon />
          </ListItemIcon>
          <ListItemText className="sidebar__item-text">
            {"Dolphin{anty}"}
          </ListItemText>
        </ListItemButton>
      </ListItem>
      {/*ANTY END*/}
    </>
  );
}
