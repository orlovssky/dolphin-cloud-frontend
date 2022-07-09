import List from "@mui/material/List";

import MainLayoutSidebarBottomLocale from "./Locale";
import MainLayoutSidebarBottomTheme from "./Theme";

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
