import List from "@mui/material/List";

import MainLayoutSidebarTopPlatform from "./Platform";

export default function MainLayoutSidebarTop(): JSX.Element {
  return (
    <List className="sidebar__list-top">
      {/*PLATFORM*/}
      <MainLayoutSidebarTopPlatform />
      {/*PLATFORM END*/}
    </List>
  );
}
