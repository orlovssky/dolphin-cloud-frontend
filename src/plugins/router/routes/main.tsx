import Error404 from "pages/main/Error404";
import Home from "pages/main/Home";
import { Route } from "react-router-dom";

const MainRoutes = (
  <Route path="/">
    {/* HOME */}
    <Route index element={<Home />} />
    {/* HOME END */}

    {/* 404 */}
    <Route path="*" element={<Error404 />} />
    {/* 404 END */}
  </Route>
);

export default MainRoutes;
