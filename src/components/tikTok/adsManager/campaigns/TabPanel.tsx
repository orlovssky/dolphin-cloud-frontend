import CommonTable from "components/common/table/Table";
import CommonTopbar from "components/common/topbar/Topbar";
import { TableItemModel } from "models/tikTok/campaigns.models";
import {
  rows,
  url,
} from "services/constants/tikTok/adsManager/table/campaigns.constants";

export default function TikTokAdsManagerCampaignsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
