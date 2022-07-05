import Error404 from "pages/main/Error404";
import { Route } from "react-router-dom";

export default (
  <Route path="/">
    {/* HOME */}
    <Route index element={<div>Main Index</div>} />
    {/* HOME END */}

    {/* 404 */}
    <Route path="*" element={<Error404 />} />
    {/* 404 END */}
  </Route>
);
