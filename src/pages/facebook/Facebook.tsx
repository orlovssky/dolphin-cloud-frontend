import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

export default function Facebook(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h2" className="facebook__title">
        <span>
          {t("facebook.title1")}
          <span className="facebook__title_fb"> Facebook </span>
          {t("facebook.title2")}
        </span>
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h4">
            {t("facebook.autoCampaignCreation")}
          </Typography>
          <Typography variant="subtitle1">
            {t("facebook.autoCampaignCreationSub")}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <iframe
            className="facebook__video"
            src="https://www.youtube.com/embed/XRrM7XdDzn8"
            title="YouTube video player"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
