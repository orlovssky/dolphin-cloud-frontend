import CommonTable from "components/common/table/Table";
import CommonTopbar from "components/common/topbar/Topbar";
import { TableItemModel } from "models/tikTok/adsets.models";
import {
  rows,
  url,
} from "services/constants/tikTok/adsManager/table/adsets.constants";

export default function TikTokAdsManagerAdsetsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
