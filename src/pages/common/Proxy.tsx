import CommonTable from "components/common/table/Table";
import CommonTopbar from "components/common/topbar/Topbar";
import { TableItemModel } from "models/common/proxy.models";
import { rows, url } from "services/constants/common/proxy/table.constants";

export default function CommonProxy(): JSX.Element {
  return (
    <>
      <CommonTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel>
        url={url}
        heightOffset={52 + 52}
        rows={rows}
      />
    </>
  );
}
