import TextField from "@mui/material/TextField";
import { useTableControls } from "components/common/table/Control";
import { TopbarSearchProps } from "models/common/table.models";
import { useAppDispatch, useAppSelector } from "plugins/store/hooks";
import { setSearch } from "plugins/store/modules/common/table.modules";
import { ChangeEvent, useEffect, useRef } from "react";

export default function CommonTopbarSearch<Item>({
  url,
}: TopbarSearchProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.table);
  const isInitialMount = useRef(true);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
  };
  const { t, loadItems } = useTableControls<Item>(url);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const delayDebounce = setTimeout(() => {
        loadItems({ page: 0 });
      }, 500);

      return () => clearTimeout(delayDebounce);
    }
  }, [search]);

  useEffect(() => {
    return () => {
      dispatch(setSearch(""));
    };
  }, []);

  return (
    <TextField
      size="small"
      label={t("common.search")}
      value={search}
      onChange={handleChange}
    />
  );
}
