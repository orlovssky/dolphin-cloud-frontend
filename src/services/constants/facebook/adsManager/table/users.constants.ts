import { RowModel } from "models/common/table.models";
import { TableItemModel } from "models/facebook/accounts.models";
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
    indexKey: "status",
    itemKey: "status",
    title: "common.status",
  },
];

export const url = `${fbEndpoints.users}?currency=USD`;
