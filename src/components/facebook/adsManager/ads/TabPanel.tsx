import CommonTable from "components/common/table/Table";
import CommonTopbar from "components/common/topbar/Topbar";
import { TableItemModel } from "models/facebook/ads.models";
import {
  rows,
  url,
} from "services/constants/facebook/adsManager/table/ads.constants";

export default function FacebookAdsManagerAdsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
