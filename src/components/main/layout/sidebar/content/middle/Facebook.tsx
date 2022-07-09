import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";

import MainLayoutSidebarContentItem from "../ContentItem";

export default function MainLayoutSidebarMiddleFacebook(): JSX.Element {
  return (
    <>
      <MainLayoutSidebarContentItem
        title="common.adsManager"
        path="/facebook/ads-manager"
        icon={<BusinessCenterOutlinedIcon />}
      />

      <MainLayoutSidebarContentItem
        title="proxy.proxy"
        path="/facebook/proxy"
        icon={<PowerOutlinedIcon />}
      />
    </>
  );
}
