import { ThemeProvider } from "@mui/material/styles";
import MainLayout from "components/main/layout/Layout";
import appLogic from "services/logic/main/app.logic";

export default function App(): JSX.Element {
  const { theme } = appLogic();

  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
}
