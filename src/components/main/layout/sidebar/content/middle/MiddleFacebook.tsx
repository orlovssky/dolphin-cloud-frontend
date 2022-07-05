import BalconyIcon from "@mui/icons-material/Balcony";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

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
        title="common.balance"
        path="/facebook/balance"
        icon={<BalconyIcon />}
      />
    </>
  );
}
