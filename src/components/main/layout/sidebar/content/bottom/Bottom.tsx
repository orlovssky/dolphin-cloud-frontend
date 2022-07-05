import List from "@mui/material/List";

import MainLayoutSidebarBottomLocale from "./BottomLocale";
import MainLayoutSidebarBottomTheme from "./BottomTheme";

export default function MainLayoutSidebarMiddle(): JSX.Element {
  return (
    <List className="sidebar__list-bottom">
      {/*THEME*/}
      <MainLayoutSidebarBottomTheme />
      {/*THEME END*/}

      {/*LOCALE*/}
      <MainLayoutSidebarBottomLocale />
      {/*LOCALE END*/}
    </List>
  );
}
