import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import { useFormControls } from "./FormControl";

export default function SignInForm(): JSX.Element {
  const { t } = useTranslation();
  const [showPass, setShowPass] = useState(false);
  const {
    handleInputValue,
    getPasswordError,
    getEmailError,
    handleSubmit,
    handleKeyPress,
    loading,
  } = useFormControls();

  return (
    <Container component="main" maxWidth="xs" className="sign-in__container">
      <TextField
        name="email"
        label={t("auth.email")}
        fullWidth
        autoComplete="email"
        autoFocus
        size="small"
        onChange={handleInputValue}
        onKeyDown={handleKeyPress}
        error={!!getEmailError()}
        helperText={getEmailError()}
      />

      <TextField
        name="password"
        label={t("auth.password")}
        fullWidth
        autoComplete="password"
        size="small"
        type={showPass ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => setShowPass(!showPass)}>
                {showPass ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={handleInputValue}
        onKeyDown={handleKeyPress}
        error={!!getPasswordError()}
        helperText={getPasswordError()}
      />

      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        onClick={handleSubmit}
        loading={loading}
      >
        {t("auth.toSignIn")}
      </LoadingButton>
    </Container>
  );
}
