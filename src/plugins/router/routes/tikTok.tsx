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
          <div>ADSMANAGER</div>
        </RequireAuth>
      }
    />
    {/*ADSMANAGER END*/}
  </Route>
);
