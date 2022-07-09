import CommonTable from "components/common/table/Table";
import CommonTopbar from "components/common/topbar/Topbar";
import { TableItemModel } from "models/tikTok/apps.models";
import { rows, url } from "services/constants/tikTok/apps/table.constants";

export default function TikTokApps(): JSX.Element {
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
