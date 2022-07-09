import AppsIcon from "@mui/icons-material/Apps";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";

import MainLayoutSidebarContentItem from "../ContentItem";

export default function MainLayoutSidebarMiddleTikTok(): JSX.Element {
  return (
    <>
      <MainLayoutSidebarContentItem
        title="common.adsManager"
        path="/tik-tok/ads-manager"
        icon={<BusinessCenterOutlinedIcon />}
      />

      <MainLayoutSidebarContentItem
        title="common.apps"
        path="/tik-tok/apps"
        icon={<AppsIcon />}
      />

      <MainLayoutSidebarContentItem
        title="proxy.proxy"
        path="/tik-tok/proxy"
        icon={<PowerOutlinedIcon />}
      />
    </>
  );
}
