import { RowModel } from "models/common/table.models";
import { TableItemModel } from "models/tikTok/apps.models";

export const rows: RowModel<TableItemModel>[] = [
  {
    indexKey: "name",
    itemKey: "name",
    title: "common.name",
  },
  {
    indexKey: "platform",
    itemKey: "platform",
    title: "common.platform",
  },
];

export const url = "/tiktok/user-apps?";
