import Error404 from "pages/main/Error404";
import SignIn from "pages/main/SignIn";
import { Route } from "react-router-dom";

import { RequireAuth, RequireUnauth } from "../middlewares";

export default (
  <Route path="/">
    {/*HOME*/}
    <Route
      index
      element={
        <RequireAuth>
          <div>Main Index</div>
        </RequireAuth>
      }
    />
    {/*HOME END*/}

    {/*SIGN IN*/}
    <Route
      path="sign-in/*"
      element={
        <RequireUnauth>
          <SignIn />
        </RequireUnauth>
      }
    />
    {/*SIGN IN END*/}

    {/*404*/}
    <Route path="*" element={<Error404 />} />
    {/*404 END*/}
  </Route>
);
