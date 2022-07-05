import { enUS, ruRU, zhCN, Localization } from "@mui/material/locale";
import CircleCnIcon from "assets/icons/flags/circleCn";
import CircleGbIcon from "assets/icons/flags/circleGb";
import CircleRuIcon from "assets/icons/flags/circleRu";
import RectCnIcon from "assets/icons/flags/rectCn";
import RectGbIcon from "assets/icons/flags/rectGb";
import RectRuIcon from "assets/icons/flags/rectRu";

export const localesForSidebar = [
  {
    value: "en",
    icon: <RectGbIcon />,
  },
  {
    value: "ru",
    icon: <RectRuIcon />,
  },
  {
    value: "cn",
    icon: <RectCnIcon />,
  },
];

export const getLocaleIcon = (icon: string) => {
  switch (icon) {
    case "en":
      return <CircleGbIcon fontSize="large" />;
    case "ru":
      return <CircleRuIcon fontSize="large" />;
    case "cn":
      return <CircleCnIcon fontSize="large" />;
  }
};

export const getLocale = (value: string): Localization => {
  switch (value) {
    case "ru":
      return ruRU;
    case "cn":
      return zhCN;
    default:
      return enUS;
  }
};
