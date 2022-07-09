import { Routes } from "react-router-dom";

import FacebookRoutes from "./routes/facebook.routes";
import MainRoutes from "./routes/main.routes";
import TikTokRoutes from "./routes/tikTok.routes";

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
