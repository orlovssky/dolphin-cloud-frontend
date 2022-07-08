import CommonTable from "components/common/table/Table";
import CommonTableTopbar from "components/common/table/Topbar";
import { TableItemModel } from "models/tikTok/apps.models";
import { rows, url } from "services/constants/tikTok/apps/table.constants";

export default function TikTokApps(): JSX.Element {
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
