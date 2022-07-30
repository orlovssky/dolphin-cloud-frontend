import { SignInFormModel } from "models/main/auth.models";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { KeyboardEvent, ChangeEvent } from "react";
import { signInApi } from "services/api/main/auth.api";
import { emailRegex } from "services/constants/common/regex.constants";
import {
  emailErrors,
  passwordErrors,
} from "services/validations/main/signIn.validations";

const initial: SignInFormModel = {
  email: "",
  password: "",
};

export default function () {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState(initial);
  const [loading, setLoading] = useState(false);
  const getPasswordError = () => passwordErrors(errors, t);
  const getEmailError = () => emailErrors(errors, t);

  const isValid = (values: SignInFormModel) =>
    Object.values(values).every((value) => value === "");

  const validate = () => {
    const temp = { ...initial };

    if (values.email === "") {
      temp.email = "empty";
    } else if (!emailRegex.test(values.email)) {
      temp.email = "invalidEmail";
    }

    if (values.password === "") {
      temp.password = "empty";
    } else if (values.password.length < 5) {
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

  const handleSubmit = () => {
    if (!validate()) return;

    const { email, password } = values;
    setLoading(true);
    signInApi({ username: email, password })
      .then(({ data }) => {
        if (data.data?.access_token) {
          localStorage.setItem("dolphin-api-token", data.data.access_token);
          navigate("/tik-tok/ads-manager");
        }
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    if (!isValid(errors)) setErrors({ ...initial });
  }, [values]);

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") handleSubmit();
  };

  return {
    t,
    showPass,
    setShowPass,
    handleInputValue,
    getPasswordError,
    getEmailError,
    handleSubmit,
    handleKeyPress,
    loading,
  };
}
