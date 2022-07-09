import CommonTable from "components/common/table/Table";
import CommonTopbar from "components/common/topbar/Topbar";
import { TableItemModel } from "models/facebook/adsets.models";
import {
  rows,
  url,
} from "services/constants/facebook/adsManager/table/adsets.constants";

export default function FacebookAdsManagerAdsetsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
