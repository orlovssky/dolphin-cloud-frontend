import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FacebookAdsManagerAccountsTabPanel from "components/facebook/adsManager/accounts/TabPanel";
import FacebookAdsManagerAdAccountsTabPanel from "components/facebook/adsManager/adAccounts/TabPanel";
import FacebookAdsManagerAdsTabPanel from "components/facebook/adsManager/ads/TabPanel";
import FacebookAdsManagerAdsetsTabPanel from "components/facebook/adsManager/adsets/TabPanel";
import FacebookAdsManagerCampaignsTabPanel from "components/facebook/adsManager/campaigns/TabPanel";
import { useTranslation } from "react-i18next";
import { useState, SyntheticEvent } from "react";

export default function FacebookAdsManagerLayout(): JSX.Element {
  const [tab, setTab] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      {/*TABS*/}
      <Tabs
        value={tab}
        onChange={(_: SyntheticEvent, newTab: number) => {
          setTab(newTab);
        }}
        variant="fullWidth"
      >
        <Tab label={t("adsmanager.accounts.accounts")} />
        <Tab label={t("adsmanager.adAccounts.adAccounts")} />
        <Tab label={t("adsmanager.campaigns.campaigns")} />
        <Tab label={t("adsmanager.adsets.adsets")} />
        <Tab label={t("adsmanager.ads.ads")} />
      </Tabs>
      {/*TABS END*/}

      {/*TAB CONTENT*/}
      {tab === 0 && <FacebookAdsManagerAccountsTabPanel />}
      {tab === 1 && <FacebookAdsManagerAdAccountsTabPanel />}
      {tab === 2 && <FacebookAdsManagerCampaignsTabPanel />}
      {tab === 3 && <FacebookAdsManagerAdsetsTabPanel />}
      {tab === 4 && <FacebookAdsManagerAdsTabPanel />}
      {/*TAB CONTENT END*/}
    </>
  );
}
