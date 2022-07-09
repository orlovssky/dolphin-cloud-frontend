import Drawer from "@mui/material/Drawer";
import { useAppDispatch, useAppSelector } from "plugins/store/hooks";
import { setSidebarOpened } from "plugins/store/modules/main/appData.modules";

import MainLayoutSidebarTouchScreenFab from "./TouchScreenFab";
import MainSidebarContent from "./content/Content";

export default function MainLayoutSidebarTouchScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const { sidebar: sidebarOpened } = useAppSelector(
    (state) => state.appData.isOpened
  );

  return (
    <>
      <Drawer
        className={`sidebar__drawer sidebar_touchscreen ${
          sidebarOpened ? "sidebar_opened" : ""
        }`}
        hideBackdrop
        open={sidebarOpened}
        onClick={() => dispatch(setSidebarOpened(false))}
      >
        <MainSidebarContent />
      </Drawer>
      <MainLayoutSidebarTouchScreenFab />
    </>
  );
}
