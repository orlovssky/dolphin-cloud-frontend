import CommonTable from "components/common/table/Table";
import CommonTableTopbar from "components/common/table/Topbar";
import { TableItemModel } from "models/facebook/users.models";
import {
  rows,
  url,
} from "services/constants/facebook/adsManager/table/users.constants";

export default function FacebookAdsManagerUsersTabPanel(): JSX.Element {
  return (
    <>
      <CommonTableTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
