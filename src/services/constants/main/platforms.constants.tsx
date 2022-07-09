import GoogleIcon from "@mui/icons-material/Google";
import DolphinFacebookIcon from "assets/icons/main/dolphin-facebook.icons";
import DolphinTikTokIcon from "assets/icons/main/dolphin-tik-tok.icons";
import DolphinDarkIcon from "assets/icons/main/dolphinDark.icons";
import FacebookIcon from "assets/icons/main/facebook.icons";
import TikTokIcon from "assets/icons/main/tik-tok.icons";
import { CurrentPlatformModel } from "models/main/main.models";

export const platformsForSidebar = [
  {
    value: "facebook",
    icon: <FacebookIcon />,
  },
  {
    value: "tik-tok",
    icon: <TikTokIcon />,
  },
  {
    value: "google",
    icon: <GoogleIcon />,
  },
];

export const getDolphinPlatformIcon = (
  currentPlatform: CurrentPlatformModel
) => {
  switch (currentPlatform) {
    case "tik-tok":
      return <DolphinTikTokIcon fontSize="large" />;
    case "google":
      return <DolphinDarkIcon fontSize="large" />;
    default:
      return <DolphinFacebookIcon fontSize="large" />;
  }
};
