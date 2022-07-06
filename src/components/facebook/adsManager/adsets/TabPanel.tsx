import CommonTable from "components/common/table/Table";
import CommonTableTopbar from "components/common/table/Topbar";
import { TableItemModel } from "models/facebook/adsets.models";
import {
  rows,
  url,
} from "services/constants/facebook/adsManager/table/adsets.constants";

export default function FacebookAdsManagerAdsetsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTableTopbar />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
