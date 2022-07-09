import CommonProxy from "pages/common/Proxy";
import FacebookAdsManager from "pages/facebook/AdsManager";
import Facebook from "pages/facebook/Facebook";
import { Route } from "react-router-dom";

import { RequireAuth } from "../middlewares";

export default (
  <Route path="facebook">
    {/*INDEX*/}
    <Route
      index
      element={
        <RequireAuth>
          <Facebook />
        </RequireAuth>
      }
    />
    {/*INDEX END*/}

    {/*ADSMANAGER*/}
    <Route
      path="ads-manager"
      element={
        <RequireAuth>
          <FacebookAdsManager />
        </RequireAuth>
      }
    >
      <Route
        path=":tab"
        element={
          <RequireAuth>
            <FacebookAdsManager />
          </RequireAuth>
        }
      />
    </Route>
    {/*ADSMANAGER END*/}

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
