import { RowModel } from "models/common/table.models";
import { TableItemModel } from "models/facebook/adAccounts.models";
import { fbEndpoints } from "plugins/axios/endpoints";

export const rows: RowModel<TableItemModel>[] = [
  {
    indexKey: "id",
    itemKey: "id",
    title: "common.id",
  },
  {
    indexKey: "name",
    itemKey: "name",
    title: "common.name",
  },
  {
    indexKey: "currency",
    itemKey: "currency",
    title: "common.currency",
  },
];

export const url = `${fbEndpoints.adAccounts}?currency=USD`;
