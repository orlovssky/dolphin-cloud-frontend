import { Routes } from "react-router-dom";

import FacebookRoutes from "./routes/facebook";
import MainRoutes from "./routes/main";
import TikTokRoutes from "./routes/tikTok";

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      {MainRoutes}
      {TikTokRoutes}
      {FacebookRoutes}
    </Routes>
  );
};

export default AppRoutes;
