import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FacebookAdsManagerAccountsTabPanel from "components/facebook/adsManager/accounts/TabPanel";
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
      {tab === 1 && <div>adAccounts</div>}
      {tab === 2 && <div>campaigns</div>}
      {tab === 3 && <div>adsets</div>}
      {tab === 4 && <div>ads</div>}
      {/*TAB CONTENT END*/}
    </>
  );
}
