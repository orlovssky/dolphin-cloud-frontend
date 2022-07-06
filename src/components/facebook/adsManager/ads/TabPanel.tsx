import CommonTable from "components/common/table/Table";
import CommonTableTopbar from "components/common/table/Topbar";
import { TableItemModel } from "models/facebook/ads.models";
import {
  rows,
  url,
} from "services/constants/facebook/adsManager/table/ads.constants";

export default function FacebookAdsManagerAdsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTableTopbar />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}