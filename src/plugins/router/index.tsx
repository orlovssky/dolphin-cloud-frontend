import { Routes } from "react-router-dom";

import MainRoutes from "./routes/main";
import TikTokRoutes from "./routes/tikTok";

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      {/* MAIN */}
      {MainRoutes}
      {/* MAIN END */}

      {/* TIK TOK */}
      {TikTokRoutes}
      {/* TIK TOK END */}
    </Routes>
  );
};

export default AppRoutes;
