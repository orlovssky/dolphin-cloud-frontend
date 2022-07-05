import Paper from "@mui/material/Paper";
import Routes from "plugins/router";
import { useAppSelector } from "plugins/store/hooks";

import MainSidebar from "./sidebar/Sidebar";

export default function MainLayout(): JSX.Element {
  const { isTouchScreen } = useAppSelector((state) => state.appData);

  return (
    <>
      <MainSidebar />
      <Paper
        className={`main__paper ${isTouchScreen ? "main_touchscreen" : ""}`}
      >
        <Routes />
      </Paper>
    </>
  );
}
