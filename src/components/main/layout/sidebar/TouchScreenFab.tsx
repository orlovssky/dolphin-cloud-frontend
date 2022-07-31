import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Fab from "@mui/material/Fab";
import { useAppDispatch, useAppSelector } from "plugins/store/hooks";
import { setSidebarOpened } from "plugins/store/modules/main/appData.modules";

import { getValue } from "../../../../services/utils/common/localStorage.utils";

export default function MainLayoutSidebarTouchScreenFab(): JSX.Element {
  const dispatch = useAppDispatch();
  const { sidebar: sidebarOpened } = useAppSelector(
    (state) => state.appData.isOpened
  );
  const handleClick = () => {
    const theme = getValue("dolphin-theme");
    const value = !sidebarOpened;
    dispatch(setSidebarOpened(value));

    if (theme === "dark") {
      const themeColor = value ? "#353535" : "#1E1E1E";
      document
        .querySelector("meta[id='mainThemeColorMeta']")!
        .setAttribute("content", themeColor);
    }
  };

  return (
    <Fab
      className="sidebar__fab"
      color={sidebarOpened ? "error" : "primary"}
      size="small"
      onClick={handleClick}
    >
      {sidebarOpened ? <CloseIcon /> : <MenuIcon />}
    </Fab>
  );
}
