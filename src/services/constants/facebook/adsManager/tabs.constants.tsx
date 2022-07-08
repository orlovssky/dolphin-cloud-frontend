import FacebookAdsManagerAccountsTabPanel from "components/facebook/adsManager/accounts/TabPanel";
import FacebookAdsManagerAdAccountsTabPanel from "components/facebook/adsManager/adAccounts/TabPanel";
import FacebookAdsManagerAdsTabPanel from "components/facebook/adsManager/ads/TabPanel";
import FacebookAdsManagerAdsetsTabPanel from "components/facebook/adsManager/adsets/TabPanel";
import FacebookAdsManagerCampaignsTabPanel from "components/facebook/adsManager/campaigns/TabPanel";
import FacebookAdsManagerUsersTabPanel from "components/facebook/adsManager/users/TabPanel";

export const tabs = [
  {
    tabName: "users",
    component: <FacebookAdsManagerUsersTabPanel />,
    title: "users.users",
  },
  {
    tabName: "accounts",
    component: <FacebookAdsManagerAccountsTabPanel />,
    title: "accounts.accounts",
  },
  {
    tabName: "ad-accounts",
    component: <FacebookAdsManagerAdAccountsTabPanel />,
    title: "adAccounts.adAccounts",
  },
  {
    tabName: "campaigns",
    component: <FacebookAdsManagerCampaignsTabPanel />,
    title: "campaigns.campaigns",
  },
  {
    tabName: "adsets",
    component: <FacebookAdsManagerAdsetsTabPanel />,
    title: "adsets.adsets",
  },
  {
    tabName: "ads",
    component: <FacebookAdsManagerAdsTabPanel />,
    title: "ads.ads",
  },
];
