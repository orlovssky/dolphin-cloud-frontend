import { RowModel } from "models/common/table.models";
import { TableItemModel } from "models/facebook/adsets.models";

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

export const url = "/fb-adsets?currency=USD";
