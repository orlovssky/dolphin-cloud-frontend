import CommonTable from "components/common/table/Table";
import CommonTableTopbar from "components/common/table/Topbar";
import { RowModel } from "models/common/table.models";
import { TableItemModel } from "models/facebook/accounts.models";

const rows: RowModel<TableItemModel>[] = [
  {
    value: "id",
    title: "common.id",
  },
  {
    value: "name",
    title: "common.name",
  },
  {
    value: "status",
    title: "common.status",
  },
];

export default function FacebookAdsManagerAccountsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTableTopbar />
      <CommonTable<RowModel<TableItemModel>>
        url="/fb-accounts?perPage=50&page=1&currency=USD"
        rows={rows}
      />
    </>
  );
}
