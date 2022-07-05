import { useLocation } from "react-router-dom";

export const getCurrentPlatform = () => {
  const { pathname } = useLocation();

  if (pathname.startsWith("/facebook")) {
    return "facebook";
  } else if (pathname.startsWith("/tik-tok")) {
    return "tik-tok";
  } else if (pathname.startsWith("/google")) {
    return "google";
  } else {
    return null;
  }
};
