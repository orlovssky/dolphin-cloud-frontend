import Drawer from "@mui/material/Drawer";
import { useAppDispatch, useAppSelector } from "plugins/store/hooks";
import { setSidebarOpened } from "plugins/store/modules/main/appData";

import MainSidebarContent from "./content/Content";

export default function MainLayoutSidebarDesktop(): JSX.Element {
  const dispatch = useAppDispatch();
  const { sidebar: sidebarOpened } = useAppSelector(
    (state) => state.appData.isOpened
  );

  return (
    <Drawer
      className={`sidebar__drawer sidebar_desktop ${
        sidebarOpened ? "sidebar_opened" : ""
      }`}
      variant="permanent"
      onMouseEnter={() => dispatch(setSidebarOpened(true))}
      onMouseLeave={() => dispatch(setSidebarOpened(false))}
    >
      <MainSidebarContent />
    </Drawer>
  );
}
