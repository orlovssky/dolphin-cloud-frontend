import CommonTable from "components/common/table/Table";
import CommonTopbar from "components/common/topbar/Topbar";
import { TableItemModel } from "models/tikTok/adAccounts.models";
import {
  rows,
  url,
} from "services/constants/tikTok/adsManager/table/adAccounts.constants";

export default function TikTokAdsManagerAdAccountsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
