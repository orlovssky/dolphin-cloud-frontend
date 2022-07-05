import { SignInFormModel } from "models/main/auth.models";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { KeyboardEvent, ChangeEvent } from "react";
import { signInApi } from "services/api/main/auth.api";
import { emailRegex } from "services/constants/common/regex.constants";

const initialFormValues: SignInFormModel = {
  email: "",
  password: "",
};

export const useFormControls = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormValues);
  const [loading, setLoading] = useState(false);

  const isValid = (values: SignInFormModel) => {
    return Object.values(values).every((value) => value === "");
  };

  const validate = () => {
    const temp = { ...initialFormValues };
    const { email, password } = values;

    if (email === "") {
      temp.email = "empty";
    } else if (!emailRegex.test(email)) {
      temp.email = "invalidEmail";
    }

    if (password === "") {
      temp.password = "empty";
    } else if (password.length < 5) {
      temp.password = "lessThan5";
    }

    setErrors({ ...temp });

    return isValid(temp);
  };

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const getPasswordError = () => {
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

  const getEmailError = () => {
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

  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);
    const { email, password } = values;

    signInApi({
      username: email,
      password,
    })
      .then(({ data }) => {
        if (data.data?.access_token) {
          localStorage.setItem("dolphin-api-token", data.data.access_token);
          navigate("/tik-tok/ads-manager");
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!isValid(errors)) {
      setErrors({ ...initialFormValues });
    }
  }, [values]);

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") handleSubmit();
  };

  return {
    handleInputValue,
    getPasswordError,
    getEmailError,
    handleSubmit,
    handleKeyPress,
    loading,
  };
};
