import CommonTable from "components/common/table/Table";
import CommonTopbar from "components/common/topbar/Topbar";
import { TableItemModel } from "models/facebook/adAccounts.models";
import {
  rows,
  url,
} from "services/constants/facebook/adsManager/table/adAccounts.constants";

export default function FacebookAdsManagerAdAccountsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
