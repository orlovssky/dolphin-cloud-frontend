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

const cards = [
  {
    title: "Статистика",
    list: [
      "Интеграция с трекерами",
      "Гибкая настройка для фильтрафии",
      "Настройка кастомных столбцов",
      "Экспорт csv, xls, pdf",
      "Вывод лимитов о приближающемся билле",
    ],
  },
  {
    title: "Командная работа",
    list: [
      "Создание ролей для команды",
      "3 уровня ролей: Admin, Teamlead, Media buyer",
      "Назначение ресурсов на каждого участника",
      "Просмотр статистики по каждому участнику",
      "Передача ресурсов от одного участника к другому",
    ],
  },
  {
    title: "Управление рекламой",
    list: [
      "Дублирование и удаление кампаний, адсетов и объявлений",
      "Назначение тегов на кампании и объявления",
      "Создание своих автоправил",
      "Массовое создание пикселей",
      "Привязка карт и пополнение балансов",
    ],
  },
  {
    title: "Реферальная программа",
    list: [
      "15% пожизненные отчисления",
      "Открытость к сотрудничеству и коллаборации",
    ],
  },
  {
    title: "Автозалив и другие функции",
    list: [
      "Мы внимательно прислушиваемся к вашему фидбэку. Если вам не хватает какого-то функционала, пишите нам по контактам ниже",
    ],
  },
];

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

      <Typography variant="h4">Функции в разработке</Typography>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={`TikTok-${card.title}-${index}`}
          >
            <Card>
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
