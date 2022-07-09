import CommonTable from "components/common/table/Table";
import CommonTopbar from "components/common/topbar/Topbar";
import { TableItemModel } from "models/facebook/accounts.models";
import {
  rows,
  url,
} from "services/constants/facebook/adsManager/table/accounts.constants";

export default function FacebookAdsManagerAccountsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
