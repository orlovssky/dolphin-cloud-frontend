import CommonTable from "components/common/table/Table";
import CommonTableTopbar from "components/common/table/Topbar";
import { TableItemModel } from "models/facebook/campaigns.models";
import {
  rows,
  url,
} from "services/constants/facebook/adsManager/table/campaigns.constants";

export default function FacebookAdsManagerCampaignsTabPanel(): JSX.Element {
  return (
    <>
      <CommonTableTopbar<TableItemModel> url={url} />
      <CommonTable<TableItemModel> url={url} rows={rows} />
    </>
  );
}
