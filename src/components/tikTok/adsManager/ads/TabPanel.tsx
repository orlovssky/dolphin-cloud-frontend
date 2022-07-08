import CommonTable from "components/common/table/Table";
import CommonTableTopbar from "components/common/table/Topbar";
import { TableItemModel } from "models/tikTok/ads.models";
import {
  rows,
  url,
} from "services/constants/tikTok/adsManager/table/ads.constants";

export default function TikTokAdsManagerAdsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTableTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
