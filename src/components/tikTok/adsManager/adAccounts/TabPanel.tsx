import CommonTable from "components/common/table/Table";
import CommonTableTopbar from "components/common/table/Topbar";
import { TableItemModel } from "models/tikTok/adAccounts.models";
import {
  rows,
  url,
} from "services/constants/tikTok/adsManager/table/adAccounts.constants";

export default function TikTokAdsManagerAdAccountsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTableTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
