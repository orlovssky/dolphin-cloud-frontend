import TextField from "@mui/material/TextField";
import { TopbarSearchProps } from "models/common/table.models";
import searchLogic from "services/logic/common/search.logic";

export default function CommonTopbarSearch<Item>({
  url,
}: TopbarSearchProps): JSX.Element {
  const { t, search, handleChange } = searchLogic<Item>(url);

  return (
    <TextField
      size="small"
      label={t("common.search")}
      value={search}
      onChange={handleChange}
    />
  );
}
