import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import DolphinSimpleIcon from "assets/icons/main/dolphinSimple.icons";
import { useTranslation } from "react-i18next";
import { cards } from "services/constants/tikTok/main/index";

export default function TikTok(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h2" className="tik-tok__title">
        <span>
          {t("tikTok.title1")} TikT<span className="tik-tok__o">o</span>k{" "}
          {t("tikTok.title2")}
        </span>
      </Typography>

      <Typography variant="h4">{t("tikTok.featuresInDevelopment")}</Typography>

      <Grid container spacing={2} className="tik-tok__cards">
        {cards.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={`TikTok-${card.title}-${index}`}
          >
            <Card raised className="tik-tok__card">
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {card.title}
                </Typography>
                <List>
                  {card.list.map((item, index) => (
                    <ListItem key={`TikTok-${item}-${index}`}>
                      <ListItemIcon className="tik-tok__list-icon">
                        <DolphinSimpleIcon color="error" />
                      </ListItemIcon>
                      <ListItemText>{item}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
