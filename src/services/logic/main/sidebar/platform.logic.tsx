import { CurrentPlatformModel } from "models/main/main.models";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import {
  getCurrentPlatform,
  isAuthorized,
} from "services/utils/common/route.utils";

export default function () {
  const navigate = useNavigate();
  const currentPlatform: CurrentPlatformModel = getCurrentPlatform();
  const isSelected = (value: string) => currentPlatform === value;
  const isDisabled = (value: string) => !isAuthorized() || value === "google";

  const handleChange = (_: MouseEvent<HTMLElement>, value: string) => {
    if (currentPlatform !== value) {
      navigate(`/${value}`);
    }
  };

  const handleClick = () => {
    if (currentPlatform) {
      navigate(`/${currentPlatform}`);
    }
  };

  return {
    currentPlatform,
    isSelected,
    isDisabled,
    handleChange,
    handleClick,
  };
}
