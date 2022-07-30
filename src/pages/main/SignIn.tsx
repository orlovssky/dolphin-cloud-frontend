import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import signInLogic from "services/logic/main/signIn.logic";

export default function SignIn(): JSX.Element {
  const {
    t,
    showPass,
    setShowPass,
    handleInputValue,
    getPasswordError,
    getEmailError,
    handleSubmit,
    handleKeyPress,
    loading,
  } = signInLogic();

  return (
    <Container component="main" maxWidth="xs" className="sign-in__container">
      {/*EMAIL*/}
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
      {/*EMAIL END*/}

      {/*PASSWORD*/}
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
      {/*PASSWORD END*/}

      {/*SUBMIT*/}
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        onClick={handleSubmit}
        loading={loading}
      >
        {t("auth.toSignIn")}
      </LoadingButton>
      {/*SUBMIT END*/}
    </Container>
  );
}
