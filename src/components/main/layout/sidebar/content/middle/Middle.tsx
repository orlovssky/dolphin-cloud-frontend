import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { getCurrentPlatform } from "services/utils/common/route.utils";

import MainLayoutSidebarMiddleCommon from "./Common";
import MainLayoutSidebarMiddleFacebook from "./Facebook";
import MainLayoutSidebarMiddleSignOut from "./SignOut";
import MainLayoutSidebarMiddleTikTok from "./TikTok";

export default function MainLayoutSidebarMiddle(): JSX.Element {
  const currentPlatform = getCurrentPlatform();

  return (
    <List>
      {/*FB*/}
      {currentPlatform === "facebook" && <MainLayoutSidebarMiddleFacebook />}
      {/*FB END*/}

      {/*TIKTOK*/}
      {currentPlatform === "tik-tok" && <MainLayoutSidebarMiddleTikTok />}
      {/*TIK TOK END*/}

      {currentPlatform && <Divider />}

      <MainLayoutSidebarMiddleCommon />
      <Divider />

      {/* SIGN OUT */}
      <MainLayoutSidebarMiddleSignOut />
      {/* SIGN OUT END */}
    </List>
  );
}
