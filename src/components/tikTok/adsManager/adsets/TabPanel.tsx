import CommonTable from "components/common/table/Table";
import CommonTableTopbar from "components/common/table/Topbar";
import { TableItemModel } from "models/tikTok/adsets.models";
import {
  rows,
  url,
} from "services/constants/tikTok/adsManager/table/adsets.constants";

export default function TikTokAdsManagerAdsetsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTableTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
