import Index from "pages/facebook/Facebook";
import { Route } from "react-router-dom";

export default (
  <Route path="/facebook">
    {/* INDEX */}
    <Route index element={<Index />} />
    {/* INDEX END */}
  </Route>
);
