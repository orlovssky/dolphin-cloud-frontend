import { useAppSelector } from "plugins/store/hooks";

import MainLayoutSidebarDesktop from "./SidebarDesktop";
import MainLayoutSidebarTouchScreen from "./SidebarTouchScreen";

export default function MainLayoutSidebar(): JSX.Element {
  const { isTouchScreen } = useAppSelector((state) => state.appData);

  if (isTouchScreen) {
    return <MainLayoutSidebarTouchScreen />;
  }

  return <MainLayoutSidebarDesktop />;
}
