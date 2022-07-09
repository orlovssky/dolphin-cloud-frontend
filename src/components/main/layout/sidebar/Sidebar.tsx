import { useAppSelector } from "plugins/store/hooks";

import MainLayoutSidebarDesktop from "./Desktop";
import MainLayoutSidebarTouchScreen from "./TouchScreen";

export default function MainLayoutSidebar(): JSX.Element {
  const { isTouchScreen } = useAppSelector((state) => state.appData);

  if (isTouchScreen) {
    return <MainLayoutSidebarTouchScreen />;
  }

  return <MainLayoutSidebarDesktop />;
}
