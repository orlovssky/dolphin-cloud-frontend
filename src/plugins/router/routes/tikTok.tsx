import { Route } from "react-router-dom";

const MainRoutes = (
  <Route path="/tik-tok">
    {/* HOME */}
    <Route index element={<div>Tik Tok</div>} />
    {/* HOME END */}
  </Route>
);

export default MainRoutes;
