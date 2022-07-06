import { RowModel } from "models/common/table.models";
import { TableItemModel } from "models/facebook/ads.models";

export const rows: RowModel<TableItemModel>[] = [
  {
    indexKey: "id",
    itemKey: "id",
    title: "common.id",
  },
  {
    indexKey: "ad_id",
    itemKey: "ad_id",
    title: "ad_id",
  },
];

export const url = "/fb-ads?currency=USD";
