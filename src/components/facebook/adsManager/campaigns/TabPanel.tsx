import CommonTable from "components/common/table/Table";
import CommonTopbar from "components/common/topbar/Topbar";
import { TableItemModel } from "models/facebook/campaigns.models";
import {
  rows,
  url,
} from "services/constants/facebook/adsManager/table/campaigns.constants";

export default function FacebookAdsManagerCampaignsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
