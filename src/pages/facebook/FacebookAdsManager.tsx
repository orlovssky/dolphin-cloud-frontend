import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { useState, SyntheticEvent, useEffect } from "react";
import { tabs } from "services/constants/facebook/adsManager/tabs.constants";

export default function FacebookAdsManager(): JSX.Element {
  const navigate = useNavigate();
  const { tab: routeTab } = useParams();
  const { t } = useTranslation();
  const [tab, setTab] = useState<number | null>(null);
  const handleChange = (_: SyntheticEvent, tabIndex: number) => {
    setTab(tabIndex);
    navigate(`../ads-manager/${tabs[tabIndex].tabName}`);
  };

  useEffect(() => {
    let initialTab = 1;

    if (routeTab) {
      const tabIndex = tabs.findIndex((i) => i.tabName === routeTab);

      if (tabIndex > -1) initialTab = tabIndex;
    }

    setTab(initialTab);
  }, []);

  return (
    <>
      {/*TABS*/}
      {tab !== null && (
        <Tabs value={tab} variant="fullWidth" onChange={handleChange}>
          {tabs.map(({ title }, index) => (
            <Tab
              key={`FacebookAdsManager-Tab-${index}`}
              label={t(`adsmanager.${title}`)}
            />
          ))}
        </Tabs>
      )}
      {/*TABS END*/}

      {/*TAB CONTENT*/}
      {tab !== null && tabs[tab].component}
      {/*TAB CONTENT END*/}
    </>
  );
}
