import { RowModel } from "models/common/table.models";
import { TableItemModel } from "models/facebook/campaigns.models";
import { fbEndpoints } from "plugins/axios/endpoints";

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

export const url = `${fbEndpoints.campaigns}?currency=USD`;
