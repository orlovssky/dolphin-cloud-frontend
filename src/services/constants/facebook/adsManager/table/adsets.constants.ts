import { RowModel } from "models/common/table.models";
import { TableItemModel } from "models/facebook/adsets.models";
import { fbEndpoints } from "plugins/axios/endpoints";

export const rows: RowModel<TableItemModel>[] = [
  {
    indexKey: "id",
    itemKey: "id",
    title: "common.id",
  },
  {
    indexKey: "adset_id",
    itemKey: "adset_id",
    title: "adset_id",
  },
];

export const url = `${fbEndpoints.adsets}?currency=USD`;
