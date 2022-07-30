import { useAppSelector, useAppDispatch } from "plugins/store/hooks";
import { setItems } from "plugins/store/modules/common/table.modules";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import itemsLogic from "./items.logic";

export default function <Item>(url: string, heightOffset?: number) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { innerHeight } = useAppSelector((state) => state.appData);
  const height = innerHeight - (heightOffset || 0);
  const { items, loading, rowsPerPage, page, total, loadItems } =
    itemsLogic<Item>(url);

  useEffect(() => {
    loadItems();

    return () => {
      dispatch(setItems([]));
    };
  }, []);

  return {
    t,
    items,
    loading,
    rowsPerPage,
    page,
    total,
    height,
    loadItems,
  };
}
