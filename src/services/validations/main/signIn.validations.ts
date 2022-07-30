import { SignInFormModel } from "models/main/auth.models";
import { TFunction } from "react-i18next";

export const emailErrors = (errors: SignInFormModel, t: TFunction) => {
  switch (errors.email) {
    case "empty":
      return t("validation.required", {
        field: t("auth.email").toLowerCase(),
      });

    case "invalidEmail":
      return t("validation.email");

    default:
      return "";
  }
};

export const passwordErrors = (errors: SignInFormModel, t: TFunction) => {
  switch (errors.password) {
    case "empty":
      return t("validation.required", {
        field: t("auth.password").toLowerCase(),
      });

    case "lessThan5":
      return t("validation.min", {
        field: t("auth.password").toLowerCase(),
        length: 5,
      });

    default:
      return "";
  }
};
