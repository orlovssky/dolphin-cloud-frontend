import { RowModel } from "models/common/table.models";
import { TableItemModel } from "models/facebook/campaigns.models";

export const rows: RowModel<TableItemModel>[] = [
  {
    indexKey: "id",
    itemKey: "id",
    title: "common.id",
  },
  {
    indexKey: "campaign_id",
    itemKey: "campaign_id",
    title: "campaign_id",
  },
];

export const url = "/fb-campaigns?perPage=50&page=1&currency=USD";
