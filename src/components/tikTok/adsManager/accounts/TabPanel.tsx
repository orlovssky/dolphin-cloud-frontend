import CommonTable from "components/common/table/Table";
import CommonTopbar from "components/common/topbar/Topbar";
import { TableItemModel } from "models/tikTok/accounts.models";
import {
  rows,
  url,
} from "services/constants/tikTok/adsManager/table/accounts.constants";

export default function TikTokAdsManagerAccountsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
