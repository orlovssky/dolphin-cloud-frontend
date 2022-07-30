import { useAppDispatch, useAppSelector } from "plugins/store/hooks";
import { setSearch } from "plugins/store/modules/common/table.modules";
import { useTranslation } from "react-i18next";
import { ChangeEvent, useEffect, useRef } from "react";
import itemsLogic from "services/logic/common/table/items.logic";

export default function <Item>(url: string) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isInitialMount = useRef(true);
  const { search } = useAppSelector((state) => state.table);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
  };
  const { loadItems } = itemsLogic<Item>(url);

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

  return {
    t,
    search,
    handleChange,
  };
}
