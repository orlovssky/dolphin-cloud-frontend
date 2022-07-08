import CommonProxy from "pages/common/CommonProxy";
import TikTokAdsManager from "pages/tikTok/TikTokAdsManager";
import TikTokApps from "pages/tikTok/TikTokApps";
import Index from "pages/tikTok/TikTok";
import { Route } from "react-router-dom";

import { RequireAuth } from "../middlewares";

export default (
  <Route path="tik-tok">
    {/*INDEX*/}
    <Route
      index
      element={
        <RequireAuth>
          <Index />
        </RequireAuth>
      }
    />
    {/*INDEX END*/}

    {/*ADSMANAGER*/}
    <Route
      path="ads-manager"
      element={
        <RequireAuth>
          <TikTokAdsManager />
        </RequireAuth>
      }
    >
      <Route
        path=":tab"
        element={
          <RequireAuth>
            <TikTokAdsManager />
          </RequireAuth>
        }
      />
    </Route>
    {/*ADSMANAGER END*/}

    {/*APPS*/}
    <Route
      path="apps"
      element={
        <RequireAuth>
          <TikTokApps />
        </RequireAuth>
      }
    />
    {/*APPS END*/}

    {/*PROXY*/}
    <Route
      path="proxy"
      element={
        <RequireAuth>
          <CommonProxy />
        </RequireAuth>
      }
    />
    {/*PROXY END*/}
  </Route>
);
