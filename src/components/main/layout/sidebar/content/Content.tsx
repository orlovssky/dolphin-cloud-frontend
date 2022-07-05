import { getCurrentPlatform } from "services/utils/common/route.utils";

import MainLayoutSidebarBottom from "./bottom/Bottom";
import MainLayoutSidebarMiddle from "./middle/Middle";
import MainLayoutSidebarTop from "./top/Top";

export default function MainLayoutSidebarContent(): JSX.Element {
  return (
    <>
      {/*TOP*/}
      <MainLayoutSidebarTop />
      {/*TOP END*/}

      {/*MIDDLE*/}
      {getCurrentPlatform() && <MainLayoutSidebarMiddle />}
      {/*MIDDLE END*/}

      {/*BOTTOM*/}
      <MainLayoutSidebarBottom />
      {/*BOTTOM END*/}
    </>
  );
}
