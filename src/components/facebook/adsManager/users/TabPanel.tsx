import CommonTable from "components/common/table/Table";
import CommonTopbar from "components/common/topbar/Topbar";
import { TableItemModel } from "models/facebook/users.models";
import {
  rows,
  url,
} from "services/constants/facebook/adsManager/table/users.constants";

export default function FacebookAdsManagerUsersTabPanel(): JSX.Element {
  return (
    <>
      <CommonTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
