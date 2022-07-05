import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Fab from "@mui/material/Fab";
import { useAppDispatch, useAppSelector } from "plugins/store/hooks";
import { setSidebarOpened } from "plugins/store/modules/main/appData";

export default function MainLayoutSidebarTouchScreenFab(): JSX.Element {
  const dispatch = useAppDispatch();
  const { sidebar: sidebarOpened } = useAppSelector(
    (state) => state.appData.isOpened
  );

  return (
    <Fab
      className="sidebar__fab"
      color={sidebarOpened ? "error" : "primary"}
      size="small"
      onClick={() => dispatch(setSidebarOpened(!sidebarOpened))}
    >
      {sidebarOpened ? <CloseIcon /> : <MenuIcon />}
    </Fab>
  );
}
