import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { getCurrentPlatform } from "services/utils/common/route.utils";

import MainLayoutSidebarMiddleFacebook from "./MiddleFacebook";
import MainLayoutSidebarMiddleSignOut from "./MiddleSignOut";
import MainLayoutSidebarMiddleTikTok from "./MiddleTikTok";

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

      {/* SIGN OUT */}
      <MainLayoutSidebarMiddleSignOut />
      {/* SIGN OUT END */}
    </List>
  );
}
