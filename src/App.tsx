import { ThemeProvider } from "@mui/material/styles";
import { useAppControls } from "components/main/app/Control";
import MainLayout from "components/main/layout/Layout";

export default function App(): JSX.Element {
  const { theme } = useAppControls();

  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
}
