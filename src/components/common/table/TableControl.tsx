import { LoadItemsModels } from "models/common/table.models";
import { useAppSelector, useAppDispatch } from "plugins/store/hooks";
import {
  setItems,
  setLoading,
  setPagination,
} from "plugins/store/modules/common/table.modules";
import { useTranslation } from "react-i18next";
import { getListApi } from "services/api/common/list.api";

export function useTableControls<Item>(url: string) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { items, loading, rowsPerPage, page, total, search } = useAppSelector(
    (state) => state.table
  );
  const { innerHeight } = useAppSelector((state) => state.appData);
  const height = innerHeight - 48 - 64 - 52;

  const loadItems = (payload?: LoadItemsModels) => {
    let rowsPerPageForUrl = rowsPerPage;
    let pageForUrl = page;
    const q = search;

    if (payload) {
      if (payload.rowsPerPage !== undefined) {
        rowsPerPageForUrl = payload.rowsPerPage;
      }

      if (payload.page !== undefined) {
        pageForUrl = payload.page;
      }
    }

    dispatch(setLoading(true));
    let urlString = `${url}&perPage=${rowsPerPageForUrl}&page=${
      pageForUrl + 1
    }`;

    if (q.trim()) {
      urlString += `&q=${q}`;
    }

    getListApi<Item>(urlString)
      .then(({ data }) => {
        const { data: items, meta } = data;
        if (Array.isArray(items)) {
          dispatch(setItems(items));
        }
        if (meta) {
          dispatch(
            setPagination({
              rowsPerPage: meta.per_page,
              page: meta.current_page - 1,
              total: meta.total,
            })
          );
        }
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

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
