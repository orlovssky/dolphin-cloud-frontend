import { LoadItemsModels } from "models/common/table.models";
import { useAppSelector, useAppDispatch } from "plugins/store/hooks";
import {
  setItems,
  setLoading,
  setPagination,
} from "plugins/store/modules/common/table.modules";
import { getListApi } from "services/api/common/list.api";

export default function <Item>(url: string) {
  const dispatch = useAppDispatch();
  const { items, loading, rowsPerPage, page, total, search } = useAppSelector(
    (state) => state.table
  );

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
    items,
    loading,
    rowsPerPage,
    page,
    total,
    loadItems,
  };
}
