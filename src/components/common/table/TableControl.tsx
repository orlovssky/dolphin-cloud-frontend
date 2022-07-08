import { LoadItemsModels } from "models/common/table.models";
import { useAppSelector, useAppDispatch } from "plugins/store/hooks";
import {
  setItems,
  setLoading,
  setPagination,
} from "plugins/store/modules/common/table.modules";
import { useTranslation } from "react-i18next";
import { getListApi } from "services/api/common/list.api";

export function useTableControls<Item>(url: string, heightOffset: number) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { items, loading, rowsPerPage, page, total, search } = useAppSelector(
    (state) => state.table
  );
  const { innerHeight } = useAppSelector((state) => state.appData);
  // console.log(heightOffset);
  const height = innerHeight - heightOffset;

  const loadItems = (payload?: LoadItemsModels) => {
    let urlString = url;
    let rowsPerPageForUrl = rowsPerPage;
    let pageForUrl = page;
    const q = search;
    dispatch(setLoading(true));

    if (payload) {
      if (payload.rowsPerPage !== undefined) {
        rowsPerPageForUrl = payload.rowsPerPage;
      }

      if (payload.page !== undefined) {
        pageForUrl = payload.page;
      }
    }

    if (urlString.slice(-1) !== "?") urlString += "&";

    urlString += `perPage=${rowsPerPageForUrl}&page=${pageForUrl + 1}`;

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
