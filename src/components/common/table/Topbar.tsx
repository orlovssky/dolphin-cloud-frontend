import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

export default function CommonTableTopbar(): JSX.Element {
  return (
    <Container className="table__topbar">
      <TextField size="small" />
    </Container>
  );
}
