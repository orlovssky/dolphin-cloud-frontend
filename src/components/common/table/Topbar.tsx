import Container from "@mui/material/Container";
import { TopbarProps } from "models/common/table.models";

import CommonTableTopbarSearch from "./TopbarSearch";

export default function CommonTableTopbar<Item>({
  url,
}: TopbarProps): JSX.Element {
  return (
    <Container maxWidth={false} className="table__topbar">
      <CommonTableTopbarSearch<Item> url={url} />
    </Container>
  );
}
