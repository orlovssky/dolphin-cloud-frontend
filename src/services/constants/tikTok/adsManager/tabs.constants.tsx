import TikTokAdsManagerAccountsTabPanel from "components/tikTok/adsManager/accounts/TabPanel";
import TikTokAdsManagerAdAccountsTabPanel from "components/tikTok/adsManager/adAccounts/TabPanel";
import TikTokAdsManagerAdsTabPanel from "components/tikTok/adsManager/ads/TabPanel";
import TikTokAdsManagerAdsetsTabPanel from "components/tikTok/adsManager/adsets/TabPanel";
import TikTokAdsManagerCampaignsTabPanel from "components/tikTok/adsManager/campaigns/TabPanel";

export const tabs = [
  {
    tabName: "accounts",
    component: <TikTokAdsManagerAccountsTabPanel />,
    title: "accounts.accounts",
  },
  {
    tabName: "ad-accounts",
    component: <TikTokAdsManagerAdAccountsTabPanel />,
    title: "adAccounts.adAccounts",
  },
  {
    tabName: "campaigns",
    component: <TikTokAdsManagerCampaignsTabPanel />,
    title: "campaigns.campaigns",
  },
  {
    tabName: "adsets",
    component: <TikTokAdsManagerAdsetsTabPanel />,
    title: "adsets.adsets",
  },
  {
    tabName: "ads",
    component: <TikTokAdsManagerAdsTabPanel />,
    title: "ads.ads",
  },
];
