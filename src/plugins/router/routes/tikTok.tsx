import Index from "pages/tikTok/TikTok";
import { Route } from "react-router-dom";

export default (
  <Route path="/tik-tok">
    {/* INDEX */}
    <Route index element={<Index />} />
    {/* INDEX END */}
  </Route>
);