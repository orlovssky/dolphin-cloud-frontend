import { RowModel } from "models/common/table.models";
import { TableItemModel } from "models/tikTok/adAccounts.models";
import { ttEndpoints } from "plugins/axios/endpoints";

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

export const url = `${ttEndpoints.adAccounts}?aggregateColumns[]=clicks&aggregateColumns[]=conversions&aggregateColumns[]=cost_per_registration&aggregateColumns[]=cost_per_result&aggregateColumns[]=cpa&aggregateColumns[]=cpc&aggregateColumns[]=cpm&aggregateColumns[]=ctr&aggregateColumns[]=cvr&aggregateColumns[]=impressions&aggregateColumns[]=result&aggregateColumns[]=stat_cost&aggregateColumns[]=total_registration&from_date=2022-01-01&to_date=2022-12-01`;
