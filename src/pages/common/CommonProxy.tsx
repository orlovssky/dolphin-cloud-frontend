import CommonTable from "components/common/table/Table";
import CommonTableTopbar from "components/common/table/Topbar";
import { TableItemModel } from "models/common/proxy.models";
import { rows, url } from "services/constants/common/proxy/table.constants";

export default function CommonProxy(): JSX.Element {
  return (
    <>
      <CommonTableTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel>
        url={url}
        heightOffset={52 + 52}
        rows={rows}
      />
    </>
  );
}
